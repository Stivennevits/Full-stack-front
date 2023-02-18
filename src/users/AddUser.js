import React from 'react'

export default function AddUser() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 '> Register User </h2>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label '>
                        Name
                    </label>
                    <input
                        type={"text"}
                        className="form-control shadow"
                        placeholder='Enter your Name'
                        name='name'
                        />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>
                    Username
                    </label>
                    <input
                        type={"text"}
                        className="form-control shadow"
                        placeholder='Enter your Username'
                        name='username'
                        />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                         Email
                    </label>
                    <input
                        type={"text"}
                        className="form-control shadow"
                        placeholder='Enter your e-mail address'
                        name='email'
                        />
                </div>
                <button type='submit' className='btn btn-outline-primary shadow'>
                Submit
                </button>
                <button type='submit' className='btn btn-outline-danger mx-2 shadow' >
                Cancel
                </button>
            </div>
            
        </div>
    </div>
  )
}
