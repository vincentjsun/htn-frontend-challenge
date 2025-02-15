import { Modal, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Event } from "../../types/Event";
import {
  ModalContainer,
  ModalTitle,
  ModalDateTime,
  Section,
  SectionLabel,
  SectionContent,
  ButtonContainer,
  CloseButton,
  ActionButton,
} from "./EventModal.styles";
import {
  formatDateTime,
  snakeToTitleCase,
  getEventTypeColor,
} from "../../utils/EventsUtils";
import React from "react";
import { ChipContainer } from "./EventCard.styles";

interface EventModalProps {
  event: Event | null;
  allEvents: Event[];
  open: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onRelatedEventClick?: (event: Event) => void;
}

const EventModal = ({
  event,
  allEvents,
  open,
  onClose,
  isLoggedIn,
  onRelatedEventClick,
}: EventModalProps) => {
  if (!event) return null;

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="event-modal-title">
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </CloseButton>
        <ModalTitle id="event-modal-title">{event.name}</ModalTitle>
        <ChipContainer sx={{ mb: 2 }}>
          <Chip
            label={snakeToTitleCase(event.event_type)}
            color={getEventTypeColor(event.event_type)}
          />
        </ChipContainer>

        <Section>
          <ModalDateTime>
            {formatDateTime(event.start_time)} -{" "}
            {formatDateTime(event.end_time)}
          </ModalDateTime>
        </Section>

        <Section>
          <SectionLabel>Description: </SectionLabel>
          <SectionContent>
            {event.description || "No description available."}
          </SectionContent>
        </Section>

        {event.speakers.length > 0 && (
          <Section>
            <SectionLabel>Speakers: </SectionLabel>
            <SectionContent>
              {event.speakers.map((speaker, index) => (
                <span key={index}>
                  {speaker.name}
                  {index < event.speakers.length - 1 ? ", " : ""}
                </span>
              ))}
            </SectionContent>
          </Section>
        )}

        {event.related_events.length > 0 && (
          <Section>
            <SectionLabel>Related Events: </SectionLabel>
            <SectionContent>
              {event.related_events.map((id, index) => {
                const relatedEvent = allEvents.find((e) => e.id === id);
                if (!relatedEvent) return null;
                return (
                  <React.Fragment key={id}>
                    <span
                      className="event-link"
                      onClick={() => onRelatedEventClick?.(relatedEvent)}
                    >
                      {relatedEvent.name}
                    </span>
                    {index < event.related_events.length - 1 ? ", " : ""}
                  </React.Fragment>
                );
              })}
            </SectionContent>
          </Section>
        )}

        <ButtonContainer>
          {event.public_url && (
            <a
              href={event.public_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionButton>View Public Event Page</ActionButton>
            </a>
          )}
          {event.private_url && isLoggedIn && (
            <a
              href={event.private_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActionButton>View Private Event Page</ActionButton>
            </a>
          )}
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default EventModal;
