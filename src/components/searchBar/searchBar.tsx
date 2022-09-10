import { FC, useState } from "react";
import { SearchBarProps } from "./type";
import SettingIcon from "../../assets/setting.svg";
import SearchIcon from "../../assets/search.svg";

const SearchBar: FC<SearchBarProps> = ({ placeholder, onClick }) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);

	return (
		<div className="w-full flex items-center justify-between">
			<label className="w-full relative">
				<input
					type="text"
					className="w-full h-14 rounded-lg px-[18px] text-primary-black"
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onClick={onClick}
				/>
				<div className={isFocus ? `opacity-0` : `opacity-100`}>
					<p className="absolute top-1/2 left-[46px] -translate-y-1/2 text-primary-gray">{placeholder}</p>
					<SearchIcon className="stroke-primary-gray fill-transparent absolute top-1/2 left-[18px] -translate-y-1/2" />
				</div>
			</label>
			<SettingIcon className="fill-white ml-[14px]" />
		</div>
	);
};

export default SearchBar;
