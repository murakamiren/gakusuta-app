import { FC } from "react";
import NextLink from "next/link";
import { bottomNavItems } from "./bottomNavItems";
import { useRouter } from "next/router";

const Footer: FC = () => {
	const router = useRouter();
	const currentPath = router.asPath;
	console.log(currentPath);
	console.log(router.query);

	return (
		<footer className="fixed bottom-0 w-screen bg-white">
			<nav>
				<ul className="flex mx-7 mb-[32px] mt-3 justify-between">
					{bottomNavItems.map((item, i) => (
						<li key={i}>
							<NextLink href={item.href} passHref>
								<a className="flex flex-col items-center">
									<div className="mb-[4px] relative">
										{currentPath === item.href && (
											<div
												className={`w-[14px] h-[14px] bg-primary-yellow absolute top-[-2px] right-[-4px] rounded-full -z-10`}
											/>
										)}
										<item.icon className={currentPath === item.href ? `fill-primary-blue` : `fill-primary-gray`} />
									</div>
									<p
										className={
											currentPath === item.href
												? `text-primary-blue font-bold text-xs`
												: `text-primary-gray font-bold text-xs`
										}
									>
										{item.text}
									</p>
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
