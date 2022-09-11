import { FC } from "react";
import { FeatureProps } from "./type";

const Feature: FC<FeatureProps> = ({ text }) => {
	return (
		<div className="rounded border border-primary-purple inline-block w-max">
			<p className="mx-2 my-1 text-xs text-primary-purple">{text}</p>
		</div>
	);
};

export default Feature;
