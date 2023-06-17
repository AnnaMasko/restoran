import styles from "./ProductTable.module.css";

export const ProductTable = ({element }) => {
    //console.log(dataItem)
    return (
        
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Белки</th>
                    <th>Жиры</th>
                    <th>Углеводы</th>
                    <th>Ккал</th>
                    <th>Вес</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{element.proteins}</td>
                    <td>{element.fats}</td>
                    <td>{element.carbohydrates}</td>
                    <td>{element.kilocalories}</td>
                    <td>{element.weight} г.</td>
                </tr>
            </tbody>
        </table>
    )
};
