import { NextPageWithLayout } from "next";
import Header from "../components/header/header";

const Login: NextPageWithLayout = () => {
	return (
		<main>
			<p>aaaa</p>
		</main>
	);
};

Login.getLayout = (page) => (
	<>
		<Header />
		{page}
	</>
);

export default Login;
