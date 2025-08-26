import { Animated } from "react-animated-css";
import Mainbox from "./mainbox.js";

export default function Mainboxes(props) {
	const half = Math.ceil(props.stateinfo.length / 2);
	const firstHalf = props.stateinfo.slice(0, half);
	const secondHalf = props.stateinfo.slice(half);

	return (
		<Animated
			animationIn="fadeIn"
			animationOut="fadeOut"
			isVisible={true}
			animationInDuration="500"
		>
			<div className="row mobilecrop">
				<div className="col-md-6">
					{firstHalf.map((item, index) => (
						<Mainbox key={index} myinfo={item} history={props.history} />
					))}
				</div>
				<div className="col-md-6">
					{secondHalf.map((item, index) => (
						<Mainbox key={index} myinfo={item} history={props.history} />
					))}
				</div>
			</div>
		</Animated>
	);
}
