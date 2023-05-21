import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search"; 
import { Contact } from "../Contact/Contact";
import { ButtonBasket } from "../ButtonBasket/ButtonBasket";
import { Hamburger } from "../../common/Hamburger/Hamburger";

export const Header = ({showMenu, setShowMenu}) =>{
    return (
        <div className ={styles.container}>
        <Hamburger setShowMenu={setShowMenu} showMenu={showMenu}/>
        <Logo/>
        <Search/>
        <Contact/>
        <ButtonBasket/>
        </div>
    )
}