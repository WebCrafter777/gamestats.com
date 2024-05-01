import Image from "next/image";
import { YouTubeVideo } from "players/youtubePlayer";
import { escape } from "lodash";

export const renderText = (text: string) => {
  let lastIndex = 0;
  const elements = [];
  const matches = [];

  // Regular expression to extract YouTube video ID from URL
  const getYoutubeVideoId = (url: string) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Define patterns for different types of elements
  const patterns = [
    { pattern: /<Image>(.*?)<\/Image>/gs, type: "image" },
    { pattern: /<Youtube>(.*?)<\/Youtube>/gs, type: "youtube" },
    { pattern: /<Email>(.*?)<\/Email>/gs, type: "email" },
    { pattern: /<Link>(.*?)<\/Link>/gs, type: "link" }
  ];

  for (const { pattern, type } of patterns) {
    let match;

    // Find all matches for the current pattern and store them with their type and position
    while ((match = pattern.exec(text)) !== null) {
      matches.push({ type, content: match[1], index: match.index });
    }
  }

  matches.sort((a, b) => a.index - b.index);

  for (const { type, content, index } of matches) {
    if (index > lastIndex) {
      // Escape HTML entities before rendering text content
      elements.push(<p key={`text-${lastIndex}`}>{escape(text.substring(lastIndex, index))}</p>);
    }

    switch (type) {
      case "image":
        // Use URL provided in the content, ensure it's properly encoded
        elements.push(
          <div className="relative w-full h-[400px]">
            <Image key={`image-${index}`} src={escape(content)} alt="Description of the image" fill className="object-cover rounded-[10px]" />
          </div>
        );
        break;
      case "youtube":
        const videoId = getYoutubeVideoId(content);
        if (videoId) {
          elements.push(<YouTubeVideo className="!h-[400px]"  key={`video-${index}`} videoId={videoId} />);
        } else {
          elements.push(<p key={`text-${index}`}>Invalid YouTube URL: {escape(content)}</p>);
        }
        break;
      case "email":
        // Use href attribute with proper escaping
        elements.push(<a key={`email-${index}`} href={`mailto:${escape(content)}`}>{escape(content)}</a>);
        break;
      case "link":
        // Use href attribute with proper escaping
        elements.push(<a key={`link-${index}`} href={escape(content)}>{escape(content)}</a>);
        break;
      default:
        break;
    }

    lastIndex = index + content.length + type.length * 2 + 5;
  }

  if (lastIndex < text.length) {
    // Escape HTML entities before rendering remaining text content
    elements.push(<p key={`text-${lastIndex}`}>{escape(text.substring(lastIndex))}</p>);
  }

  return <div>{elements}</div>;
};
