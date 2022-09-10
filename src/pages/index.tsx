import { NextPageWithLayout } from "next";
import EventBanner from "../components/eventBanner/eventBanner";
import Footer from "../components/footer/footer";
import HomeSearchBarHeader from "../components/homeSearchBarHeader/homeSearchBarHeader";

const Home: NextPageWithLayout = () => {
	return (
		<main>
			<div className="mt-6 pl-6 flex flex-nowrap overflow-x-scroll hidden-scrollbar">
				<div className="space-x-2 flex">
					<EventBanner size="base" />
					<EventBanner size="base" />
				</div>
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
