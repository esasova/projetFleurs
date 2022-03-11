import { useState } from 'react'
import '../style/Category.css'
function Category ({plantList, selectedCategory, setSelectedCategory}) {
    const [categoryList, setCategoryList] = useState(Array.from(new Set(plantList.map(el => el.category))).map(el => ({name: el, checked: false})))
    const [checked, setChecked] = useState(true)
    function setCategory (category) {
        if(selectedCategory.includes(category)) {
            setSelectedCategory(selectedCategory.filter(cat => cat !== category))
            setChecked(false)
        } else if (category === '') {
            setSelectedCategory([])
            categoryList.forEach(el => el.checked = false)
            setChecked(true)
        }
        else {
            const newCategoryList = categoryList.map(el => el.name === category ? { name: category, chacked: true} : el)
            setCategoryList(newCategoryList)
            setSelectedCategory(alreadySelected => [...alreadySelected, category])
            setChecked(false)
        }
    }
    return (
        <div className="lmj-category-list">
                    <label>Toutes</label>
                    <input type="checkbox" value="" onChange={(e) => setCategory(e.target.value)} checked={checked} />
                {
                    categoryList.map((cat, index) => (
                        <div key={`${cat.name}-${index}`}>
                        <label>{cat.name}</label>
                        <input type="checkbox" value={cat.name} onChange={(e) => setCategory(e.target.value)} checked={cat.checked} />
                        </div>

                    ))
                }
        </div>
    )
}
export default Category
