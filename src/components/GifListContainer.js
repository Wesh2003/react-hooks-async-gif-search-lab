import { useEffect } from 'react'

function GifListContainer(){

    const [gif, setGif] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/countries')
        .then((response)=> response.json())
        .then(data => {
        setGif(data)
        })
    }, [])

    return (

        <>
            {gif}
        </>
    )
}


export default GifListContainer