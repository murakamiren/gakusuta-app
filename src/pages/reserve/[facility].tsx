import { NextPageWithLayout } from "next";
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
	</>
);

export default ReserveSet;
