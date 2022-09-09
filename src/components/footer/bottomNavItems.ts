import { bottomNavItemType } from "./type";
import HomeIcon from "../../assets/home.svg";
import FavoriteIcon from "../../assets/favorite.svg";
import ReserveIcon from "../../assets/reserve.svg";
import MyPageIcon from "../../assets/mypage.svg";

export const bottomNavItems: bottomNavItemType[] = [
	{ text: "ホーム", icon: HomeIcon, href: "/" },
	{ text: "お気に入り", icon: FavoriteIcon, href: "/favorite" },
	{ text: "予約", icon: ReserveIcon, href: "/reserve" },
	{ text: "マイページ", icon: MyPageIcon, href: "/mypage" },
];
