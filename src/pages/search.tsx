import { NextPageWithLayout } from "next";
import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";
import TextWithIcon from "../components/textWithIcon/textWithIcon";
import LocationIcon from "../assets/location.svg";
import HistoryIcon from "../assets/history.svg";

const Search: NextPageWithLayout = () => {
	return (
		<main>
			<div className="px-6">
				<div className="mt-4">
					<SearchBar placeholder="エリア名で検索する" iconColor="fill-primary-blue" />
				</div>
				<div className="mt-10">
					<TextWithIcon text="現在地" size="xl" Icon={LocationIcon} isFill />
				</div>
				<h2 className="text-sm font-semibold mt-10">過去の検索結果</h2>
				<div className="mt-4 space-y-[6px]">
					<TextWithIcon text="大阪駅" size="xl" Icon={HistoryIcon} isFill />
					<TextWithIcon text="心斎橋" size="xl" Icon={HistoryIcon} isFill />
				</div>
			</div>
		</main>
	);
};

Search.getLayout = (page) => (
	<>
		<Header />
		{page}
	</>
);

export default Search;
