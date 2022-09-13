import { NextPageWithLayout } from "next";
import Footer from "../components/footer/footer";
import MyPageCard from "../components/myPageCard/myPageCard";
import MyPageHeader from "../components/myPageHeader/myPgaeHeader";
import { myPageCardData } from "../constant/myPageCardData";

const MyPage: NextPageWithLayout = () => {
	return (
		<main>
			<div className="mt-10 space-y-4 px-6">
				{myPageCardData.map((d, i) => (
					<MyPageCard key={i} LeftIcon={d.LeftIcon} title={d.title} isLeftIconFill={d.isLeftIconFill} />
				))}
			</div>
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
