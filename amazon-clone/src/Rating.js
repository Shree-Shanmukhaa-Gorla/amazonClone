import React from "react";
import "./Rating.css";

function Rating({ rating }) {
	return (
		<div className="rating">
			{Array(rating)
				.fill()
				.map((_) => (
					<p> ⭐ </p>
				))}
		</div>
	);
}

export default React.memo(Rating);
