import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    // const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const { signInUser, signInWithGoogle } = useAuth();
   
    
   
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate(location?.state ? location.state:'/');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                });
            })
            .catch(error => {
                console.error(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Check your email/ password !',
                    text: error.message,
                });
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                
                navigate(location?.state ? location.state:'/');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                });
            })
            .catch(error => {
                console.error(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Check your email/ password !',
                    text: error.message,
                });
            })
    }

    return (
        <div className="hero min-h-screen bg-white-200" style={{ backgroundImage: 'url("https://i.ibb.co/qgV3g1m/marten-bjork-n-IKQDCyr-G0-unsplash.jpg")', opacity: '0.9' }}>
       
       <Helmet>
        <title>Log in | BookBliss</title>
        <meta name="description" content="This is my awesome app." />
      </Helmet>
        <div className="hero-content flex-col">
            <div className="text-center ">
                <h1 className="text-5xl text-yellow-500 font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
                <div className="card-body  text-white  glass rounded-lg mb-16">
                    <form 
                    onSubmit={handleLogin}
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" required className="input input-bordered text-black font-bold" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-white">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered text-black font-bold" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover  text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning bg-white">Login</button>
                        </div>
                    </form>
                    <p> First time here? please <Link
                     to="/register">
                        <button className="btn btn-link text-purple-400 font-bold">Register</button>
                    </Link> </p>

                    <div className="flex ml-6">
                    
                    <p>
                        
                        <button  onClick={handleGoogleSignIn} className="btn btn-warning  text-blue "><FcGoogle></FcGoogle> Log in with Google</button></p>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;