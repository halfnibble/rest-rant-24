const React = require('react');
const Default = require('./layouts/Default');

const NotFound = () => {
    return (
        <Default>
            <h1>404</h1>
            <main>
                <h2>Timmy not found.</h2>
                <img
                    src='/images/bread-not-found.jpg'
                    alt='Croissant with a Croissant Family, but missing Timmy.'
                />
            </main>
        </Default>
    );
};

module.exports = NotFound;
