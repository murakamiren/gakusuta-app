import classNames from "classnames";
import { useRouter } from "next/router";
import { MutableRefObject } from "react";

export const useSearchBar = () => {
	const router = useRouter();
	const currentPath = router.asPath;

	const handleFocus = (element: MutableRefObject<HTMLInputElement | null>) => {
		if (element.current === null) return;
		currentPath === "/search" && element.current.focus();
	};

	return { handleFocus };
};
