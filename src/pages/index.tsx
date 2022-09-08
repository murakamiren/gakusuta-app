import type { NextPage, NextPageWithLayout } from "next";
import Layout from "../components/layout/layout";

const Home: NextPageWithLayout = () => {
	return (
		<div>
			<p className="text-3xl">aa</p>
		</div>
	);
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
