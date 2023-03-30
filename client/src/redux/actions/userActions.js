import axios from "axios";
import { message } from "antd";

export const registeredUser = (values) => async (dispatch) => {

    dispatch({ type: "LOADING", payload: true });
    try {
        await axios.post("/api/users/register", values);
        message.success("You're registered successfully🙂");
        setTimeout(() => {
            window.location.href = "/login";
        }, 4000);
        dispatch({ type: "LOADING", payload: false });
    }
    catch (err) {
        message.error("Something went wrong, please try again🥹");
        dispatch({ type: "LOADING", payload: false });
    }
};

export const loginUser = (values) => async (dispatch) => {

    dispatch({ type: "LOADING", payload: true });
    try {
        const user = await axios.post("/api/users/login", values);
        message.success("Logged-in successfully🤘, Redirecting to portal...");
        localStorage.setItem("user", JSON.stringify(user.data));
        setTimeout(() => {
            window.location.href = "/";
        }, 4000);
        dispatch({ type: "LOADING", payload: false });
    }
    catch (err) {
        message.error("Invalid credentials, give it another try💪");
        dispatch({ type: "LOADING", payload: false });
    }
};

export const updateUser = (values) => async (dispatch) => {

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    values._id = userId;
    dispatch({ type: "LOADING", payload: true });
    try {
        const user = await axios.post("/api/users/update", values);
        message.success("User updated successfully🤘, Redirecting...");
        localStorage.setItem("user", JSON.stringify(user.data));
        setTimeout(() => {
            window.location.reload();
        }, 4000);
        dispatch({ type: "LOADING", payload: false });
    }
    catch (err) {
        message.error("Something went wrong, please try again🥹");
        dispatch({ type: "LOADING", payload: false });
    }
};

export const getAllUsers = () => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })

    try {
        const response = await axios.get('/api/users/getallusers');
        dispatch({ type: 'GET_ALL_USERS', payload: response.data });
        dispatch({ type: 'LOADING', payload: false });
    }
    catch (error) {
        console.log(error);
        dispatch({ type: 'LOADING', payload: true });
    }

}