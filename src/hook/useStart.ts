import { useRouter } from "next/router";

export const useStart = () => {
	const router = useRouter();

	const pushLogin = () => {
		router.push("/login");
	};

	const pushSignup = () => {
		router.push("/signup");
	};

	return { pushLogin, pushSignup };
};
