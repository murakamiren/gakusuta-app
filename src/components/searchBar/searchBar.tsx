import { FC } from "react";
import { SearchBarProps } from "./type";

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
	return (
		<div className="w-full">
			<input type="text" className="w-9/12 h-14 rounded-lg" placeholder={placeholder} />
		</div>
	);
};

export default SearchBar;
