import React from 'react';
import "./index.css"


const salesData = [
    {
        title: 'Товар',
        level: 'Косметика',
        date: '12.05.2024',
        status: 'Выполнено'
    },
    {
        title: 'Товар',
        level: 'Продовольствие',
        date: '12.05.2024',
        status: 'В процессе',
    },
    {
        title: 'Товар',
        level: 'Игрушки',
        date: '12.05.2024',
        status: 'Не выполнено',
    },
];

const SalesList = () => {
    const textColor = salesData.map(each => {
        if (each.status === "Выполнено") {
            return 'green';
        } else if (each.status === 'В процессе') {
            return 'yellow';
        } else {
            return 'red';
        }
    });

    return (
        <div className="shadow mx-1 px-3 bg-light rounded-3 ">
            <div className=' d-flex align-items-center justify-content-between p-3 mt-3 ' >
                <h4 className="mb-0">План продаж</h4>
                <button className="btn ">Посмотреть всё</button>
            </div>

            <div className=' '>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Наменование</th>
                            <th>Категория</th>
                            <th>Дата</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((sale, index) => (
                            <tr key={index}>
                                <td>{sale.title}</td>
                                <td>{sale.level}</td>
                                <td>{sale.date}</td>
                                <td style={{ color: textColor[index] }}>{sale.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesList;