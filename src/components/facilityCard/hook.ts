import { useRouter } from "next/router";

export const useFacilityCard = () => {
	const router = useRouter();

	const pushDetail = (facilityId: number) => {
		router.push(`/detail/${facilityId}`);
	};

	return { pushDetail };
};
