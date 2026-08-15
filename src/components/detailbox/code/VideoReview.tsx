import React, { useEffect, useRef, useState } from "react";
import "./VideoReview.css";

function PlayIcon({ className = "" } = {}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 4.5v15l14-7.5-14-7.5Z" fill="currentColor" />
    </svg>
  );
}

function ChevronIcon({ direction = "left", className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

function Slider({ autoPlayInterval, loop = true, onIndexChange, children }) {
  const [index, setIndex] = useState(0);
  const count = React.Children.count(children);
  const timerRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (!autoPlayInterval) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        return next >= count ? (loop ? 0 : i) : next;
      });
    }, autoPlayInterval);
    return () => clearInterval(timerRef.current);
  }, [autoPlayInterval, loop, count]);

  function goTo(i) {
    setIndex(i);
    onIndexChange?.(i);
  }

  function handlePrev() {
    const prevIndex = index === 0 ? (loop ? count - 1 : 0) : index - 1;
    goTo(prevIndex);
  }

  function handleNext() {
    const nextIndex = index === count - 1 ? (loop ? 0 : count - 1) : index + 1;
    goTo(nextIndex);
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="vr-slider">
      <button
        type="button"
        className="vr-arrow vr-arrow-prev"
        onClick={handlePrev}
        aria-label="Previous slide"
        disabled={!loop && index === 0}
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        type="button"
        className="vr-arrow vr-arrow-next"
        onClick={handleNext}
        aria-label="Next slide"
        disabled={!loop && index === count - 1}
      >
        <ChevronIcon direction="right" />
      </button>

      <div
        className="vr-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {React.Children.map(children, (child) => (
          <div className="vr-slide">{child}</div>
        ))}
      </div>

      <div className="vr-slider-dots" role="tablist" aria-label="Testimonials">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial ${i + 1}`}
            className={`vr-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

const VideoReview = ({ autoPlayInterval, loop = true, testimonials }) => {
  const [playingIndex, setPlayingIndex] = useState(null);

  function playVideo(index) {
    setPlayingIndex(index);
  }

  function handleSlideChange() {
    setPlayingIndex(null);
  }

  return (
    <section className="vr-root">
      <Slider
        autoPlayInterval={autoPlayInterval}
        loop={loop}
        onIndexChange={handleSlideChange}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="vr-testimonial">
            <div className="vr-video-wrap">
              {playingIndex === index ? (
                <div className="vr-video-embed">
                  <iframe
                    src={`${testimonial.video.embedUrl}${
                      testimonial.video.embedUrl.includes("?") ? "&" : "?"
                    }autoplay=1`}
                    title={testimonial.citationName}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="vr-video"
                  onClick={() => playVideo(index)}
                >
                  <img
                    className="vr-video-image"
                    alt="testimonial video thumbnail"
                    src={testimonial.videoThumbnailImage.url}
                  />
                  <span className="vr-play">
                    <PlayIcon className="vr-play-icon" />
                  </span>
                </button>
              )}
            </div>

            <div className="vr-copy">
              <p className="vr-quote">&ldquo;{testimonial.quoteText}&rdquo;</p>
              <p className="vr-citation">{testimonial.citationName}</p>
              {testimonial.disclaimer && (
                <p className="vr-disclaimer">{testimonial.disclaimer}</p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default VideoReview;
