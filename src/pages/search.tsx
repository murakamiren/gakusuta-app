import { NextPageWithLayout } from "next";
import Header from "../components/header/header";

const Search: NextPageWithLayout = () => {
	return (
		<main>
			<p>search</p>
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
