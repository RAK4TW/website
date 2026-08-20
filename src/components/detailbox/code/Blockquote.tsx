import { useMemo } from "react";
import { cn } from "../../../utils/cn";
import "./Blockquote.css";

function QuoteIcon({ className }) {
  return (
    <svg
      className={className}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.6 7c-4.6 1.9-7.6 6-7.6 10.9 0 4.4 2.7 7.4 6.2 7.4 3 0 5.2-2.3 5.2-5.1 0-2.7-1.9-4.7-4.4-4.7-.5 0-1 .1-1.3.2.4-3.1 2.7-5.9 5.6-7.1L14.6 7Zm14.6 0c-4.6 1.9-7.6 6-7.6 10.9 0 4.4 2.7 7.4 6.2 7.4 3 0 5.2-2.3 5.2-5.1 0-2.7-1.9-4.7-4.4-4.7-.5 0-1 .1-1.3.2.4-3.1 2.7-5.9 5.6-7.1L29.2 7Z"
        fill="currentColor"
      />
    </svg>
  );
}

const Blockquote = ({
  quote,
  attribution1,
  attribution2,
  link,
  decorativeQuotes = true,
  footnote,
  variant = "default",
  onClick,
  className = "",
  ...restProps
}) => {
  const quoteSize = useMemo(
    () => (quote.length > 250 ? "small" : "large"),
    [quote],
  );

  return (
    <blockquote
      className={cn("blockquote", `variant-${variant}`, className)}
      {...restProps}
    >
      <div className="quoteIconWrap">
        {decorativeQuotes && <QuoteIcon className="quoteIcon" />}
      </div>

      {quote && <p className={cn("quote", quoteSize)}>{quote}</p>}

      <div className="attributions">
        {attribution1 &&
          (link ? (
            <a
              href={link}
              className="attribution attribution1"
              onClick={onClick}
            >
              {attribution1}
              <span className="attributionLinkIcon" aria-hidden="true">
                &#8599;
              </span>
            </a>
          ) : (
            <p className="attribution attribution1">{attribution1}</p>
          ))}
        {attribution2 && (
          <p className="attribution attribution2">{attribution2}</p>
        )}
      </div>

      {footnote && <p className="footnote">{footnote}</p>}
    </blockquote>
  );
};

export const BlockquoteGroup = ({ children }) => (
  <div className="blockquoteGroup">{children}</div>
);

export default Blockquote;
