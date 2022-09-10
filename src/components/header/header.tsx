import { FC } from "react";
import { useHeaderTitle } from "./hook";

const Header: FC = () => {
	const headerTitle = useHeaderTitle();
	return (
		<header>
			<div className="max-w-screen h-[90px] bg-primary-blue flex items-center">
				<p className="text-white">{headerTitle}</p>
			</div>
		</header>
	);
};

export default Header;
