const React = require('react');
const Default = require('../layouts/Default');

const Show = ({ place }) => {
    // cuisines is comma separated string, E.g. "Italian, Chinese, Mexican"
    const cuisinesBadges = place.cuisines.split(',').map((cuisine) => {
        return (
            <span key={cuisine} className='badge rounded-pill text-bg-info me-2'>
                {cuisine}
            </span>
        );
    });

    return (
        <Default>
            <main className='container'>
                <div className='row align-items-start'>
                    <div className='col'>
                        <img src={place.pic} alt={place.name} />
                    </div>
                    <div className='col'>
                        <h1>{place.name}</h1>
                        <p>
                            Located at: {place.city}, {place.state}
                        </p>
                        <p>{cuisinesBadges}</p>
                    </div>
                </div>
            </main>
        </Default>
    );
};

module.exports = Show;
