import { FC, ReactElement } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

type layoutProps = {
	readonly children: ReactElement;
};

const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
