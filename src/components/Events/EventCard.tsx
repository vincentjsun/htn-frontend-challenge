import { Chip } from "@mui/material";
import { Event } from "../../types/Event";
import {
  CardTitle,
  CardTime,
  CardDescription,
  ContentGroup,
  HeaderGroup,
  StyledCard,
  ChipContainer,
} from "./EventCard.styles";
import {
  getEventTypeColor,
  snakeToTitleCase,
  formatDateTime,
} from "../../utils/EventsUtils";

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

function EventCard({ event, onClick }: EventCardProps) {
  return (
    <StyledCard onClick={onClick}>
      <ContentGroup>
        <HeaderGroup>
          <CardTitle>{event.name}</CardTitle>
        </HeaderGroup>
      </ContentGroup>

      <ContentGroup>
        <CardTime>Start: {formatDateTime(event.start_time)}</CardTime>
        <CardTime sx={{ mt: -2 }}>
          End: {formatDateTime(event.end_time)}
        </CardTime>
      </ContentGroup>

      {event.description && (
        <ContentGroup>
          <CardDescription>{event.description}</CardDescription>
        </ContentGroup>
      )}

      <ChipContainer>
        <Chip
          label={snakeToTitleCase(event.event_type)}
          color={getEventTypeColor(event.event_type)}
        />
      </ChipContainer>
    </StyledCard>
  );
}

export default EventCard;
