import styles from "./Sale.module.css";
import { Title } from "../../../common/Title/Title";

export function Sale() {
	return (
		<section className={styles.container}>
			<Title title='Акции'/>
		</section>
	);
}