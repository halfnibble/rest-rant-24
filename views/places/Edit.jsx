const React = require('react');
const Default = require('../layouts/Default');

const Edit = (data) => {
    return (
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${data.id}?_method=PUT`} method='POST'>
                    <div className='mb-3'>
                        <label htmlFor='name'>Place Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            className='form-control'
                            defaultValue={data.place.name}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input
                            type='text'
                            name='pic'
                            id='pic'
                            className='form-control'
                            defaultValue={data.place.pic}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='city'>City</label>
                        <input
                            type='text'
                            name='city'
                            id='city'
                            className='form-control'
                            defaultValue={data.place.city}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='state'>State</label>
                        <input
                            type='text'
                            name='state'
                            id='state'
                            className='form-control'
                            defaultValue={data.place.state}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input
                            type='text'
                            name='cuisines'
                            id='cuisines'
                            className='form-control'
                            defaultValue={data.place.cuisines}
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
