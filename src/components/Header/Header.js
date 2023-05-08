import styles from "./Header.module.css"
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search"; 
import { Contact } from "../Contact/Contact";
import { Basket } from "../Basket/Basket";

export const Header = () =>{
    return (
        <div className ={styles.container}>
        <Logo/>
        <Search/>
        <Contact/>
        <Basket/>
        </div>
    )
}