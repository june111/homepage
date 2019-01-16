import React from 'react';
import {name,title} from '../store/db'

const element =
    <section className="headline">
		<h1>{name}</h1>
		<h2>{title}</h2>
		<button className="botton-red">BLOG</button>
	</section>

export const Headline = () => {
    return (
        element
    )
};