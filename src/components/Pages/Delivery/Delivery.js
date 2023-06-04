import styles from "./Delivery.module.css";
import { Title } from "../../../common/Title/Title";

export function Delivery () {
	return (
		<section className={styles.container}>
			<Title title='Условия доставки'/>
		</section>
	);
}