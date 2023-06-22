import styles from './Accordion.module.css'
import { useState } from "react";
import { AccordionData } from './AccordionData'
import arrowUp from '../../../../assets/images/arrow_up.png'
import arrowDown from '../../../../assets/images/arrow_down.png'

export const Accordion = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleItem = (id) => {
        const newActiveId = isActive !== id ? id : false
        setIsActive(newActiveId)
    }

    return (
         <div className={styles.accordion}>
            {AccordionData.map((item) => (
                <div key={item.id} className={styles.block}>
                    <div
                        className={styles.title}
                        onClick={() => toggleItem(item.id)}
                    >
                        {item.title}
                        {isActive === item.id ? <img className={styles.arrow} src ={arrowUp}/> : <img className={styles.arrow} src = {arrowDown}/>}
                    </div>
                    {isActive === item.id && (
                        <div className={styles.content}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>  
    );
}