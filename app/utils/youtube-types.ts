// YouTube IFrame API types
export interface YouTubeEvent {
  data: number; // 1 = playing, 2 = paused, 0 = ended
  target: YouTubePlayer;
}

export interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  destroy: () => void;
}

export interface YouTubePlayerOptions {
  videoId: string;
  playerVars?: {
    autoplay?: number;
    rel?: number;
    showinfo?: number;
    modestbranding?: number;
    [key: string]: number | string | boolean | undefined;
  };
  events?: {
    onReady?: (event: YouTubeEvent) => void;
    onStateChange?: (event: YouTubeEvent) => void;
    onError?: (event: YouTubeEvent) => void;
    [key: string]: ((event: YouTubeEvent) => void) | undefined;
  };
}

export interface YouTubeAPI {
  Player: {
    new(
      element: HTMLElement | string,
      options: YouTubePlayerOptions
    ): YouTubePlayer;
  };
}

declare global {
  interface Window {
    YT?: YouTubeAPI;
    onYouTubeIframeAPIReady?: () => void;
  }
}
