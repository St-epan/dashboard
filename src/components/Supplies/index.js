import React from 'react';
import "./index.css"


const suppliesData = [
    {
        title: 'Товар',
        level: 'Утварь',
        date: '15.05.2024',
        status: 'Ожидается'
    },
    {
        title: 'Товар',
        level: 'Продовольствие',
        date: '11.05.2024',
        status: 'Принято',
    },
    {
        title: 'Товар',
        level: 'Одежда',
        date: '13.05.2024',
        status: 'Оформлено',
    },
];

const Supplies = () => {
    const textColor = suppliesData.map(each => {
        if (each.status === "Принято") {
            return 'green';
        } else if (each.status === 'Ожидается') {
            return 'yellow';
        } else {
            return 'blue';
        }
    });

    return (
        <div className="shadow mx-1 px-3 bg-light rounded-3 ">
            <div className=' d-flex align-items-center justify-content-between p-3 mt-3 ' >
                <h4 className="mb-0">Поставки товара</h4>
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
                        {suppliesData.map((sup, index) => (
                            <tr key={index}>
                                <td>{sup.title}</td>
                                <td>{sup.level}</td>
                                <td>{sup.date}</td>
                                <td style={{ color: textColor[index] }}>{sup.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Supplies;