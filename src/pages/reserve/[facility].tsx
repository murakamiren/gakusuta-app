import { NextPageWithLayout } from "next";
import ReserveFooter from "../../components/footer/reserveFooter/reserveFooter";
import Header from "../../components/header/header";

const ReserveSet: NextPageWithLayout = () => {
	return (
		<div>
			<p>aaaa</p>
		</div>
	);
};

ReserveSet.getLayout = (page) => (
	<>
		<Header />
		{page}
		<ReserveFooter />
	</>
);

export default ReserveSet;
