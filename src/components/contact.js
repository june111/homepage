import React from 'react';
import {content} from '../store/db'

const element = (
    <div className="contact">
        <ul >
      {content.map((item) =>
        <li key={item.title} >
        <a href={item.href} title={item.title} className={item.className}><i className={item.icon}></i></a>
        </li>
      )}
    </ul>
    </div>

);

export const Contact = () => {
    return (
        element
    )
};