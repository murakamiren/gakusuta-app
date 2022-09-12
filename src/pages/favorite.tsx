import { NextPageWithLayout } from "next";
import FavoriteCard from "../components/facilityCard/favoriteCard";
import Layout from "../components/layout/layout";

const Favorite: NextPageWithLayout = () => {
	return (
		<main>
			<div className="pt-6 px-6 mb-[130px] space-y-4">
				<FavoriteCard />
				<FavoriteCard />
				<FavoriteCard />
			</div>
		</main>
	);
};

Favorite.getLayout = (page) => <Layout>{page}</Layout>;

export default Favorite;
