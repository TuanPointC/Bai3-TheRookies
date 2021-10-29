import styles from './Counter.module.css'
import { useState } from 'react'


const Counter = (props) => {
    const [value, setValue] = useState(0)
    const changeValue = (level) => {
        setValue(value + level)
    }
    return (
        <div className={styles.counter}>
            <button 
                className={styles.button} 
                onClick={() => changeValue(-1)}
            >
                -
            </button>
            <span>{value}</span>
            <button
                className={styles.button} 
                onClick={() => changeValue(1)}
            >
                +
            </button>
        </div>
    )
}

export default Counter;