import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MenuItem } from "@mui/material";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  EventsGrid,
  SearchField,
  HeaderControls,
  StyledFilterSelect,
  StyledResetButton,
} from "./Events.styles";
import EventCard from "../components/Events/EventCard";
import EventModal from "../components/Events/EventModal";
import { Event } from "../types/Event";

function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventOrder, setEventOrder] = useState<number[]>(() => {
    const saved = localStorage.getItem("eventOrder");
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const isDraggingDisabled = searchQuery.length > 0 || typeFilter !== "all";

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus) {
      setIsLoggedIn(true);
    }

    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://api.hackthenorth.com/v3/events"
        );
        let sortedEvents = [...response.data];

        if (eventOrder.length > 0) {
          sortedEvents.sort((a, b) => {
            const indexA = eventOrder.indexOf(a.id);
            const indexB = eventOrder.indexOf(b.id);
            if (indexA === -1 && indexB === -1)
              return a.start_time - b.start_time;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
          });
        } else {
          sortedEvents.sort((a, b) => a.start_time - b.start_time);
        }

        setEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [eventOrder, navigate]);

  const filterEvents = (events: Event[]) => {
    return events.filter((event) => {
      if (!isLoggedIn && event.permission !== "public") {
        return false;
      }

      if (typeFilter !== "all" && event.event_type !== typeFilter) {
        return false;
      }

      if (!searchQuery.trim()) {
        return true;
      }

      const searchTerms = searchQuery
        .toLowerCase()
        .split(" ")
        .filter((term) => term);

      const eventInfo: string = [
        event.name,
        event.description || "",
        event.event_type,
        ...event.speakers.map((speaker) => speaker.name),
      ]
        .join(" ")
        .toLowerCase();

      return searchTerms.every((term) => eventInfo.includes(term));
    });
  };

  const moveEvent = (dragIndex: number, hoverIndex: number) => {
    const filteredEvents = filterEvents(events);

    const draggedEvent = filteredEvents[dragIndex];
    const targetEvent = filteredEvents[hoverIndex];

    const originalDragIndex = events.findIndex((e) => e.id === draggedEvent.id);
    const originalHoverIndex = events.findIndex((e) => e.id === targetEvent.id);

    const newEvents = [...events];
    const [removed] = newEvents.splice(originalDragIndex, 1);
    newEvents.splice(originalHoverIndex, 0, removed);

    setEvents(newEvents);

    const newOrder = newEvents.map((event) => event.id);
    localStorage.setItem("eventOrder", JSON.stringify(newOrder));
    setEventOrder(newOrder);
  };

  const resetOrder = () => {
    localStorage.removeItem("eventOrder");
    setEventOrder([]);
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleRelatedEventClick = (relatedEvent: Event) => {
    setSelectedEvent(relatedEvent);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Events</PageTitle>
        <HeaderControls>
          <StyledFilterSelect
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as string)}
            size="small"
          >
            <MenuItem value="all">All Types</MenuItem>
            <MenuItem value="workshop">Workshop</MenuItem>
            <MenuItem value="activity">Activity</MenuItem>
            <MenuItem value="tech_talk">Tech Talk</MenuItem>
          </StyledFilterSelect>
          <StyledResetButton onClick={resetOrder}>
            Reset Order
          </StyledResetButton>
        </HeaderControls>
      </PageHeader>

      <SearchField
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <EventsGrid>
        {filterEvents(events).map((event, index) => (
          <div
            className={`event-item ${
              draggedIndex === index ? "dragging" : ""
            } ${
              dragOverIndex !== null && draggedIndex !== null
                ? index > draggedIndex && index <= dragOverIndex
                  ? "will-move-back"
                  : index < draggedIndex && index >= dragOverIndex
                  ? "will-move"
                  : ""
                : ""
            }`}
            key={event.id}
            draggable={!isDraggingDisabled}
            onDragStart={(e) => {
              if (isDraggingDisabled) {
                e.preventDefault();
                return;
              }
              e.dataTransfer.setData("text/plain", index.toString());
              setDraggedIndex(index);
            }}
            onDragEnd={(e) => {
              if (isDraggingDisabled) {
                e.preventDefault();
                return;
              }
              setDraggedIndex(null);
              setDragOverIndex(null);
            }}
            onDragOver={(e) => {
              if (isDraggingDisabled) {
                e.preventDefault();
                return;
              }
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
              setDragOverIndex(index);
            }}
            onDragEnter={(e) => {
              if (isDraggingDisabled) {
                e.preventDefault();
                return;
              }
              e.preventDefault();
              setDragOverIndex(index);
            }}
            onDrop={(e) => {
              if (isDraggingDisabled) {
                e.preventDefault();
                return;
              }
              e.preventDefault();
              const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));
              if (dragIndex !== index) {
                moveEvent(dragIndex, index);
              }
              setDraggedIndex(null);
              setDragOverIndex(null);
            }}
          >
            <EventCard event={event} onClick={() => handleEventClick(event)} />
          </div>
        ))}
      </EventsGrid>

      <EventModal
        event={selectedEvent}
        allEvents={events}
        open={modalOpen}
        onClose={handleCloseModal}
        isLoggedIn={isLoggedIn}
        onRelatedEventClick={handleRelatedEventClick}
      />
    </PageContainer>
  );
}

export default Events;
