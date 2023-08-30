import React, {useState } from 'react';
import { useFormik } from 'formik';
import { FormValidation } from '../Register/FormValidate';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../utils/userSlice';

const Login = () =>{
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);
    console.log(user);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validationSchema: FormValidation,
        onSubmit: async (values) => {
            try {
              const response = await fetch('http://scholarshiftapi.divasdoor.com/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
              });
      
              if (response.ok) {
                const responseData = await response.json();
                const token = responseData.token;
                localStorage.setItem('token', token);
                dispatch(login(responseData.data));


                if (responseData.data.user_type === 1) {
                    navigate('/job-seeker');
                } else if (responseData.data.user_type === 2) {
                    navigate('/job-creator');
                }
              } else {
                setLoginError(true);
              }
            } catch (error) {
              console.error('Error:', error);
            }
        },
        
    });
    return(
        <div className='w-4/12 mx-auto mt-4 bg-indigo-600 rounded-md'>
            <form onSubmit={handleSubmit} className=' py-8 w-4/5 mx-auto'>    
            <p className='text-3xl font-sans font-bold text-orange-400 leading-relaxed tracking-wide'>Welcome Back!</p> 
            <p className='text-xs font-sans font-normal text-white leading-relaxed tracking-wide'>Please Login to your account</p>    
            <br/>  
            <div className='relative mb-3'>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.email}
                />
                <label htmlFor="email" className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>Email</label> 
                {touched.email && errors.email ? ( <p className=' text-orange-400 font-semibold text-base font-sans'>{errors.email}</p> ) : null}
            </div>
            <div className="relative mb-3">              
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.password}
                />
                <label htmlFor="password" 
                className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>Password</label> 

                {touched.password && errors.password ? ( 
                <p className='text-orange-400 font-semibold text-base font-sans'>{errors.password}</p> ) : null}
            </div>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-white text-xs font-sans'>New here?<Link to="/signup"> Sign up</Link></p>
                <p className='text-white text-xs font-sans'><Link>Forgot Password?</Link></p>
            </div>
            <div className='flex flex-row justify-center'>
              <button type="submit" 
              className='border-solid border border-orange-600 rounded-sm font-sans text-sm font-semibold py-2 px-4 text-white bg-orange-600 text-center mt-4 w-1/3'>Login</button>
            </div>
            </form>
        </div>
); 
}

export default Login;