import React from 'react';

const content = "I'm xxx";
const element =
    <section>
		<div>About me</div>
		<p>{content}</p>
		<button>Contact Me</button>
	</section>

export const About = () => {
    return (
        element
    )
};