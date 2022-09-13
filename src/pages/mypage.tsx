import { NextPageWithLayout } from "next";
import Footer from "../components/footer/footer";

const MyPage: NextPageWithLayout = () => {
	return (
		<main>
			<p>mypage</p>
		</main>
	);
};

MyPage.getLayout = (page) => (
	<>
		{page}
		<Footer />
	</>
);

export default MyPage;
