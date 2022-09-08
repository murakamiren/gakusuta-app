import type { AppPropsWithLayout } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
