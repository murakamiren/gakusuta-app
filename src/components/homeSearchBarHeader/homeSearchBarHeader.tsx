import { useRouter } from "next/router";
import { FC } from "react";
import Logo from "../../assets/logo.svg";
import SearchBar from "../searchBar/searchBar";

const HomeSearchBarHeader: FC = () => {
	const router = useRouter();

	return (
		<header className="relative">
			<div className="max-w-screen h-[225px] bg-primary-blue flex flex-col items-center pt-[44px] bg-searchBarHeaderPattern -z-10 bg-[length:170%] bg-blend-hard-light bg-center">
				<Logo className="mb-[22px] z-10" />
				<div className="w-full px-6">
					<SearchBar placeholder="エリア名で検索する" onClick={() => router.push("/search")} />
				</div>
			</div>
		</header>
	);
};

export default HomeSearchBarHeader;
