import axios from 'axios';
import { useEffect, useState } from 'react'

const Pokemon = (props) => {
    const [index, setIndex] = useState(3)
    const [value, setValue] = useState({ name: "", weight: "", img1: "", img2: "" })
    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`, {
            cancelToken: cancelTokenSource.token
        })
            .then(res => {
                var data = res.data
                var img1 = data.sprites.front_default
                var img2 = data.sprites.back_default
                setValue({ name: data.name, weight: data.weight, img1: img1, img2: img2 })
            })
        return () => cancelTokenSource.cancel();
    }, [index])

    const changeIndex = (level) => {
        if (index > 1)
            setIndex(index + level);
    }
    return (
        <div>
            <div>Id: {index}</div>
            <div>Name: {value.name}</div>
            <div>Weight: </div>
            <img src={value.img1} alt="pokemon" />
            <img src={value.img2} alt="pokemon" />
            <div className="button">
                <button onClick={() => changeIndex(-1)}>Prev</button>
                <button onClick={() => changeIndex(1)}>Next</button>
            </div>
        </div>
    )
}

export default Pokemon;