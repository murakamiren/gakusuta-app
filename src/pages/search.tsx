import { NextPageWithLayout } from "next";
import Layout from "../components/layout/layout";

const Search: NextPageWithLayout = () => {
	return (
		<main>
			<p>search</p>
		</main>
	);
};

Search.getLayout = (page) => <Layout>{page}</Layout>;

export default Search;
