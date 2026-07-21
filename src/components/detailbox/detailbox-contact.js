import { Animated } from "react-animated-css";
import { useEffect } from 'react';

export default function DetailboxContact({ history }) {
	const handleClose = () => {
		// Clear title and session storage on exit
		document.title = "Ryan Koskela - Web developer, writer, sports and food/drink aficionado, and so much more";
		sessionStorage.removeItem('pageTitle');
		history.replace("/");
	};

	useEffect(() => {
		document.title = "Ryan Koskela - Contact";
		sessionStorage.setItem('pageTitle', 'Contact');
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
							<h1>Contact</h1>
						</div>
						<div
							className="col-3 closex text-right"
							onClick={handleClose}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									handleClose();
								}
							}}
							aria-label="Close contact view"
						>
							Close [X]
						</div>
					</div>
					<div>
						<p>
							Email me at <a href="mailto:ryanak@gmail.com">RyanAK@gmail.com</a>
							<br />
							Instagram:{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/rak4tw"
								aria-label="Visit Ryan's Instagram profile"
							>
								@RAK4TW
							</a>{" "}
						</p>
					</div>
				</div>
			</div>
		</Animated>
	);
}
