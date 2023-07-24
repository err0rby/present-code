import { useState } from "react";

function Categories() {

    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, i) => {
                        return <li key={i} onClick={() => { setActiveIndex(i) }} className={activeIndex === i ? 'active' : ''}>{value}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Categories;