'use client'
import React, {FC, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import { styles } from '../../../app/styles/style';

type Props = {
    setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please enter your email!"),
    password: Yup.string().required("Please enter your password").min(8),
})

const Login: FC<Props> = (props: Props) => {
    const [show, setShow] = useState(false);

    const formik = useFormik({
        initialValues: {email: "", password:""},
        validationSchema: schema,
        onSubmit: async({email, password}) => {
            console.log(email, password);
        }
    });

    const { errors, touched, values, handleChange, handleSubmit} = formik;
  return (
    <div className='w-full'>
        <h1 className={`${styles.title}`} >
            Login with Code Therapist
        </h1>
        <form onSubmit={handleSubmit}>
            <label
                className={`${styles.label}`} 
                htmlFor="email"
            >  
                Enter your Email
            </label>
            <input 
                type="email" 
                name=""
                value={values.email}
                onChange={handleChange}
                id="email"
                placeholder='login@mail.com'
                className={`${
                    errors.email && touched.email && "border-red-500"
                } ${styles.input}`}
            />
            {errors.email && touched.email && (
                <span className='text-red-500 pt-2 block'>{errors.email}</span>
            )}
            <div className="w-full mt-5 relative mb-1">
            <label
                className={`${styles.label}`} 
                htmlFor="password"
            >  
                Enter your Password
            </label>
            <input 
                type={!show ? "password" : "text" }
                name="password"
                value={values.password}
                onChange={handleChange}
                id='password'
                placeholder='p@ssword!%'
                className={`${
                    errors.password && touched.password && "border-red-500"
                } ${styles.input}`}
            />
        
            </div>
        </form>
    </div>
  )
}

export default Login