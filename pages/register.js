
import Head from "next/head"
import Layout2 from "../layout/register_lay"
import style from "../styles/form.module.css"
import {useState} from "react";
import { useFormik } from "formik"

import { HiAtSymbol,HiFingerPrint,HiOutlineUser } from "react-icons/hi";
import {signupValidate} from "../lib/validate"

export default function register(){

    const[show,setShow] = useState(false)
    const[show1,setShow1] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            cpassword: ""
        },

        validate: signupValidate,

        onSubmit: (values) => {
            console.log(values);
        },
    })


    return(
        <Layout2>
            <Head>
                <title>Register</title>
            </Head>
            <div className="absolute flex top-4 left-5">
                <p className="text-signgreen font-semibold">Vendor</p>
                <p className="font-bold">Co.</p>
            </div>
            <div className="text-3xl font-semibold text-signgreen">Sign up with Account</div>
            <div className="border-2 w-10 rounded mt-3 border-signgreen inline-block mb-4"></div>

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-7 justify-center mt-4">
                <div className={style.input_group}>
                    <input
                        type="text"
                        name="username"
                        placeholder="  Username"
                        className={style.input_textbox}
                        {...formik.getFieldProps('username')}
                    />
                    <span className="relative top-3 right-9">
                        <HiOutlineUser size={20}/>
                    </span>
                    {formik.errors.username && formik.touched.username?<span className="absolute top-[255px] left-[190px] text-red-400">{formik.errors.username}</span>:<></>}
                </div>
                <div className={style.input_group}>
                    <input
                        type="email"
                        name="email"
                        placeholder="  Email"
                        className={style.input_textbox}
                        {...formik.getFieldProps('email')}
                    />
                    <span className="relative top-3 right-9">
                        <HiAtSymbol size={20}/>
                    </span>
                    {formik.errors.email && formik.touched.email?<span className="absolute top-[325px] left-[190px] text-red-400">{formik.errors.email}</span>:<></>}
                </div>
                <div className={style.input_group}>
                    <input
                        type={`${show?"text":"password"}`}
                        name="password"
                        placeholder="  Password"
                        className={style.input_textbox}
                        {...formik.getFieldProps('password')}
                    />
                    <span className="relative top-3 right-9" onClick={()=> setShow(!show)}>
                        <HiFingerPrint size={20}/>
                    </span>
                    {formik.errors.password && formik.touched.password?<span className="absolute top-[395px] left-[190px] text-red-400">{formik.errors.password}</span>:<></>}
                </div>
                <div className={style.input_group}>
                    <input
                        type={`${show1?"text":"password"}`}
                        name="cpassword"
                        placeholder="  Confirm Password"
                        className={style.input_textbox}
                        {...formik.getFieldProps('cpassword')}
                    />
                    <span className="relative top-3 right-9" onClick={()=> setShow1(!show1)}>
                        <HiFingerPrint size={20}/>
                    </span>
                    {formik.errors.cpassword && formik.touched.cpassword?<span className="absolute top-[465px] left-[190px] text-red-400">{formik.errors.cpassword}</span>:<></>}
                </div>
                {/* button */}

                <div className={style.input_group}>
                    <button type="submit" className={style.button}>
                        <p>Register</p>
                    </button>
                </div>
                
            </form>
        </Layout2>
    )
}