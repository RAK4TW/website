import { Animated } from "react-animated-css";
import { useEffect } from 'react';

export default function DetailboxIdeas({ history }) {
	useEffect(() => {
		document.title = "Ryan Koskela - Ideas";
		sessionStorage.setItem('pageTitle', 'Ideas');
	}, [history]);

	const handleClose = () => {
		// Clear title and session storage on exit
		document.title = "Ryan Koskela - Web developer, writer, sports and food/drink aficionado, and so much more";
		sessionStorage.removeItem('pageTitle');
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
								if (e.key === 'Enter' || e.key === ' ') {
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
							Please check back later, this area will get some attention. It'll
							be a blog of sorts :-))
						</p>
					</div>
				</div>
			</div>
		</Animated>
	);
}
