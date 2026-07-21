import { Animated } from "react-animated-css";
import { useEffect } from "react";

export default function DetailboxIdeas({ history }) {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    fontSize: "inherit",
    fontFamily: "inherit",
  };

  useEffect(() => {
    document.title = "Ryan Koskela - Ideas";
    sessionStorage.setItem("pageTitle", "Ideas");
  }, [history]);

  const handleClose = () => {
    // Clear title and session storage on exit
    document.title =
      "Ryan Koskela - Web developer, writer, sports and food/drink aficionado, and so much more";
    sessionStorage.removeItem("pageTitle");
    history.replace("/");
  };

  return (
    <Animated
      animationIn="slideInRight"
      animationOut="slideOutRight"
      isVisible={true}
      animationInDuration="500"
    >
      <div className="white-bg">
        <div className="detailbox">
          <div className="row">
            <div className="col-9">
              <h1>Ideas</h1>
            </div>
            <div
              className="col-3 closex text-right"
              onClick={handleClose}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClose();
                }
              }}
              aria-label="Close ideas view"
            >
              Close [X]
            </div>
          </div>
          <div>
            <p>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1EhHDz80GcQfNDdqzFOhxaWscoF2iO4GwymzhQQv0QhU/edit?usp=sharing"
                rel="noreferrer"
                aria-label="View Ryan Koskela's ideas document"
                style={linkStyle}
              >
                My Writings
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.ebay.com/usr/ryan_alex85"
                rel="noreferrer"
                aria-label="Visit Ryan Koskela's eBay store"
                style={linkStyle}
              >
                eBay store
              </a>
            </p>
          </div>
        </div>
      </div>
    </Animated>
  );
}
