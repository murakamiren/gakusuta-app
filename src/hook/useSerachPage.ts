import { useRouter } from "next/router";

export const useSearchPage = () => {
	const router = useRouter();

	const handleOnClickHistory = (query: string) => {
		router.push(`/search/${query}`);
	};

	return { handleOnClickHistory };
};
