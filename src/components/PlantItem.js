import CareScale from './CareScale'
import '../style/PlantItem.css'
function handleClick(plantName) {
    alert(`Voulez-vous acheter ${plantName} ?`)
}
function PlantItem(props) {
    const waterValue = props.water
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(props.name)}>
            <img className='lmj-plant-item-cover' src={props.cover} alt={props.name}/>
            <p>{props.name}</p>
            <CareScale  scaleValue={props.light} careType='light' />
            <CareScale scaleValue={props.water} careType='water'/>
        </li>
    )
}
export default PlantItem
