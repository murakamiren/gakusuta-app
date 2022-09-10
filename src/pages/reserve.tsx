import { NextPageWithLayout } from "next";
import Layout from "../components/layout/layout";

const Reserve: NextPageWithLayout = () => {
	return (
		<main>
			<p>reserve</p>
		</main>
	);
};

Reserve.getLayout = (page) => <Layout>{page}</Layout>;

export default Reserve;
