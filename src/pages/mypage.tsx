import { NextPageWithLayout } from "next";
import Layout from "../components/layout/layout";

const MyPage: NextPageWithLayout = () => {
	return (
		<main>
			<p>mypage</p>
		</main>
	);
};

MyPage.getLayout = (page) => <Layout>{page}</Layout>;

export default MyPage;
