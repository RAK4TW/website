import { useState } from "react";
import parse from "html-react-parser";
import { withRouter } from "react-router-dom";

function Mainbox(props) {
	const [isAnimated, setIsAnimated] = useState(false);

	const { header, tagline, class: theClass, preview } = props.myinfo;

	const previewItems = preview.map((previewitem) => {
		return parse(`<li>${previewitem}</li>`);
	});

	return (
		<div
			className="white-bg"
			onClick={() => {
				props.history.push(`/${theClass}`);
			}}
		>
			<div
				className={`mainbox ${theClass} ${isAnimated ? "animated pulse" : ""}`}
				onMouseOver={() => setIsAnimated(true)}
				onMouseOut={() => setIsAnimated(false)}
			>
				<h2>{header}</h2>
				<p>{tagline}</p>
				<ul className="infoList">{previewItems}</ul>
			</div>
		</div>
	);
}

export default withRouter(Mainbox);
