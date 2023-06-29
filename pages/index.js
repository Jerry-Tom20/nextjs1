import Image from 'next/image'
import Head from 'next/head'
import style from "../styles/form.module.css"
import { useState } from 'react'
import {getSession,useSession,signOut} from "next-auth/react"
import { BiUserPlus } from "react-icons/bi"
import Table from '../components/table'
import AddUserForm from '../components/addUserForm'



export default function Home() {

  

  const{data:session} = useSession()

  function handleSignOut(){
    signOut()
  }

  return (
    <div>

      <Head>
        <title>Home Page</title>
      </Head>

      {session ? authUser({session, handleSignOut}): Guest()}
    </div>
    
  )
}


//Guest

function Guest(){
  return(
    <main className='container mx-auto text-center py-20'>

      <h3 className='text-4xl font-bold'>Guest Homepage</h3>

      <div className='flex justify-center'>
        <a href={'/login'} className='mt-5 px-10 py-1 rounded-sm bg-signgreen text-midnight'>Sign In</a>
      </div>
    </main>
  )
}



//Authorised user

function authUser({session, handleSignOut}){
  const[visible, setVisible] = useState(false)


  const  handler = () =>{
    setVisible(visible?false:true)
  }
  return(
    <main>
      

      <div className='container mx-auto text-center py-4'>
        <h3 className='text-4xl font-bold'>Authorized User Homepage</h3>

        <div className='deatils my-5'>
          <h1 className='font-bold'>{session.user.name}</h1>
          <h1 className='mb-2'>{session.user.email}</h1>
        </div>

        <div className='flex mt-1 justify-center gap-12'>
          <div className=''>
            <button onClick={handleSignOut} className='bg-signgreen text-white px-4 py-2 rounded hover:bg-emerald-800 hover:text-slate-50'>Sign Out</button>
          </div>
          <div className='mt-[8px]'>
            <a href={'/profile'} className='bg-signgreen text-white px-5 py-2 rounded hover:bg-emerald-800 hover:text-slate-50'>Profile</a>
          </div>
        </div>
      </div>


      

      <div className='container mx-auto flex flex-col justify-between py-4 border-b'>
        <h1 className='text-4xl'>Vendor Management</h1>
        <div className='left mt-1 flex gap-3'>
          <button onClick={handler} className='flex bg-signgreen text-white px-4 py-2 rounded hover:bg-emerald-800 hover:text-slate-50'>
            Add Vendor <span className='pl-2'><BiUserPlus size={23}></BiUserPlus></span>
          </button>
        </div>
      </div>

      {/* Collapsable form */}

      <div className='container mx-auto'>
        {visible?<AddUserForm />:<></>}
      </div>
      




      {/* Table */}
      <div className='container mx-auto'>
        <Table></Table>
      </div>
      





    </main>
  )
}

export async function getServerSideProps({req}){
  const session = await getSession({req})

  if(!session){
    return {
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }
  return{
    props:{session}
  }


}






