import { FC } from "react";
import TextWithIcon from "../textWithIcon/textWithIcon";
import { BottomInfoProps } from "./type";
import LocationIcon from "../../../assets/location.svg";
import TrainIcon from "../../../assets/train.svg";
import PeopleIcon from "../../../assets/people.svg";
import StarIcon from "../../../assets/star.svg";
import TimeIcon from "../../../assets/time.svg";

const BottomInfo: FC<BottomInfoProps> = ({ location, distance, rentalTime, capacity, rate }) => {
	return (
		<div className="flex flex-col justify-start space-y-1">
			<TextWithIcon text={location} Icon={LocationIcon} isFill />
			<TextWithIcon text={distance} Icon={TrainIcon} isFill />
			<div className="flex space-x-4">
				<TextWithIcon text={rentalTime} Icon={TimeIcon} />
				<TextWithIcon text={capacity} Icon={PeopleIcon} isFill />
				<TextWithIcon text={rate} Icon={StarIcon} isFill />
			</div>
		</div>
	);
};

export default BottomInfo;
