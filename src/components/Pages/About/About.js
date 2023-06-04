import { Title } from "../../../common/Title/Title";
import styles from "./About.module.css";

export function About() {
	return (
		<section className={styles.container}>
			<Title title='О ресторане'/>
		</section>
	);
}