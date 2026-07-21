import { Animated } from "react-animated-css";
import { useEffect } from 'react';
import ryimage from "../../assets/me.webp";

export default function DetailboxAbout({ history }) {

	const handleClose = () => {
		// Clear title and session storage on exit
		document.title = "Ryan Koskela - Web developer, writer, sports and food/drink aficionado, and so much more";
		sessionStorage.removeItem('pageTitle');
		history.replace("/");
	};

	useEffect(() => {
		document.title = "Ryan Koskela - About";
		sessionStorage.setItem('pageTitle', 'About');
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
							<h1>About</h1>
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
							aria-label="Close about view"
						>
							Close [X]
						</div>
					</div>
					<div>
						<div className="row">
							<div className="col-md-7 about-format">
								<p>
									After taking interest in a variety of different careers, I
									ended up finding a love and passion for web development,
									specifically front end development. My specialties are in
									creating custom JavaScript and CSS solutions for unique UI/UX
									experiences, utilizing APIs, and performing fast and efficient
									updates to existing sites. Additionally, I have a strong
									background in WordPress and graphic design. Aside from
									development, you'll likely find me playing and watching
									sports, hitting the gym, trying out new drinks, brewing coffee
									with just about every type of coffee maker, driving to random
									places, and playing guitar. Drop me a line to know anything
									else!
								</p>
								<p>
									<a target="_blank" href="https://docs.google.com/document/d/1PjxA74T9jaK7tIfxfmi4hSi1nuNQwe_Jl2MwaLIK2SQ/edit?usp=sharing" rel="noreferrer" aria-label="View Ryan Koskela's resume">
										View Resume
									</a>
								</p>
							</div>
							<div className="col-md-5">
								<img
									alt="Ryan Koskela - Web Developer"
									className="img-fluid rounded float-md-right"
									src={ryimage}
									loading="lazy"
									style={{ maxWidth: "250px" }}
								/>
							</div>
						</div>{" "}
					</div>
				</div>
			</div>
		</Animated>
	);
}
