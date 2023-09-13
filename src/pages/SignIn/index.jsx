import './styles.css'
import { useRef } from 'react';
import getUsersAction from "../../store/actions/usersActions"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const index = () => {
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password];
    if (aux.some((campo) => !campo.current.value)) {
      alert("All fields are required");
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value,
      };
      dispatch(getUsersAction.sign_in(body)).then((response) => {
        if (response.payload.user) {
          navigate("/");
        }
      })
    }
  };

  const signInWithGoogle = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    const body = {
      email: userData.email,
      password: userData.sub,
    };
    dispatch(getUsersAction.sign_in(body)).then((respuestaDelAction) => {
      if (respuestaDelAction.payload.user) {
        navigate("/");
      }
    });
  };


  return (
    <main className="singIn">
      <div className="sTitle">
        <h2>My Tinerary</h2>
      </div>
      <form className="formIn" onSubmit={handleSubmit}>
        <h3>Sing In</h3>
        <div>
          <p>New user? <a href="/signUp" >Create an account</a></p>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="text" className="form-control" placeholder="Email" aria-label="Email" id="inputEmail4" ref={email} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="text" className="form-control" placeholder="Password" aria-label="Password" id="inputPassword4" ref={password} />
        </div>
        <button type="submit" className="btn btn-secondary">Login</button>
        <GoogleLogin
          text="signin_with"
          onSuccess={signInWithGoogle}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </form>
    </main>
  )
}

export default index