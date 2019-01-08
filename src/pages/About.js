import React from 'react';
import {
	view as Intro
} from '../components/intro';

const name = 'June';
const element = <div>About {name} <Intro /></div>;
const About = () => {
	return (
		element
	)
};

export default About;