
import { useState } from 'react'
import '../style/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    function handleInput(e) {
        setInputValue(e.target.value)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type="text" value={inputValue} onChange={handleInput} />
		</footer>
	)
}

export default Footer
