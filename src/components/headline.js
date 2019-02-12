import React from 'react';
import {name,title} from '../store/db'

export class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open('https://blog.junezhu.top')
  }

  render() {
    return (
	 <section className="headline">
		<h1>{name}</h1>
		<h2>{title}</h2>
      	<button className="botton-red" onClick={this.handleClick} >BLOG</button>
	</section>
    );
  }
}

