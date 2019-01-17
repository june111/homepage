import React from 'react';
import {copyright} from '../store/db'

const element =
    <section className="footer deep-gray">
		<div>{copyright}</div>
	</section>

export const Footer = () => {
    return (
        element
    )
};