import { Animated } from "react-animated-css";

export default function DetailboxContact({ history }) {
	const handleClose = () => {
		history.replace("/");
	};

	return (
		<Animated
			animationIn="fadeInRight"
			animationOut="fadeOutDown"
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
