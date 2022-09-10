import { NextPageWithLayout } from "next";
import Footer from "../components/footer/footer";
import HomeSearchBarHeader from "../components/homeSearchBarHeader/homeSearchBarHeader";

const Home: NextPageWithLayout = () => {
	return (
		<main>
			<p>home</p>
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
