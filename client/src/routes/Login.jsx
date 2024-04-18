import { useRef } from "react";
import CTAButton from "../components/CTAButton";
import * as yup from "yup";
import { string, object } from "yup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Helmet } from "react-helmet";

function Login() {
  const loginForm = useRef(null);
  //const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const loginSchema = object({
    email: string().required("Email is required").email("Invalid Email"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters"),
    /*.matches(passwordRules, { message: "Please create a stronger password" }) */
  });
  async function handleLogin(event) {
    try {
      event.preventDefault();
      const form = loginForm.current;
      const email = form["email"].value;
      const password = form["password"].value;
      const role = form.querySelector('input[name="role"]:checked').value;      // eslint-disable-next-line no-unused-vars
      const userDetails = await loginSchema.validate({ email, password });
      console.log(role)
      const payload = {
        email: email,
        password: password,
        role: role
      };
      await axios
        .post("http://localhost:3800/login", payload)
        .then((response) => {
          if (response.data.userfound) {
            console.log(response.data);
            if (response.data.validate)
              toast.success("Logged in Successfully !");
            else toast.error("Invalid Email or Password");
          }
        })
        .catch((err) => {
          if (err.response.data.userfound === false)
            toast.error("User not found !");
          else toast.error("Error occured during Login !");
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="py-32 px-4 min-h-screen dark:bg-slate-800 dark:text-white">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="flex flex-col justify-center items-center">
        <form ref={loginForm} className="w-full flex flex-col max-w-xl">  
        <label htmlFor="role">Role</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="user"
              name="role"
              value="user"
              className="mr-2"
              required
            />
            <label htmlFor="user">User</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="healthcareprovider"
              name="role"
              value="healthcareprovider"
              className="mr-2"
              required
            />
            <label htmlFor="healthcareprovider">Health care provider</label>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="p-2 mt-2 mb-4 border border-violet-600"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="p-2 mt-2 mb-4 border border-violet-600"
            required
          />
          <CTAButton
            type="submit"
            action={() => {
              handleLogin(event);
            }}
            text="Login"
          />
        </form>
        <span>
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold dark:text-purple-400 text-purple-800 hover:underline"
            to={"/signup"}
          >
            Sign up
          </Link>
        </span>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Flip
      />
    </div>
  );
}

export default Login;
