import React, { useState, useEffect } from 'react';

import Categories from '../components/Catogories'
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Cart() {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortId, setSortId] = useState({
        name: 'популярности',
        sort: 'rating'
    })

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://64bbda5c7b33a35a4446be63.mockapi.io/items?${
            categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortId.sort}&order=desc`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortId])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Sort sortValue={sortId} onClickSort={(id) => setSortId(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.map(item => <PizzaBlock key={item.id} {...item} />)
                }
            </div>
        </div>
    );
}

export default Cart;