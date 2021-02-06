import React, {useState} from 'react';

const Categories = React.memo(function Categories ({items, onClickItem}) {

    const [activeItem, setActiveItem] = useState(null);
    const onSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : 0}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {items?.map((name, index) =>
                    <li
                        className={activeItem === index ? 'active' : 0}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}
                    >{name}</li>)}
            </ul>
        </div>
    )
})

export default Categories;