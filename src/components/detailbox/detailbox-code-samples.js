import { Animated } from "react-animated-css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import codeZip from "../../assets/code.zip";
import Masonry from "./code/Masonry";
import Blockquote, { BlockquoteGroup } from "./code/Blockquote";
import PricingCard, { PricingCardGroup } from "./code/PricingCard";
import VideoReview from "./code/VideoReview";
import { testimonials } from "./code/VideoReview.testimonials";

export default function DetailboxCodeSamples({ history }) {
  const handleClose = () => {
    document.title =
      "Ryan Koskela - Web developer, writer, sports and food/drink aficionado, and so much more";
    sessionStorage.removeItem("pageTitle");
    history.replace("/");
  };

  useEffect(() => {
    document.title = "Ryan Koskela - Code Samples";
    sessionStorage.setItem("pageTitle", "Code Samples");
  }, [history]);

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
              <h1>Code Samples</h1>
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
              aria-label="Close code samples view"
            >
              Close [X]
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                A selection of technical implementations and code samples from
                my projects.
              </p>
              <p>
                <a
                  href={codeZip}
                  download="code.zip"
                  aria-label="Download all code samples in a zip archive"
                >
                  Download Code Samples (.zip)
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-2">
              <h2 className="Main-title">Pricing Cards</h2>
            </div>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
              <PricingCardGroup>
                <PricingCard
                  icon="sun"
                  eyebrow="All-Day"
                  title="Care System"
                  accent="green"
                  monthlyPrice="$94"
                  oneTimePrice="$2,199"
                  ctaLabel="Start Order"
                  ctaHref="#"
                  moreLabel="More about the All-Day Care System"
                  moreHref="#"
                />
                <PricingCard
                  icon="moon"
                  eyebrow="At-Night"
                  title="Care System"
                  accent="slate"
                  monthlyPrice="$111"
                  oneTimePrice="$2,599"
                  ctaLabel="Start Order"
                  ctaHref="#"
                  moreLabel="More about At-Night Care System"
                  moreHref="#"
                />
                <PricingCard
                  icon="chair"
                  eyebrow="Total Care"
                  title="with All-Day Care System"
                  accent="dark"
                  monthlyPrice="$128"
                  oneTimePrice="$2,999"
                  ctaLabel="Get Started for Free"
                  ctaHref="#"
                  moreLabel="More about Total Care"
                  moreHref="#"
                />
              </PricingCardGroup>
            </div>
            <div className="col-md-12 mt-2">
              <h2 className="Main-title">Blockquotes</h2>
            </div>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
              <BlockquoteGroup>
                <Blockquote
                  quote="Hundreds of customers who have used (HFV) comment that they either feel less discomfort or don't feel pain when switching aligners every 5 to 7 days."
                  attribution1="Orthodontic Practice Magazine"
                  attribution2="November 2017"
                  onClick={() => {}}
                />
                <Blockquote
                  quote="It can be hypothesized that a vibration device operating in the high frequency range would likely be most effective in creating orthodontic tooth movement as well as offering shorter wear times impacting compliance."
                  attribution1="Dental Tribute Magazine"
                  attribution2="2016"
                  onClick={() => {}}
                />
              </BlockquoteGroup>
            </div>
            <div className="col-md-12 mt-2">
              <h2 className="Main-title">Masonry</h2>
            </div>
          </div>
          <Masonry
            handle={"instagram"}
            message="Building responsive, accessible web experiences with modern technologies"
          />
          <div className="row">
            <div className="col-md-12 mt-4">
              <h2 className="Main-title">Video Slider</h2>
            </div>
            <div className="col-12 mt-2 mb-4">
              <div
                style={{ maxWidth: 1100, margin: "0 auto", padding: "0 12px" }}
              >
                <VideoReview
                  testimonials={testimonials}
                  loop
                  autoPlayInterval={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  );
}
