import styles from "./Autorizacion.module.css";

export function Autorization({
	title,
	titleButton,
	userAuthData,
	handleChange,
	onClickButton,
	error,
}) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<form className={styles.form}>
				{error && <span className={styles.error}>{error}</span>}
				<div className={styles.input_container}>
					<input className={styles.input}
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						value={userAuthData.email}
						onChange={handleChange}
					></input>
				</div>
				<div className={styles.input_container}>
					<input className={styles.input}
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						value={userAuthData.password}
						onChange={handleChange}
					></input>
				</div>
				<button className={styles.button} type="submit" onClick={onClickButton}>
					{titleButton}
				</button>
			</form>
		</div>
	);
}
