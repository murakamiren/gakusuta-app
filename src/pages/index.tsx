import type { NextPageWithLayout } from "next";
import Layout from "../components/layout/layout";

const Home: NextPageWithLayout = () => {
	return (
		<main>
			<p className="text-3xl">aa</p>
		</main>
	);
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
