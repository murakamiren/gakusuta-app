import { MyPageCardProps } from "../components/myPageCard/type";
import MyPageIcon from "../assets/mypage.svg";
import BellIcon from "../assets/bell.svg";
import CreditIcon from "../assets/creditCard.svg";
import HistoryIcon from "../assets/history.svg";
import SettingIcon from "../assets/gear.svg";

export const myPageCardData: MyPageCardProps[] = [
	{ LeftIcon: MyPageIcon, title: "アカウント情報", isLeftIconFill: true },
	{ LeftIcon: BellIcon, title: "お知らせ", isLeftIconFill: true },
	{ LeftIcon: CreditIcon, title: "お支払い情報", isLeftIconFill: false },
	{ LeftIcon: HistoryIcon, title: "閲覧履歴", isLeftIconFill: true },
	{ LeftIcon: SettingIcon, title: "アプリ設定", isLeftIconFill: false },
];
