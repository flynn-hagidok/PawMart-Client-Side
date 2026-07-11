import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md shadow-2xl rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary">
                    Register Now
                </h2>
                <p className="text-center text-gray-500 mt-2 mb-6">
                    Create your PawMart account
                </p>
                <form className="space-y-5">
                    <div>
                        <label className="block mb-2 font-medium">
                            Full Name
                        </label>
                        <input
                            type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" required
                        />
                    </div>
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
                            Photo URL
                        </label>
                        <input
                            type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full"
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
                        className="btn btn-primary w-full mt-2"
                    >
                        Register
                    </button>
                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <span className="text-primary font-semibold cursor-pointer hover:underline">
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;