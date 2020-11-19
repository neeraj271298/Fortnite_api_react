import React , {useState , useEffect }from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Shop() {

    const [items,setItems] = useState([])
    
    useEffect(() => {
        axios.get('https://fortnite-api.theapinetwork.com/upcoming/get')
        .then(res => setItems(res.data.data))
        .catch(err => console.log(err))
    } , [])

    return (
        <div>
            <h1>Shop PAGE</h1>
            { items.length ?
                <table>
                <thead>
                    <tr>
                        <td>
                            Sr. No.
                        </td>
                        <td>
                            Item Id
                        </td>
                        <td>
                            Item name
                        </td>
                        <td>
                            Item Type
                        </td>
                        <td>
                            Item rarity
                        </td>
                        
                        <td>
                            Item points
                        </td>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map((item,i) =>
                        <tr key = {item.itemId}>
                            <td>
                                {++i}
                            </td>
                            <td>
                                {item.itemId}
                            </td>
                            <td>
                            <Link to={`/shop/${item.itemId}`} className="itemLink" >{item.item.name}</Link>
                            </td>
                            <td>
                                {item.item.type}
                            </td>
                            <td>
                                {item.item.rarity}
                            </td>
                            <td>
                                {item.item.ratings.avgStars}
                            </td>
                        </tr>
                    ) 
                }
                </tbody>
                </table>
            : <h1>Loading .....</h1>}
        </div>
    )
}

export default Shop
