import React from 'react';
import {intro,aboutTitle} from '../store/db'

const element =
    <section className="about">
		<div className="deep-gray title-about">About Me</div>
		<h3>{aboutTitle}</h3>
		<p>{intro}</p>
		<a href="mailto:yula.qian@gmail.com" className="red">Contact me</a>
	</section>

export const About = () => {
    return (
        element
    )
};