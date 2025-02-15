export interface Speaker {
  name: string;
}

export interface Event {
  id: number;
  name: string;
  event_type: "workshop" | "activity" | "tech_talk";
  permission?: "public" | "private";
  start_time: number;
  end_time: number;
  description?: string;
  speakers: Speaker[];
  public_url?: string;
  private_url: string;  
  related_events: number[];
}