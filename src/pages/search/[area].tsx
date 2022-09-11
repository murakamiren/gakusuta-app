import { NextPageWithLayout } from "next";
import FacilityCard from "../../components/facilityCard/facilityCard";
import Layout from "../../components/layout/layout";

const AfterSearch: NextPageWithLayout = () => {
	return (
		<main>
			<div className="flex flex-col px-6 mt-6 mb-[130px]">
				<FacilityCard size="xl" />
				<FacilityCard size="xl" />
				<FacilityCard size="xl" />
			</div>
		</main>
	);
};

AfterSearch.getLayout = (page) => <Layout>{page}</Layout>;

export default AfterSearch;
