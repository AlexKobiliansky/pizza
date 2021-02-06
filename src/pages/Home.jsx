import React, {useCallback} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../redux/actions/filters';


const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
];

const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

function Home() {

    const dispatch = useDispatch();


    // const {items} = useSelector(({pizzas}) => {
    //     return {
    //         items: pizzas.items
    //     }
    // });
    const items = useSelector(({pizzas}) => pizzas.items);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onClickItem = {onSelectCategory}
                />
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((pizza) => (
                    <PizzaBlock
                        key={pizza.id}
                        {...pizza}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;