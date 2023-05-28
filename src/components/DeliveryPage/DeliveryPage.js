import styles from './DeliveryPages.module.css'
import { useState } from "react";
import { DeliveryComponent } from './OrderComponent'
import clock from '../../assets/images/clock.png'
import { Link } from 'react-router-dom';


const initialState = {
	name: "",
	phone: "",
	delivery: "delivery",
	street: "",
	house: "",
	flat: "",
	entrance: "",
	floor: "",
	comment: "",
	payment: "online",
	change: "",
	time: "soon",
	persons: "1",
	callback: "noCall",
	agreement: false,
};

export function DeliveryPage() {
	const [state, setState] = useState(initialState);
	const [isDisabled, setIsDisabled] = useState(true);


	function handleChange({ target }) {
		const { name, value, type, checked } = target;		
		const stateValue = type === "checkbox" ? checked : value;
		setState({ ...state, [name]: stateValue });

	}

	return (
		<section>
			<h2 className={styles.title}>Оформление заказа</h2>

			<form className={styles.form}>
				<DeliveryComponent title='1. Контактная информация'>
					<div className={styles.formContent}>
						<input
							className={styles.formInput}
							type="text"
							name="name"
							value={state.name}
							placeholder="Имя*"
							onChange={handleChange}
						></input>
						<input
							className={styles.formInput}
							type="phone"
							name="phone"
							value={state.phone}
							placeholder="Телефон*"
							onChange={handleChange}
						></input>
					</div>
				</DeliveryComponent>

				<DeliveryComponent title='2. Доставка'>

					<div className={styles.formContent}>
						<div className={styles.choiceBox}>
							<input
								className={styles.formInput}
								id='deliveriOk'
								type="radio"
								name="delivery"
								value='delivery'
								checked={state.delivery === 'delivery'}
								onChange={handleChange}
							></input>
							<label
								className={`${styles.choiceButton} ${styles.choiceLeft}`}
								htmlFor='deliveriOk'
							>Доставка
							</label>
							<div>
								<input
									id="deliveryNo"
									name="delivery"
									type="radio"
									value="pickup"
									onChange={handleChange}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceRight}`}
									htmlFor="deliveryNo"
								>
									Самовывоз
								</label>
							</div>
							{state.delivery === "delivery" && (
								<div className={styles.deliveryTime}>
									<img src={clock} alt="clock" className={styles.iconClock}></img>
									<span>Доставим через 1 час 30 минут</span>
								</div>
							)}
						</div>
					</div>
					<h4 className={styles.formTitle}>Адрес доставки</h4>
					<div className={styles.formContent}>
						<div className={styles.contentBox}>
							<input
								className={styles.formInput}
								type="text"
								name="street"
								value={state.street}
								placeholder="Укажите улицу*"
								onChange={handleChange}
							></input>
							<input
								className={styles.formInput}
								type="text"
								name="house"
								value={state.house}
								placeholder="Номер дома*"
								onChange={handleChange}
							></input>
						</div>

						<div className={styles.contentBox}>
							<input
								className={styles.formInput}
								type="text"
								name="flat"
								value={state.flat}
								placeholder="№ квартиры/офиса"
								onChange={handleChange}
							></input>
							<input
								className={styles.formInput}
								type="text"
								name="entrance"
								value={state.entrance}
								placeholder="Подъезд"
								onChange={handleChange}
							></input>
							<input
								className={styles.formInput}
								type="text"
								name="floor"
								value={state.floor}
								placeholder="Этаж"
								onChange={handleChange}
							></input>
						</div>
						<div className={styles.contentBox} >
							<input
								className={styles.formInput}
								type="text"
								name="comment"
								value={state.comment}
								placeholder="Комментарий"
								onChange={handleChange}
							></input>
						</div>
					</div>
				</DeliveryComponent>

				<DeliveryComponent title='3. Оплатить'>
					<div className={styles.formContent}>
						<div className={styles.choiceBox}>
							<input
								className={styles.formInput}
								id='onlineiOk'
								type="radio"
								name="payment"
								value='online'
								checked={state.payment === 'online'}
								onChange={handleChange}
							></input>
							<label
								className={`${styles.choiceButton} ${styles.choiceLeft}`}
								htmlFor='onlineiOk'
							>Оплата онлайн
							</label>


							<input
								className={styles.formInput}
								id='cart'
								type="radio"
								name="payment"
								value='cart'
								checked={state.payment === 'cart'}
								onChange={handleChange}
							></input>
							<label
								className={`${styles.choiceButton} ${styles.choiceLeft}`}
								htmlFor='cart'
							>Картой курьеру
							</label>

							<input
								className={styles.formInput}
								id='cash'
								type="radio"
								name="payment"
								value='cash'
								checked={state.payment === 'cash'}
								onChange={handleChange}
							></input>
							<label
								className={`${styles.choiceButton} ${styles.choiceRight}`}
								htmlFor='cash'
							>Наличными
							</label>
						</div>
					</div>
					{state.payment === "cash" && (
						<input
							className={styles.AddBlock}
							type="text"
							name="change"
							value={state.change}
							placeholder="Сдача с"
							onChange={handleChange}
						></input>
					)}
				</DeliveryComponent>

				<DeliveryComponent title='4. Когда доставить'>
					<div className={styles.formContent}>

						<div className={styles.choiceBox}>
							<input
								className={styles.formInput}
								id='soon'
								type="radio"
								name="time"
								value='soon'
								checked={state.time === 'soon'}
								onChange={handleChange}
							></input>
							<label
								className={`${styles.choiceButton} ${styles.choiceLeft}`}
								htmlFor='soon'
							>В ближайшее время
							</label>


							<input
								className={styles.formInput}
								id='time'
								type="radio"
								name="time"
								onChange={handleChange}
							></input>
							<label
								className={`${styles.choiceButton} ${styles.choiceRight}`}
								htmlFor='time'
							>Ко времени
							</label>
						</div>
					</div>
					{state.time !== 'soon' && (
						<input className={styles.AddBlock}
							type="time"
							name="time"
							value={state.time}
							onChange={handleChange}>
						</input>
					)}
					<h4 className={styles.formTitle}>Хотите мы позвоним?</h4>
					<div className={styles.callBox}>
						<div className={styles.callItem}>
							<input
								id="noCall"
								name="callback"
								type="radio"
								value="noCall"
								checked={state.callback === "noCall"}
								onChange={handleChange}
							/>
							<label htmlFor="noCall">Не перезванивать</label>
						</div>
						<div className={styles.callItem}>
							<input
								id="call"
								name="callback"
								type="radio"
								value="call"
								onChange={handleChange}
							/>
							<label htmlFor="call">Потребуется звонок оператора</label>
						</div>
					</div>
				</DeliveryComponent>

				<DeliveryComponent>
					<div className={`${styles.formContent} ${styles.formAgreement}`}>
						<div className={styles.agreement}>
							<input
								id="agreement"
								type="checkbox"
								name="agreement"
								value={state.agreement}
								onChange={(event) => handleChange(event)}
							/>
							<label htmlFor="agreement">
								<span>
									Я согласен на обработку моих перс. данных в соответствии с{" "}
									<Link to="/">Условиями</Link>
								</span>
							</label>
						</div>
						<button
							className={styles.executeButton}
							type="submit"
							disabled={isDisabled}
						>
							Оформить заказ
						</button>
					</div>
				
				</DeliveryComponent>
			</form>
		</section>
	);
}
