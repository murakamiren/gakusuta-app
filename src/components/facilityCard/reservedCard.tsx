import { FC } from "react";
import Divider from "../divider/divider";
import TextWithIcon from "../textWithIcon/textWithIcon";
import CardBaseTop from "./cardBase/cardBaseTop";
import TimeIcon from "../../assets/time.svg";
import PeopleIcon from "../../assets/people.svg";
import Button from "../button/button";

const ReservedCard: FC = () => {
	return (
		<div className="w-full rounded-lg bg-white p-4">
			<CardBaseTop />
			<div className="my-6">
				<Divider />
			</div>
			<div className="flex justify-between">
				<div>
					<TextWithIcon text="9月19日 120分" Icon={TimeIcon} size="base" />
					<TextWithIcon text="~8名" Icon={PeopleIcon} size="base" isFill />
				</div>
				<Button text="キャンセルする" isDelete />
			</div>
		</div>
	);
};

export default ReservedCard;
