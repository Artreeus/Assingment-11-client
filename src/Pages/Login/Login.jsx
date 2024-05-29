import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Ensure you import the CSS for Toastify
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Wrong Credential. User email or password doesn't match.");
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate(location?.state ? location.state : "/");
      toast.success("Google login successful!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to login with Google.");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-auto">
          <img
            src="https://i.ibb.co/PMfdF8B/login-concept-illustration-114360-739.jpg"
            alt="Login Illustration"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="divider">Or</div>
              <div className="text-center space-y-3">
                <button
                  type="button"
                  className="btn btn-outline border-2"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle className="mr-2" />
                  Google
                </button>
              </div>
            </form>
            <p className="my-4 text-center">
              New to Crestview? 
              <Link className="text-primary font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
