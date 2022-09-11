import { FC } from "react";
import { useHeaderTitle } from "./hook";
import LeftArrowIcon from "../../assets/leftArrow.svg";
import LocationIcon from "../../assets/location.svg";

const Header: FC = () => {
	const { headerTitle, back, isBackArrowExist, isLocationIcon } = useHeaderTitle();
	return (
		<header>
			<div className="max-w-screen h-[90px] bg-primary-blue flex justify-center px-6">
				<div className="mt-12 relative w-full">
					<div className="flex justify-center items-center space-x-1">
						{isLocationIcon && <LocationIcon className="fill-white" />}
						<p className="text-white text-center text-lg font-bold">{headerTitle}</p>
					</div>
					{isBackArrowExist() && (
						<LeftArrowIcon className="stroke-white fill-transparent absolute top-0" onClick={() => back()} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
