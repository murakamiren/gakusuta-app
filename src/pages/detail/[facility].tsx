import { NextPageWithLayout } from "next";
import Image from "next/image";
import DetailFooter from "../../components/footer/detailFooter/detailFooter";
import Header from "../../components/header/header";
import StarIcon from "../../assets/star.svg";
import LocationIcon from "../../assets/location.svg";
import Feature from "../../components/feature/feature";
import TextWithIcon from "../../components/textWithIcon/textWithIcon";
import TimeIcon from "../../assets/time.svg";
import TrainIcon from "../../assets/train.svg";
import PeopleIcon from "../../assets/people.svg";
import AboutSpace from "../../components/facilityCard/aboutSpace/aboutSpace";
import AboutPlan from "../../components/facilityCard/aboutPlan/aboutPlan";
import NoteCard from "../../components/facilityCard/noteCard/noteCard";
import Divider from "../../components/divider/divider";
import FacilityCard from "../../components/facilityCard/facilityCard";

const Detail: NextPageWithLayout = () => {
	return (
		<main className="mb-[130px]">
			<div className="w-full h-[250px] overflow-hidden relative">
				<Image src="/image/studio.png" alt="studio" layout="fill" />
			</div>
			<div className="px-6 mt-4">
				<div className="flex justify-between items-center">
					<div className="flex space-x-1 items-center">
						<StarIcon className="fill-primary-yellow" />
						<p className="text-sm underline">4.4 (140件)</p>
					</div>
					<div className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center">
						<LocationIcon className="fill-primary-blue w-6 h-6" />
					</div>
				</div>
				<div className="mt-2 flex flex-nowrap overflow-x-scroll hidden-scrollbar">
					<div className="flex space-x-2">
						<Feature text="今すぐ予約可能" />
						<Feature text="除菌スプレーあり" />
						<Feature text="直前割" />
					</div>
				</div>
				<h2 className="text-lg font-bold mt-4">本格的な機材と設備がフル装備。手ぶらで最適なスタジオ。</h2>
				<p className="font-semibold mt-2 text-[26px]">
					110<span className="text-[12px]">円</span>~1,320<span className="text-[12px]">円/時間</span>
				</p>
				<div className="flex flex-wrap gap-x-4 gap-y-[6px] mt-3">
					<TextWithIcon text="大阪府 大阪市淀川区 西中島" Icon={LocationIcon} size="base" isFill />
					<TextWithIcon text="新大阪駅 徒歩6分" Icon={TrainIcon} size="base" isFill />
					<TextWithIcon text="120分~" Icon={TimeIcon} size="base" isStroke />
					<TextWithIcon text="~8名" Icon={PeopleIcon} size="base" isFill />
				</div>
				<div className="mt-6">
					<AboutSpace />
				</div>
			</div>
			<div className="mt-[30px] pl-6">
				<h2 className="text-lg font-semibold">プランについて</h2>
				<div className="mt-4">
					<div className="flex flex-nowrap overflow-x-scroll hidden-scrollbar">
						<div className="flex space-x-4">
							<AboutPlan />
							<AboutPlan />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[30px] mx-6">
				<NoteCard />
				<div className="mt-10 mb-5 ">
					<Divider />
				</div>
			</div>
			<div className="pl-6">
				<h2 className="text-lg mt-5 font-bold">このスペースを見た方におすすめ</h2>
				<div className="flex flex-nowrap overflow-x-scroll hidden-scrollbar mt-4">
					<div className="flex space-x-4">
						<FacilityCard size="base" isFavorite />
						<FacilityCard size="base" />
					</div>
				</div>
			</div>
		</main>
	);
};

Detail.getLayout = (page) => (
	<>
		<Header />
		{page}
		<DetailFooter facilityId={1} />
	</>
);

export default Detail;
