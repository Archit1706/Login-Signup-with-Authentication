import React, { useState } from "react";
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

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const login = () => {};

    const styles = {
        container: `flex w-screen h-screen content-center justify-center items-center bg-inherit`,
        login: `w-96 items-center text-center rounded-md p-8 bg-slate-100 shadow-lg shadow-indigo-500/50`,
        heading: `text-3xl font-bold mb-4`,
        input: `rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12`,
        button: `bg-violet-700 hover:bg-violet-600 border-2 border-violet-900 text-white font-bold py-1 px-2 rounded my-2 outline-none cursor-pointer text-2xl`,
    };

    return (
        <motion.div
            className={styles.container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className={styles.login}>
                <h1 className={styles.heading}>Login</h1>
                <form>
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
                </form>
                <div onClick={login} className={styles.button}>
                    Login
                </div>
                <div>or</div>
                <Link to="/signup">
                    <div className={styles.button}>Signup</div>
                </Link>
            </div>
        </motion.div>
    );
};
export default Login;
