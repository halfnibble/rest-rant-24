const React = require('react');
const Default = require('../layouts/Default');

const Edit = ({ place }) => {
    return (
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${place.id}?_method=PUT`} method='POST'>
                    <div className='mb-3'>
                        <label htmlFor='name'>Place Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            className='form-control'
                            defaultValue={place.name}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input
                            type='text'
                            name='pic'
                            id='pic'
                            className='form-control'
                            defaultValue={place.pic}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='city'>City</label>
                        <input
                            type='text'
                            name='city'
                            id='city'
                            className='form-control'
                            defaultValue={place.city}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='state'>State</label>
                        <input
                            type='text'
                            name='state'
                            id='state'
                            className='form-control'
                            defaultValue={place.state}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input
                            type='text'
                            name='cuisines'
                            id='cuisines'
                            className='form-control'
                            defaultValue={place.cuisines}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <button type='submit' className='btn btn-primary'>
                            <i className='bi bi-floppy'></i> Save Changes
                        </button>
                    </div>
                </form>
            </main>
        </Default>
    );
};

module.exports = Edit;
