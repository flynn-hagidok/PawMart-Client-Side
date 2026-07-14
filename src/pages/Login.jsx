import React, { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../context/AuthContext/AuthContext';

const Login = () => {

    const { handleGoogleLogin } = use(AuthContext);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <Helmet>
                <title>PawMart | Register</title>
            </Helmet>
            <div className="w-full max-w-md shadow-2xl rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary">
                    Login Now
                </h2>
                <p className="text-center text-gray-500 mt-2 mb-6">
                    Login your PawMart account
                </p>
                <form className="space-y-2">
                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>
                        <input
                            type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn bg-linear-to-r from-secondary to-base-200 w-full mt-2"
                    >
                        Login
                    </button>
                    <p className='text-center font-semibold'>Or</p>
                    <button type="button" onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className="text-center text-sm">
                        Don't have an account?{" "}
                        <span className="text-primary font-semibold cursor-pointer hover:underline">
                            Register
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;