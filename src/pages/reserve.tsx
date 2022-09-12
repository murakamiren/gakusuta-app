import { NextPageWithLayout } from "next";
import ReservedCard from "../components/facilityCard/reservedCard";
import Layout from "../components/layout/layout";

const Reserve: NextPageWithLayout = () => {
	return (
		<main>
			<div className="pt-6 px-6 mb-[130px] space-y-4">
				<ReservedCard />
			</div>
		</main>
	);
};

Reserve.getLayout = (page) => <Layout>{page}</Layout>;

export default Reserve;
