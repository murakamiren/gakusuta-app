import { NextPageWithLayout } from "next";
import { useState } from "react";
import ReserveFooter from "../../components/footer/reserveFooter/reserveFooter";
import Header from "../../components/header/header";
import { times } from "../../constant/time";

const ReserveSet: NextPageWithLayout = () => {
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [peopleNumber, setPeopleNumber] = useState("");

	return (
		<main>
			<div className="mt-6 px-6 flex flex-col items-center">
				<div className="w-[327px] flex justify-center">
					<img src="/image/calender.png" alt="calender" className="w-full" />
				</div>
				<div className="flex flex-col">
					<p className="text-xs mt-5">カレンダーで利用日を選択してください。</p>
					<div className="flex justify-between space-x-2 items-center">
						<select className="p-[18px] flex-1 rounded-xl mt-[6px]" onChange={(e) => setStartTime(e.target.value)}>
							{times.map((time, i) => (
								<option key={i} value={time}>
									{time}
								</option>
							))}
						</select>
						<p>~</p>
						<select className="p-[18px] flex-1 rounded-xl mt-[6px]" onChange={(e) => setEndTime(e.target.value)}>
							{times.map((time, i) => (
								<option key={i} value={time}>
									{time}
								</option>
							))}
						</select>
					</div>
					<p className="text-xs mt-4">人数を入力してください。</p>
					<select className="p-[18px] w-full rounded-xl mt-[6px]" onChange={(e) => setPeopleNumber(e.target.value)}>
						<option value="1名">1名</option>
						<option value="2名">2名</option>
						<option value="3名">3名</option>
						<option value="4名">4名</option>
						<option value="5名">5名</option>
						<option value="6名">6名</option>
						<option value="7名">7名</option>
						<option value="8名">8名</option>
					</select>
				</div>
			</div>
		</main>
	);
};

ReserveSet.getLayout = (page) => (
	<>
		<Header />
		{page}
		<ReserveFooter disable={false} />
	</>
);

export default ReserveSet;
