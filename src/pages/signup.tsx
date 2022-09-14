import classNames from "classnames";
import { NextPageWithLayout } from "next";
import { useState } from "react";
import Divider from "../components/divider/divider";
import Header from "../components/header/header";
import { useLogin } from "../hook/useSignup";

const Signup: NextPageWithLayout = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { handleLogin, disable, error } = useLogin(email, password, confirmPassword);
	return (
		<main>
			<div className="pt-[26px] px-6">
				<p className="text-[15px] font-bold">メールアドレス</p>
				<input
					type="email"
					className="mt-[6px] bg-white py-3 pl-4 w-full rounded-xl"
					placeholder="example@co.jp"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="text-[15px] font-bold mt-6">パスワード</p>
				<input
					type="password"
					className="mt-[6px] bg-white py-3 pl-4 w-full rounded-xl"
					placeholder="半角英数字で8文字以上"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="text-[15px] font-bold mt-6">パスワード確認</p>
				<input
					type="password"
					className="mt-[6px] bg-white py-3 pl-4 w-full rounded-xl"
					placeholder="半角英数字で8文字以上"
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<div className="mt-[50px]">
					<button
						className={classNames(
							"py-3 w-full rounded-full font-bold",
							disable ? "text-primary-gray bg-[#E2E2E2]" : "text-white bg-primary-blue"
						)}
						onClick={() => handleLogin()}
						disabled={disable}
					>
						アカウント登録
					</button>
				</div>
				<p className="text-xs text-center mt-6">
					<span className="text-primary-blue underline">利用規約</span>に同意の上、アカウント登録を行ってください
				</p>
				<div className="mt-[190px]">
					<Divider />
				</div>
				<p className="mt-6 text-xs text-center text-primary-black">
					アカウントをお持ちの方は<span className="text-primary-red font-bold">こちら</span>
				</p>
			</div>
		</main>
	);
};

Signup.getLayout = (page) => (
	<>
		<Header />
		{page}
	</>
);

export default Signup;
