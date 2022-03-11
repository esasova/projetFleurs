import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
function handleClick(careType, quantity) {
    alert(`Cette plante nécessite ${quantity} ${careType}`)
}
function CareScale(props) {
    const quantity = ['peu', 'modérement', 'beaucoup']
    const range = [1, 2, 3]
    const scaleType = props.careType === 'light' ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)
    return (
        <div onClick={() => handleClick(props.careType === 'light' ? 'de lumière' : 'd\'eau', quantity[props.scaleValue -1])}>
            {
                range.map(el => (props.scaleValue >= el ? (<span key={el.toString()}>{ scaleType }</span>) : null))
            }
        </div>
    )
}
export default CareScale
