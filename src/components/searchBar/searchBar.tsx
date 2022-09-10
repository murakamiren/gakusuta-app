import { FC, useEffect, useRef, useState } from "react";
import { SearchBarProps } from "./type";
import SettingIcon from "../../assets/setting.svg";
import SearchIcon from "../../assets/search.svg";
import { useSearchBar } from "./hook";
import classNames from "classnames";

const SearchBar: FC<SearchBarProps> = ({ placeholder, onClick, iconColor }) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const { handleFocus } = useSearchBar();

	return (
		<div className="w-full flex items-center justify-between">
			<label className="w-full relative">
				<input
					type="text"
					className="w-full h-14 rounded-lg px-[18px] text-primary-black"
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onClick={onClick}
					autoFocus={handleFocus()}
				/>
				<div className={isFocus ? `opacity-0` : `opacity-100`}>
					<p className="absolute top-1/2 left-[46px] -translate-y-1/2 text-primary-gray">{placeholder}</p>
					<SearchIcon className="stroke-primary-gray fill-transparent absolute top-1/2 left-[18px] -translate-y-1/2" />
				</div>
			</label>
			<SettingIcon className={classNames("ml-[14px]", iconColor ? iconColor : "fill-white")} />
		</div>
	);
};

export default SearchBar;
