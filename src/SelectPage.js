import styles from './SelectPage.module.css'
const SelectPage = (props) => {
    const changValue = (event) => {
        props.setValue(event.target.value)
    }
    return (
        <div className={styles.selectPage}>
            <select value={props.value} onChange={changValue}>
                <option value="Wellcome">Wellcome</option>
                <option value="Counter">Counter</option>
                <option value="Checkbox">Checkbox</option>
                <option value="Pokemon">Pokemon</option>
            </select>
        </div>
    )
}
export default SelectPage;