import React, {useState} from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer}
from 'react-icons/fa';

export default function Services() {
    let data = [
        {
            icon: <FaCocktail/>,
            title: 'Free Cocktail',
            info: 'Anim aute dolore incididunt velit veniam occaecat ea dolore pariatur adipisicing sit deserunt adipisicing. Sint minim fugiat aliquip est et. Laborum sint irure magna velit exercitation quis consectetur mollit consectetur. Ad voluptate qui excepteur officia tempor aliquip magna ea consectetur.'
        },
        {
            icon: <FaHiking/>,
            title: 'Adventurous Hiking',
            info: 'Anim aute dolore incididunt velit veniam occaecat ea dolore pariatur adipisicing sit deserunt adipisicing. Sint minim fugiat aliquip est et. Laborum sint irure magna velit exercitation quis consectetur mollit consectetur. Ad voluptate qui excepteur officia tempor aliquip magna ea consectetur.'
        },
        {
            icon: <FaShuttleVan/>,
            title: 'Free Transport',
            info: 'Anim aute dolore incididunt velit veniam occaecat ea dolore pariatur adipisicing sit deserunt adipisicing. Sint minim fugiat aliquip est et. Laborum sint irure magna velit exercitation quis consectetur mollit consectetur. Ad voluptate qui excepteur officia tempor aliquip magna ea consectetur.'
        },
        {
            icon: <FaBeer/>,
            title: 'Strongest Beer',
            info: 'Anim aute dolore incididunt velit veniam occaecat ea dolore pariatur adipisicing sit deserunt adipisicing. Sint minim fugiat aliquip est et. Laborum sint irure magna velit exercitation quis consectetur mollit consectetur. Ad voluptate qui excepteur officia tempor aliquip magna ea consectetur.'
        },
    ];

    const [services, setServices] = useState(data);

    return (
        <div>
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
