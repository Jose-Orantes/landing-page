import { useEffect } from "react";

// TypeScript declaration for Wistia's custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id': string;
        aspect?: string;
      };
    }
  }
}

interface VideoPlayerProps {
  className?: string;
  style?: React.CSSProperties;
}

const VideoPlayer = ({
  className = "",
  style
}: VideoPlayerProps) => {
  useEffect(() => {
    // Load Wistia player script
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // Load video-specific script
    const videoScript = document.createElement('script');
    videoScript.src = 'https://fast.wistia.com/embed/rpskxzjcs7.js';
    videoScript.async = true;
    videoScript.type = 'module';
    document.head.appendChild(videoScript);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(playerScript);
      document.head.removeChild(videoScript);
    };
  }, []);

  return (
    <div className={`rounded-xl overflow-hidden ${className}`} style={style}>
      <style>
        {`wistia-player[media-id='rpskxzjcs7']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/rpskxzjcs7/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }`}
      </style>
      <wistia-player media-id="rpskxzjcs7" aspect="1.7777777777777777" />
    </div>
  );
};

export default VideoPlayer;