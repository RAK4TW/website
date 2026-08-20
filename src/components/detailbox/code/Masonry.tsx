import { cn } from "../../../utils/cn";
import "./Masonry.css";

interface Image {
  id: string | number;
  url: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
}

interface MasonryFigureProps {
  image: Image;
  index: number;
}

const images = [
  {
    id: "1",
    title: "Sample 1",
    url: "https://picsum.photos/400/300?random=1",
    width: 400,
    height: 300,
  },
  {
    id: "2",
    title: "Sample 2",
    url: "https://picsum.photos/400/300?random=2",
    width: 400,
    height: 300,
  },
  {
    id: "3",
    title: "Sample 3",
    url: "https://picsum.photos/400/300?random=3",
    width: 400,
    height: 300,
  },
  {
    id: "4",
    title: "Sample 4",
    url: "https://picsum.photos/400/300?random=4",
    width: 400,
    height: 300,
  },
  {
    id: "5",
    title: "Sample 5",
    url: "https://picsum.photos/400/300?random=5",
    width: 400,
    height: 300,
  },
  {
    id: "6",
    title: "Sample 6",
    url: "https://picsum.photos/400/300?random=6",
    width: 400,
    height: 300,
  },
  {
    id: "7",
    title: "Sample 7",
    url: "https://picsum.photos/400/300?random=7",
    width: 400,
    height: 300,
  },
  {
    id: "8",
    title: "Sample 8",
    url: "https://picsum.photos/400/300?random=8",
    width: 400,
    height: 300,
  },
];

function MasonryFigure({ image, index }: MasonryFigureProps): JSX.Element {
  return (
    <figure
      className={cn(`masonry-${index}`, "masonry-figure")}
      aria-label={image.description || image.title}
    >
      <img
        className="masonry-img"
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.title || ""}
        loading="lazy"
      />
    </figure>
  );
}

function InstagramIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "#E1306C" }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface MasonryProps {
  images: Image[];
  handle: string;
  message: string;
  className?: string;
  [key: string]: any;
}

function Masonry({
  handle,
  message,
  className,
  ...rest
}: MasonryProps): JSX.Element {
  const firstFour = images.slice(0, 4);
  const lastFour = images.slice(images.length - 4, images.length);

  return (
    <section className={cn("masonry-root", className)} {...rest}>
      {firstFour.map((image, index) => (
        <MasonryFigure image={image} key={image.id} index={index + 1} />
      ))}

      <div className="masonry-text">
        <a
          className="masonry-icon"
          href={`https://www.instagram.com/${handle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <h3 className="masonry-title">
          <a
            href={`https://www.instagram.com/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @instagram
          </a>
        </h3>
        <p className="masonry-message">{message}</p>
      </div>

      {lastFour.map((image, index) => (
        <MasonryFigure image={image} key={image.id} index={index + 5} />
      ))}
    </section>
  );
}

export default Masonry;
