import { Animated } from "react-animated-css";

export default function DetailboxIdeas({ history }) {
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
							<h1>Ideas</h1>
						</div>
						<div
							className="col-3 closex text-right"
							onClick={() => {
								history.replace("/");
							}}
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
