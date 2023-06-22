import styles from "./Profile.module.css";
import { Title } from "../../common/Title/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./../../firebase";

export function Profile() {
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const handleLogout = async () => {
		await signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((err) => {
				setError(err.message);
			});
	};
	return (
		<div className={styles.container}>
			<Title title="Личный кабинет" />
			<div className={styles.exit}>
				<button className={styles.exitButton} onClick={handleLogout}>
					Выйти
				</button>
				{error && <span>Something went wrong</span>}
			</div>
		</div>
	);
}