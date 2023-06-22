import styles from "./Delivery.module.css";
import { Title } from "../../../common/Title/Title";
import {Accordion} from './Accordion/Accordion'


export function Delivery () {
	return (
		<section className={styles.container}>
			<Title title='Условия доставки'/>
			<Accordion/>
		</section>
	);
}