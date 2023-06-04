import styles from "./Refund.module.css";
import { Title } from "../../../common/Title/Title";


export function Refund() {
	return (
		<section className={styles.container}>
			<Title title='Возврат товара'/>
		</section>
	);
}