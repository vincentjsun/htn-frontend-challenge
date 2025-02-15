import { Event } from "../types/Event";

export const snakeToTitleCase = (str: string) => {
  return str
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const getEventTypeColor = (type: Event["event_type"]) => {
  switch (type) {
    case "workshop":
      return "primary";
    case "activity":
      return "success";
    case "tech_talk":
      return "secondary";
  }
};

export const formatDateTime = (timestamp: number) => {
  return new Date(timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};