import React from 'react';
import {
    Headline
} from '../components/headline';
import {
    Contact
} from '../components/contact';
import {
    Collection
} from '../components/collection';
import {
    Line
} from '../components/line';
import {
    About
} from '../components/about';
import {
    Footer
} from '../components/footer';
export const Home = () => {
    return (
        <div>
	        <section className="container-main">
	        	<Headline />
				<Contact />
			</section>
		
        </div>
    )
};

    // <Line />
            // <Collection />
            // <About />
            // <Footer />