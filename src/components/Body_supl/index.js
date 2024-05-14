import React from 'react'
import Header from '../Header'
import Supplies from '../Supplies'
import Sales from '../Sales'
import "./index.css"

const suplDetails = [
    { id: 1, total: 5, text: 'Ожидаемые поставки', color: 'yellow' },
    { id: 2, total: 10, text: 'Выполненные поставки', color: 'green', },
    { id: 3, total: 2, text: "Оформленные поставки", color: 'blue' },
];

const Body_supl = () => {
    return (
        <div className='w-100 supplies-wrapper'>
            <Header />
            <div className='d-flex justify-content-around'>
                <div>
                    <div className='d-flex gap-5 mt-4 '>
                        {suplDetails.map(each => (
                            <Sales key={each.id} each={each} />
                        ))}
                    </div>
                    <div>
                        <Supplies />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body_supl;