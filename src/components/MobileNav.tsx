import { useState } from "react";
import { ReactComponent as Menu } from "../assets/svg/Menu.svg";
import "./MobileNav.scss";

export default function MobileNav({ path }: { path: string }) {
	const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);

	return (
		<div className="mobile-nav">
			<button
				onClick={() => setDropdownOpened((prev) => !prev)}
				className={`mobile-nav__menu ${
					dropdownOpened && "mobile-nav__menu--active"
				}`}
			>
				<Menu />
				<ul
					className={`mobile-nav__dropdown  dropdown ${
						dropdownOpened && "mobile-nav__dropdown--active"
					}`}
				>
					{[
						{ name: "Home", link: "/" },
						{ name: "Blog", link: "/blog" },
						{ name: "About", link: "/about" },
					].map((item) => (
						<li>
							<a
								href={item.link}
								class={`dropdown__item ${
									path === item.link &&
									"dropdown__item--current"
								}`}
							>
								<span>{item.name}</span>
							</a>
						</li>
					))}
					<a
						href="mailto:ryanridnn@gmail.com"
						class="mobile-nav__email"
						target="_blank"
					>
						Email Me
					</a>
				</ul>
			</button>
		</div>
	);
}
