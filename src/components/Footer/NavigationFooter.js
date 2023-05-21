import styles from "./NavigatiomFooter.module.css";
import { Link } from "react-router-dom";
import { pages } from "../../data/pages";

export function NavigationFooter({showMenu, setShowMenu}) {
    return (
        <nav className={[styles.navigation, showMenu ? styles.navHeader: " "].join(" ")}>
			
			{pages.map((page) => (
				<Link key={page.id} to={page.url}>
					{page.title}
				</Link>
			))}
		</nav>
    );
}
