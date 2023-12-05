import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import React, { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    // const { logIn } = useContext(AuthContext)
    const {logIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        logIn(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                navigate(location?.state ? location.state: '/')
            })
            .catch((error) => {
                console.log(error)
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
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
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
                                <input className='btn btn-primary bg-[#FF3811] text-white' type="submit" value='Login' />
                            </div>
                        </form>
                        <p className='text-center font-bold my-4'>New to Car Doctors? <Link className='text-green-500' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;