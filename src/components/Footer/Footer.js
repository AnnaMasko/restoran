import { Logo } from '../Logo/Logo'
import styles from './Footer.module.css'
import { NavigationFooter } from './NavigationFooter'
import { Weather } from './Weather'

export const Footer = ({weather, showMenu, setShowMenu}) => {
    return (
        <div className={styles.footer}>
            
            <div className={styles.containerContent}>
            <Logo />
            <span>© ООО СК «АПШЕРОН» Все права защищены. 2010-2020</span>
            <span>Пользовательское соглашение</span>
            <span>Карта сайта</span>
            <span>Политика конфиденциальности</span>
        </div> 
        <NavigationFooter showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Weather weather={weather}/>
        </div>
    )
}