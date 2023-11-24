import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)


    const handleRegister = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then((result)=>{
            console.log(result)
            form.reset()
        })
        .catch((error)=>{
            console.error(error)
        })

    }

    return (
        <div className="hero bg-base-200 py-20 my-10  ">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" w-1/2 mr-20">
                <img src={img} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Register</h1>
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary bg-[#FF3811] text-white' type="submit" value='Register' />
                        </div>
                    </form>
                    <p className='text-center font-bold my-4'>Already have an account? <Link className='text-green-500' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;