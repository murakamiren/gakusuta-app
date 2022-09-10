import { NextPageWithLayout } from "next";
import Layout from "../../components/layout/layout";

const AfterSearch: NextPageWithLayout = () => {
	return (
		<main>
			<p>after search</p>
		</main>
	);
};

AfterSearch.getLayout = (page) => <Layout>{page}</Layout>;

export default AfterSearch;
