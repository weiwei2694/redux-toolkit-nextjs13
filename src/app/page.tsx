"use client";

import { useAppSelector } from '@/redux/store';
import Login from './Login'

export default function Home() {
  const username = useAppSelector(state => state.authReducer.value.username);
  const isModerator = useAppSelector(state => state.authReducer.value.isModerator)

  return (
    <div>
      <Login />

      <h1 className='text-center'>Username: {username}</h1>
      {isModerator && <h1>This User Is A Moderator</h1>}
    </div>
  )
}
