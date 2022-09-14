import { NextPageWithLayout } from "next";
import ReserveCalender from "../../components/calender/reserveCalender";
import ReserveFooter from "../../components/footer/reserveFooter/reserveFooter";
import Header from "../../components/header/header";

const ReserveSet: NextPageWithLayout = () => {
	return (
		<main>
			<div className="mt-6 px-6">
				<ReserveCalender />
			</div>
		</main>
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
