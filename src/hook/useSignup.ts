import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLogin = (email: string, password: string, confirmPassword: string) => {
	const router = useRouter();
	const [disable, setDisable] = useState<boolean>(true);
	const [error, setError] = useState("");

	useEffect(() => {
		if (email === "") return setDisable(true);
		if (password === "") return setDisable(true);
		if (password !== confirmPassword) return setError("パスワードが一致していません");

		setDisable(false);
	}, [email, password]);

	const handleLogin = () => {
		router.push("/intro");
	};

	return { handleLogin, disable, error };
};
