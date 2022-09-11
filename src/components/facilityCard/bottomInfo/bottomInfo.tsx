import { FC } from "react";
import TextWithIcon from "../../textWithIcon/textWithIcon";
import { BottomInfoProps } from "./type";
import LocationIcon from "../../../assets/location.svg";
import TrainIcon from "../../../assets/train.svg";
import PeopleIcon from "../../../assets/people.svg";
import StarIcon from "../../../assets/star.svg";
import TimeIcon from "../../../assets/time.svg";

const BottomInfo: FC<BottomInfoProps> = ({ location, distance, rentalTime, capacity, rate }) => {
	return (
		<div className="flex flex-col justify-start space-y-1">
			<TextWithIcon text={location} Icon={LocationIcon} size="base" isFill />
			<TextWithIcon text={distance} Icon={TrainIcon} size="base" isFill />
			<div className="flex space-x-4">
				<TextWithIcon text={rentalTime} Icon={TimeIcon} size="base" />
				<TextWithIcon text={capacity} Icon={PeopleIcon} size="base" isFill />
				<TextWithIcon text={rate} Icon={StarIcon} size="base" isFill />
			</div>
		</div>
	);
};

export default BottomInfo;
