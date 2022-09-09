import { FC } from "react";
import NextLink from "next/link";
import { bottomNavItems } from "./bottomNavItems";

const Footer: FC = () => {
	return (
		<footer className="fixed bottom-0 w-screen bg-white">
			<nav>
				<ul className="flex mx-7 mb-[32px] mt-3 justify-between">
					{bottomNavItems.map((item, i) => (
						<li key={i}>
							<NextLink href={item.href}>
								<a>
									<p className="bottom-nav-link-text">{item.text}</p>
								</a>
							</NextLink>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
