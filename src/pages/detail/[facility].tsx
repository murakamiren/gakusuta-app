import { NextPageWithLayout } from "next";
import DetailFooter from "../../components/footer/detailFooter/detailFooter";
import Header from "../../components/header/header";

const Detail: NextPageWithLayout = () => {
	return (
		<div>
			<p>aaa</p>
		</div>
	);
};

Detail.getLayout = (page) => (
	<>
		<Header />
		{page}
		<DetailFooter />
	</>
);

export default Detail;
