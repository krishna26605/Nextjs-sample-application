import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useSession , signIn , signOut} from 'next-auth/react'


import NarutoImage from '../public/11229.jpg'

export default function Home() {

  const session = useSession();

  console.log("SESSION", session)

  if(session.data == null){
    return (
      <>

      <button onClick={signIn}>Login</button>

      
      </>
      
    )
  }


  return (
    <div className={styles.container}>
      <h1>Hello {session?.data?.user?.name} && Your email is {session?.data?.user?.email}</h1>
      <button onClick={signOut}>Logout</button>

    </div>
  )
}
