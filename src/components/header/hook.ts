import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHeaderTitle = () => {
	const [headerTitle, setHeaderTitle] = useState<string>("");
	const router = useRouter();
	const currentPath = router.asPath;
	const areaQueryParam = router.query.area;

	useEffect(() => {
		switch (currentPath) {
			case "/":
				setHeaderTitle("ホーム");
				break;
			case "/search":
				setHeaderTitle("利用するエリアを入力する");
				break;
			case "/favorite":
				setHeaderTitle("お気に入り");
				break;
			case "/reserve":
				setHeaderTitle("予約済み");
				break;
			case `/search/${areaQueryParam}`:
				typeof areaQueryParam === "string" && setHeaderTitle(areaQueryParam);
				break;
			default:
				setHeaderTitle("デフォルト");
		}
	}, [currentPath, areaQueryParam]);

	return headerTitle;
};