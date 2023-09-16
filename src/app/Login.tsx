"use client";
import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from 'react-redux'
import { AppDispatch } from "@/redux/store";

const Login = () => {
    const [username, setUsername] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const onClickLogin = () => {
        dispatch(logIn(username))
    }

    const onClickLogout = () => {
        dispatch(logOut());
    }

  return (
    <div className="flex items-center flex-col">
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <div className="flex flex-col justify-start items-start mt-10">
            <button onClick={onClickLogin}>Log In</button>
            <button onClick={onClickLogout}>Log Out</button>
            <button onClick={() => dispatch(toggleModerator())}>Toggle Moderator Status</button>
        </div>
    </div>
  )
}

export default Login