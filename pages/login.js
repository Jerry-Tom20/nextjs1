
import Head from "next/head"

import Layout1 from "../layout/login_lay"
import style from "../styles/form.module.css"
import Image from"next/image"
import { HiAtSymbol,HiFingerPrint } from "react-icons/hi"
import {useState} from "react"
import {signIn, signOut} from "next-auth/react"
import { useFormik } from "formik"
import login_validate from "../lib/validate"
import connectMongo from "../database/conn"

export default function login(){

    const[show,setShow] = useState(false)

    const formik = useFormik({

        initialValues: {
            email:"",
            password:""
        },

        validate: login_validate,

        onSubmit:submit

    })


    async function submit(values){
        console.log(values)
    }
    

    

    async function handleGoogleSignin(){
        signIn('google', { callbackUrl:'http://localhost:3000'})
    }
    

    return(
        <Layout1>
            <Head>
                <title>Login</title>
            </Head>
            <div className="absolute flex top-4 right-5">
                <p className="text-signgreen font-semibold">Vendor</p>
                <p className="font-bold">Co.</p>
            </div>
            <div className="text-3xl font-semibold text-signgreen">Sign in to Account</div>
            <div className="border-2 w-10 rounded mt-1 border-signgreen inline-block mb-4"></div>
            {/* form */}
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8 justify-center mt-4">
                <div className={style.input_group}>
                    <input
                        id="email"
                        type="email"
                        placeholder="  Email"
                        className={style.input_textbox}
                        {...formik.getFieldProps('email')}
                    />
                    <span className="relative top-3 right-9">
                        <HiAtSymbol size={20}/>
                    </span>
                    {formik.errors.email && formik.touched.email?<span className="absolute top-[246px] left-[570px] text-red-400">{formik.errors.email}</span>:<></>}
                    {/* 256px */}
                </div>
                <div className={style.input_group}>
                    <input
                        type={`${show?"text":"password"}`}
                        id="password"
                        
                        placeholder="  Password"
                        className={style.input_textbox}
                        {...formik.getFieldProps('password')}
                    />
                    <span className="relative top-3 right-9" onClick={()=> setShow(!show)}>
                        <HiFingerPrint size={20}/>
                    </span>
                    {formik.errors.password && formik.touched.password?<span className="absolute bottom-[310px] left-[570px] text-red-400">{formik.errors.password}</span>:<></>}
                </div>
                {/* 320px */}
                {/* button */}

                <div className={style.input_group}>
                    <button type="submit" className={style.button}>
                        <p>Login</p>
                    </button>
                </div>
                <div className={style.input_group}>
                    <button type="button" onClick={handleGoogleSignin} className={style.button_custom}>
                        <div className="flex relative left-20">Sign in with Google <Image className="relative left-3" src={"/assets/google.svg"} alt="google" height={20} width={20}></Image></div>
                    </button>
                </div>

                <div className="relative bottom-5">

                    <div className={style.input_group}>
                        <button type="button" className={style.button_custom}>
                            <div className="flex relative left-20">Sign in with Github <Image className="relative left-3" src={"/assets/github.svg"} alt="github" height={20} width={20}></Image></div>
                        
                     </button>
                    </div>

                </div>
                
                    

            </form>
        </Layout1>
    )
}


