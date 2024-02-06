const React = require('react');
const Default = require('./layouts/Default');

const Home = () => {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
                <div>
                    <img
                        src='/images/croissant-family-restaurant.png'
                        alt='Croissant with a Croissant Family'
                    />
                </div>
                <a href='/places'>
                    <button className='btn btn-primary'>Places Page</button>
                </a>
            </main>
        </Default>
    );
};

module.exports = Home;
