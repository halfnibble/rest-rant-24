const React = require('react');
const Default = require('./layouts/Default');

const Index = (data) => {
    let placesFormatted = data.places.map((place) => {
        return (
            <div key={place.name} className='col-sm-6'>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        );
    });

    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>{placesFormatted}</div>
            </main>
        </Default>
    );
};

module.exports = Index;
