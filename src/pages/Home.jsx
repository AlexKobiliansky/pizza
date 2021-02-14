import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';
import {addPizzaToCart} from '../redux/actions/cart';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';


const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
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
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    items={categoryNames}
                    onClickCategory = {onSelectCategory}
                />
                <SortPopup items={sortItems} activeSortType={sortBy.type} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((pizza) => (<PizzaBlock
                        onClickAddPizza={handleAddPizzaToCart}
                        key={pizza.id}
                        addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
                        {...pizza}
                    />))
                    : Array(12).fill(0).map((_, index) => (<LoadingBlock key={index} />)) }
            </div>
        </div>
    );
}

export default Home;