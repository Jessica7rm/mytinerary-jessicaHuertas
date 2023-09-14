import './styles.css'
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import getUsersAction from "../../store/actions/usersActions";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


function index() {
    const [countries, setCountries] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const name = useRef(null);
    const lastname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const url_img = useRef(null);
    const country = useRef(null);

    useEffect(() => {
        axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
            setCountries(data.map((country) => country.name.common))
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const aux = [name, lastname, email, password, url_img, country];
        if (aux.some((campo) => !campo.current.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'All fields are required',
            })
        } else {
            const body = {
                name: name.current.value,
                lastname: lastname.current.value,
                email: email.current.value,
                password: password.current.value,
                url_img: url_img.current.value,
                country: country.current.value,
            };
            dispatch(getUsersAction.sign_up(body))
                .then((response) => {
                    if (response.payload.userCreate) {
                        console.log(response.payload.userCreate);
                        navigate('/')
                    }
                })
        }
    };

    const singUpWhithGoogle = (credentialResponse) => {
        const dataUser = jwtDecode(credentialResponse.credential);
        console.log(dataUser);

        const body = {
            name: dataUser.given_name,
            lastname: dataUser.family_name,
            email: dataUser.email,
            password: dataUser.sub,
            url_img: dataUser.picture,
            country: "not_country"
        };
        dispatch(getUsersAction.sign_up(body))
            .then((response) => {
                if (response.payload.userCreate) {
                    console.log(response.payload.userCreate);
                    navigate('/')
                }
            })
    };

    return (
        <main className="singUp">
            <div className="sTitles">
                <h2>My Tinerary</h2>
                <p>Be part of this travel community.</p>
                <p>Share your experiences and interact with other travelers.</p>
                <p>Get started now</p>
            </div>

            <form className="formUp" onSubmit={handleSubmit}>
                <h3>Create account</h3>
                <div className='formGroup'>
                    <p>Sing up with email </p><GoogleLogin
                        text="signup_with"
                        onSuccess={singUpWhithGoogle}
                        onError={() => {
                            console.log('Login Failed');
                        }} />
                    <p className="textp" >Already have an account? <a href="/signIn" >Sing in</a></p>
                </div>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" ref={name} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" ref={lastname} />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" ref={email} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" ref={password} />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className="form-control" placeholder="Url image" aria-label="Photo" ref={url_img} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <select className="form-select" aria-label="Default select example" name="country" ref={country}>
                            {countries.length > 0 &&
                                countries.map((country) => (
                                    <option key={`opt-country-${country}`} value={country}>
                                        {" "}
                                        {country}{" "}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>

        </main>
    )
}

export default index