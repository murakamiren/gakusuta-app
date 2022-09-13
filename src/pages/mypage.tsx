import { NextPageWithLayout } from "next";
import Footer from "../components/footer/footer";
import MyPageHeader from "../components/myPageHeader/myPgaeHeader";

const MyPage: NextPageWithLayout = () => {
	return (
		<main>
			<p>mypage</p>
		</main>
	);
};

MyPage.getLayout = (page) => (
	<>
		<MyPageHeader />
		{page}
		<Footer />
	</>
);

export default MyPage;
