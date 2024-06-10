import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

export default function SignIn() {
    const dispatch = useDispatch();
    const { loading, userToken, error } = useSelector((state) => state.auth);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate('/user-account');
        }
    }, [navigate, userToken]);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        console.log(formData);

        let validationErrors = {};

        //Custom validation
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email) {
            validationErrors.email = 'Email unvalid. Check your email address.';
        }

        if (!password) {
            validationErrors.password = 'Password field must not be empty.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Les données ont été envoyées à l'API");
            dispatch(loginUser(formData));
            setErrors({});
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {error && <div>{error}</div>}
                <form id="form-sign-in" onSubmit={handleSubmitForm}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                        {errors.email && (
                            <div className="error-form-sign-in">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                        {errors.password && (
                            <div className="error-form-sign-in">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">
                        {loading ? <Spinner /> : 'Sign In'}
                    </button>
                </form>
            </section>
        </main>
    );
}
