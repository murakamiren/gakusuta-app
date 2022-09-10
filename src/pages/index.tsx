import { NextPageWithLayout } from "next";
import Footer from "../components/footer/footer";
import HomeSearchBar from "../components/homeSearchBar/homeSearchBar";
import Layout from "../components/layout/layout";

const Home: NextPageWithLayout = () => {
	return (
		<main>
			<p>home</p>
		</main>
	);
};

Home.getLayout = (page) => (
	<>
		<HomeSearchBar />
		{page}
		<Footer />
	</>
);

export default Home;
