export interface Podcast {
  title: string;
  date: string;
  description: string;
  duration: string;
  platforms: {
    apple?: string;
    google?: string;
    spotify?: string;
    youtube?: string;
    overcast?: string;
  };
} 