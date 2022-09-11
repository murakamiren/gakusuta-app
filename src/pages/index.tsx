import { NextPageWithLayout } from "next";
import ChooseItemCard from "../components/chooseItemCard/chooseItemCard";
import EventBanner from "../components/eventBanner/eventBanner";
import Footer from "../components/footer/footer";
import HomeSearchBarHeader from "../components/homeSearchBarHeader/homeSearchBarHeader";
import HeadingIcon from "../assets/secondLogo.svg";

const Home: NextPageWithLayout = () => {
	return (
		<main className="mb-[90px]">
			<div className="mt-6 pl-6 flex flex-nowrap overflow-x-scroll hidden-scrollbar">
				<div className="space-x-2 flex">
					<EventBanner size="base" />
					<EventBanner size="base" />
				</div>
			</div>
			<div className="mt-10 px-6 flex justify-between">
				<ChooseItemCard bgColor="bg-primary-lime" title="スタジオ" />
				<ChooseItemCard bgColor="bg-primary-red" title="ライブハウス" />
			</div>
			<div className="flex items-center pl-6 mt-10 space-x-2">
				<HeadingIcon />
				<h2 className="font-bold text-[18px]">現在地付近のおすすめ</h2>
			</div>
			<div className="flex items-center pl-6 mt-10 space-x-2">
				<HeadingIcon />
				<h2 className="font-bold text-[18px]">イベント情報</h2>
			</div>
			<div className="flex flex-col items-center space-y-4 px-6 mt-4">
				<EventBanner size="xl" />
				<EventBanner size="xl" />
				<EventBanner size="xl" />
			</div>
		</main>
	);
};

Home.getLayout = (page) => (
	<>
		<HomeSearchBarHeader />
		{page}
		<Footer />
	</>
);

export default Home;
