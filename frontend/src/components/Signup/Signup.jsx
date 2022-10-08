import React from "react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 1 },
    },
    exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" },
    },
};

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const signup = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;
        if (
            name &&
            email &&
            password &&
            cpassword &&
            password === cpassword
        ) {
            try {
                const res = await axios.post(
                    "http://localhost:5000/signup",
                    user
                );
                console.log(res);
                setUser({
                    name: "",
                    email: "",
                    password: "",
                    cpassword: "",
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("Please fill all the details correctly");
        }
    };

    const styles = {
        container: `flex w-screen h-screen content-center justify-center items-center bg-inherit`,
        signup: `w-[60%] items-center text-center rounded-md p-8 bg-slate-100 shadow-lg shadow-indigo-500/50`,
        heading: `text-3xl font-bold mb-4`,
        input: `rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12`,
        button: `bg-violet-700 hover:bg-violet-600 border-2 border-violet-900 text-white font-bold py-1 px-2 rounded my-2 outline-none cursor-pointer text-2xl`,
        form: `grid grid-cols-2 gap-2`,
    };

    return (
        <motion.div
            className={styles.container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className={styles.signup}>
                <h1 className={styles.heading}>Sign Up</h1>
                <form className={styles.form}>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={user.email}
                        placeholder="Email Id"
                        onChange={handleChange}
                    />
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={handleChange}
                        autoComplete="on"
                    />
                    <input
                        className={styles.input}
                        type="password"
                        name="cpassword"
                        value={user.cpassword}
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        autoComplete="on"
                    />
                </form>
                <div
                    onClick={(e) => {
                        signup(e);
                    }}
                    className={styles.button}
                >
                    Signup
                </div>
                <div>or</div>
                <Link to="/login">
                    <div className={styles.button}>Login</div>
                </Link>
            </div>
        </motion.div>
    );
};
export default Signup;
