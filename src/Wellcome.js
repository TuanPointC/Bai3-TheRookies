import styles from './Wellcome.module.css'

const Wellcome =(props)=>{
    return(
        <div style={{backgroundColor:props.color}} className={styles.wellcome}>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
        </div>
    )
}

export default Wellcome;