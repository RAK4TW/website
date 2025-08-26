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
								href="http://www.instagram.com/rak4tw"
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
