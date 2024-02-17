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
                        <h5>{place.showEstablished()}</h5>
                        <p>{cuisinesBadges}</p>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col'>
                        <a href={`/places/${place.id}/edit`} className='btn btn-warning'>
                            <i className='bi bi-pencil'></i> Edit
                        </a>
                        <form action={`/places/${place.id}?_method=DELETE`} method='POST'>
                            <button type='submit' className='btn btn-danger'>
                                <i className='bi bi-trash'></i> Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Default>
    );
};

module.exports = Show;
