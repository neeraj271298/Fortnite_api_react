import Axios from 'axios'
import React , {useState ,useEffect}from 'react'
import { useParams } from 'react-router-dom'

function ItemDetails() {
    const param  = useParams()

    const [item,setItem] = useState({})
    
    useEffect(() => {
        Axios.get(`https://fortnite-api.theapinetwork.com/item/get?id=${param.id}`)
        .then(res => setItem(res.data.data.item))
        .catch(err => console.log(err))
    }, [])

    { console.log(item) }
    { console.log(Object.keys(item).length) }
    return (
        Object.keys(item).length ? 
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.background} className="itemImage" />
        </div>
        : <h1>Loading ... </h1>
    )
}

export default ItemDetails
