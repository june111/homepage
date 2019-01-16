import React from 'react';
import {intro} from '../store/db'

const element =
    <section>
		<div>About</div>
		<p>{intro}</p>
		<button>Contact Me</button>
	</section>

export const About = () => {
    return (
        element
    )
};