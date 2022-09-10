import { useRouter } from "next/router";

export const useSearchBar = () => {
	const router = useRouter();
	const currentPath = router.asPath;

	const handleFocus = () => {
		if (currentPath === "/search") {
			return true;
		} else {
			return false;
		}
	};
	return { handleFocus };
};
