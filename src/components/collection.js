import React from 'react';

const content = [
    { title: 'email', href: 'mailto:yula.qian@gmail.com', pic:''},
    { title: 'github', href: 'https://github.com/june111', pic:'' }
];

const element = (
    <ul>
      {content.map((post) =>
        <li key={post.title}>
        <a href={post.href} title={post.title}>{post.title}</a>
        </li>
      )}
    </ul>
);

export const Collection = () => {
    return (
        element
    )
};