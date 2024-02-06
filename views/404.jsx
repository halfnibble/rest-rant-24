const React = require('react');
const Default = require('./layouts/Default');

const PageNotFound = () => {
    return (
        <Default>
            <h1>404</h1>
            <h2>Timmy not found.</h2>
            <img
                src='/images/croissant-family-restaurant.png'
                alt='Croissant with a Croissant Family, but missing Timmy.'
            />
        </Default>
    );
};

module.exports = PageNotFound;
