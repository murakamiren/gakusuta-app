import { useRouter } from "next/router";
import { FC } from "react";
import Logo from "../../assets/logo.svg";
import SearchBar from "../searchBar/searchBar";

const HomeSearchBarHeader: FC = () => {
	const router = useRouter();

	return (
		<header className="w-full sticky -top-[115px] z-50">
			<div className="w-full h-[230px] bg-primary-blue flex flex-col items-center pt-[44px] bg-searchBarHeaderPattern -z-10 bg-[length:170%] bg-blend-hard-light bg-[center_top_11px]">
				<Logo className="mb-[32px] z-10" />
				<div className="w-full h-auto px-6 sticky top-0 flex items-center">
					<SearchBar placeholder="エリア名で検索する" onClick={() => router.push("/search")} />
				</div>
			</div>
		</header>
	);
};

export default HomeSearchBarHeader;
