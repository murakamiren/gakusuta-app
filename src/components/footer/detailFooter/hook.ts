import { useRouter } from "next/router";

export const useDetailFooter = () => {
	const router = useRouter();

	const pushReserve = (facilityId: number) => {
		router.push(`/reserve/${facilityId}`);
	};

	return { pushReserve };
};
