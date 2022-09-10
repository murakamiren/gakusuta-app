import { NextPageWithLayout } from "next";
import Layout from "../components/layout/layout";

const Favorite: NextPageWithLayout = () => {
	return (
		<main>
			<p>favorite</p>
		</main>
	);
};

Favorite.getLayout = (page) => <Layout>{page}</Layout>;

export default Favorite;
