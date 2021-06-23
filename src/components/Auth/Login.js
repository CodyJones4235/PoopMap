import React, { useRef, useContext, useEffect, } from "react"
import { useHistory, Redirect, Link } from "react-router-dom";


export const Login = (props) => {
    const email = useRef();
    const existDialog = useRef();
    const history = useHistory();

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then((res) => res.json())
            .then((user) => (user.length ? user[0] : false));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        existingUserCheck().then((exists) => {
            if (exists) {
                localStorage.setItem("poop_usr", exists.id);
                history.push("/");
            } else {
                existDialog.current.showModal();
            }
        });
    };

    if (localStorage.getItem("poop_usr")) {
        return <Redirect to="/" />;
    } else {
        return (
            <main className="container--login">
                <dialog className="dialog dialog--auth" ref={existDialog}>
                    <div>User does not exist</div>
                    <button
                        className="button--close"
                        onClick={(e) => existDialog.current.close()}
                    >
                        Close
                    </button>
                </dialog>

                <section>
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1>Welcome To PoopMap</h1>
                        <h2>Please sign in</h2>
                        <fieldset>
                            <label htmlFor="inputEmail"> Email address </label>
                            <input ref={email} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus
                            />
                        </fieldset>
                        <fieldset>
                            <button type="submit">Sign in</button>
                        </fieldset>
                    </form>
                </section>
                <section className="link--register">
                    <Link to="/register">Not a member yet?</Link>
                </section>
            </main>
        );
    }
}