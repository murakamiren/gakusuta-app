import { NextPageWithLayout } from "next";
import Header from "../components/header/header";
import SearchBar from "../components/searchBar/searchBar";

const Search: NextPageWithLayout = () => {
	return (
		<main>
			<div className="mt-4 px-6">
				<SearchBar placeholder="エリア名で検索する" iconColor="fill-primary-blue" />
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
