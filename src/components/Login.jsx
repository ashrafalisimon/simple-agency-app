import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { loginWithEmail, googleLogin } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await loginWithEmail(data.email, data.password);
            Swal.fire({
                title: "Successfuly Login!",
                icon: "success",
                draggable: true
            });
            setError("");
            navigate("/")

        } catch (error) {
            console.error("Failed to login", error.message)
            setError("Failed to login. Plase provide correct email and password again...")
        }
    };
    // google login
    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigate("/")
        } catch (error) {
            console.error("Failed to login", error);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Please Login</h2>
                {/* registration form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700" >Email: </label>
                        <input
                            {...register("email", {
                                required: "Email is Required", pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"
                                }
                            })}
                            type="email" placeholder="Enter Your Email..." className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {errors.email && <p className="text-sm italic text-red-500 mt-2">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700" >Password: </label>
                        <input
                            {...register("password", {
                                required: "Password is Required", minLength: {
                                    value: 6, message: "Password must be at leat 6 Characters"
                                }
                            })}
                            type="password" placeholder="Enter Your Password..." className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {errors.password && <p className="text-sm italic text-red-500 mt-2">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign In</button>
                </form>
                {/* social login */}
                <div className="text-center space-y-4">
                    <p className="text-gray-600 " >Or sign-in with</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={handleGoogleLogin} className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600"><FaGoogle /><span>Google</span></button>
                        <button className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900"><FaGithub /><span>Github</span></button>
                        <button className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600"><FaFacebook /><span>Facebook</span></button>
                    </div>
                </div>
                <p className="text-sm text-center text-gray-600">Do not have an account? Please <Link to='/register' className="text-blue-600 hover:underline">Register</Link></p>
            </div>
        </div>
    )
}

export default Login