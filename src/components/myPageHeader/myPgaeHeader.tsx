import { FC } from "react";
import EditIcon from "../../assets/edit.svg";

const MyPageHeader: FC = () => {
	return (
		<header>
			<div className="w-screen h-[310px] rounded-b-[32px] bg-primary-blue bg-searchBarHeaderPattern -z-10 bg-[length:170%] bg-blend-hard-light bg-[center_top_11px] bg-repeat">
				<div className="pt-[52px] px-6 flex justify-end">
					<EditIcon />
				</div>
				<div className="pt-[10px] flex flex-col items-center">
					<div className="w-[100px] h-[100px] bg-white rounded-3xl overflow-hidden">
						<img src="/image/mypage.png" alt="aaaa" className="w-full h-full" />
					</div>
					<p className="text-2xl font-semibold text-white mt-3">miki</p>
				</div>
			</div>
		</header>
	);
};

export default MyPageHeader;
