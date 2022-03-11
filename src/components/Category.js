import '../style/Category.css'
function Category ({plantList, selectedCategory, setSelectedCategory}) {
    const categoryList = Array.from(new Set(['', ...plantList.map(el => el.category)]))
    function setCategory (value) {
        setSelectedCategory(value)
    }
    return (
        <div className="lmj-category-list">
            <select value={selectedCategory} onChange={(e) => setCategory(e.target.value)}>
                {
                    categoryList.map((cat, index) => (
                        <option key={`${cat}-${index}`} value={cat}>{cat}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default Category
