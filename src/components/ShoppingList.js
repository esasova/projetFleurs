import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import Category from './Category'
import '../style/ShoppingList.css'
import { useState } from "react"
function ShoppingList({cart, updateCart, isOpen, setIsOpen }) {
    const [selectedCategory, setSelectedCategory] = useState('')
    const finalPlantList = selectedCategory === '' ? plantList : plantList.filter(plant => plant.category === selectedCategory)
   function addToCart(name, price) {
       setIsOpen(true)
        const alreadyAddedPlant = cart.find(plant => plant.name === name)
        if(alreadyAddedPlant) {
            const cartFilteredCurrentPlant = cart.filter(plant => plant.name !== name)
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: alreadyAddedPlant.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }
    return (
        <div>
            <Category plantList={plantList} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <ul className="lmj-plant-list">
            {
                finalPlantList.map(plant => (
                    <div key={plant.id}>
                    <PlantItem  cover={plant.cover} name={plant.name} light={plant.light} water={plant.water} />
                    <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                    </div>    

                ))
            }
            </ul>

        </div>
    )
}
export default ShoppingList
