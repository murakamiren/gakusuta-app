import { FC } from "react";
import { useHeaderTitle } from "./hook";
import LeftArrowIcon from "../../assets/leftArrow.svg";
import LocationIcon from "../../assets/location.svg";
import FavoriteOutlineIcon from "../../assets/favorite-outline.svg";
import ShareOutlineIcon from "../../assets/share-outline.svg";

const Header: FC = () => {
	const { headerTitle, back, isBackArrowExist, isLocationIcon, isDetail } = useHeaderTitle();
	return (
		<header>
			<div className="max-w-screen h-[90px] bg-primary-blue flex justify-center px-6 bg-searchBarHeaderPattern -z-10 bg-[length:170%] bg-blend-hard-light bg-[center_top_10px]">
				<div className="mt-12 relative w-full">
					{isDetail ? (
						<div className="flex justify-end items-center space-x-4">
							<FavoriteOutlineIcon />
							<ShareOutlineIcon />
						</div>
					) : (
						<div className="flex justify-center items-center space-x-1">
							{isLocationIcon && <LocationIcon className="fill-white w-[26px] h-[26px]" />}

							<p className="text-white text-center text-lg font-bold">{headerTitle}</p>
						</div>
					)}
					{isBackArrowExist() && (
						<LeftArrowIcon className="stroke-white fill-transparent absolute top-0" onClick={() => back()} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
