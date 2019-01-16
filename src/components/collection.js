import React from 'react';
import {collection} from '../store/db'

const element = (
    <div className="collection">
        <ul>
          {collection.map((item) =>
            <li key={item.title} className="pic">
                <a href={item.href} title={item.title}></a>
            </li>
          )}
        </ul>
    </div>
   
);

export const Collection = () => {
    return (
        element
    )
};