import React from 'react'
        import Header from '../Header'
        import Sales from '../Sales'
        import SalesList from '../SalesList'
        import "./index.css"

        const courseDetails = [
            { id: 1, total: 5, text: 'Продажи в процессе', color: 'yellow' },
            { id: 2, total: 10, text: 'Выполненные продажи', color: 'green', },
            { id: 3, total: 2, text: "Невыполненные продажи", color: 'red' },
        ];

        const Body = () => {
            return (
                <div className='w-100 sales-wrapper'>
                    <Header />
                    <h4 className='mx-3 d-block'>Добро пожаловать, сотрудник</h4>
                    <div className='d-flex justify-content-around'>
                        <div>
                            <div className='d-flex gap-5 mt-4 '>
                                {courseDetails.map(each => (
                                    <Sales key={each.id} each={each} />
                                ))}
                            </div>
                            <div>
                                <SalesList />
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        export default Body;