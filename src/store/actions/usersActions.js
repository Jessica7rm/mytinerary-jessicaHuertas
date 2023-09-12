import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async (payload) => {
    try {
        let { email, password } = payload

        const user = await axios
            .post("http://localhost:3000/api/user/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                let token = localStorage.getItem("token");
                console.log(token);
                console.log("Successfully logged in");
                return response.data.user
            })

        return {
            user: user
        };
    } catch (err) {
        console.log(err.message);
        alert("Could not log in, please check the email and password are correct")
    }
});

const sign_up = createAsyncThunk("sign_up", async (body) => {
    try {

        const response = await axios.post("http://localhost:3000/api/user/register", body)

        localStorage.setItem('token', response.data.token);
        console.log("Successfully logged in");
        console.log(response.data.token);
        return response.data

    } catch (err) {
        console.log(err.message);
        alert("Could not register, please check that the data is correct")
    }
});

const authenticate = createAsyncThunk("authenticate", async () => {
    try {
        let token = localStorage.getItem("token");

        if (token) {
            let response = await axios.post("http://localhost:3000/api/user/authenticated", null, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            return {
                user: response.data.user,
                token: token
            }
        }
        /*  .then((response) => {
              console.log("authenticated seccessfully");
              localStorage.setItem("token", response.data.token)
              return response.data.user
          })

      return {
          user: user
      }*/

    } catch (err) {
        console.log(err.message);
    }
})

/*const sign_out = createAsyncThunk("sign_out", async () => {

    try {
       axios.post("http://localhost:3000/api/user/logout")
            .then((response) => {

                localStorage.removeItem("token");
                console.log(response)

            })

    } catch (err) {
        console.log(err.message);
    }
})*/

const sign_out = createAction("sign_out", () => {
    localStorage.removeItem('token')
    return {
        payload: null
    }
})


const getUsersAction = { sign_in, sign_up, authenticate, sign_out }

export default getUsersAction 