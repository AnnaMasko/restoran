import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search"; 
import { Contact } from "../Contact/Contact";
import { ButtonBasket } from "../ButtonBasket/ButtonBasket";

export const Header = () =>{
    return (
        <div className ={styles.container}>
        <Logo/>
        <Search/>
        <Contact/>
        <ButtonBasket/>
        </div>
    )
}