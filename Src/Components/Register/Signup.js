import React from 'react';
import { useFormik } from 'formik';
import { FormValidation } from '../Register/FormValidate';
import { Link } from 'react-router-dom';

const Signup = () =>{

    const dropdownOptions = [
        { value: '1', label: 'Job Seeker' },
        { value: '2', label: 'Job Creator' },
    ];
    const { values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
          name: '',
          email: '',
          password:'',
          user_type: '',
        },
        validationSchema: FormValidation,
        onSubmit:(values)=> {
            console.log(values);
        },
    });
    return(
        <div className='w-4/12 mx-auto mt-4 bg-indigo-600 rounded-md'>
            <form onSubmit={handleSubmit} className=' py-8 w-4/5 mx-auto'>    
            <p className='text-3xl font-sans font-bold text-white leading-relaxed tracking-wide'>Create an Account</p> 
            <p className='text-xs font-sans font-normal text-gray-300 leading-relaxed tracking-wide'>Unlock a world of opportunities for job seekers <br/> and employers alike.</p>    
            <br/> 
            <div className='relative mb-3'>
                <input
                    id="name"
                    name="name"
                    type='text'
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.name}
                />
                <label htmlFor="name" className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>Name</label> 
                {touched.name && errors.name ? ( <p className=' text-orange-400 font-semibold text-base font-sans'>{errors.name}</p> ) : null}
            </div> 
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

                {touched.password && errors.password ? ( <p className='text-orange-400 font-semibold text-base font-sans'>{errors.password}</p> ) : null}
            </div>
            <div className='relative mb-3'>
                <label
                    htmlFor='user_type'
                    className='block font-medium text-gray-300'
                > Select user type</label>
                <select
                    id='user_type'
                    name='user_type'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user_type}
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                >
                    <option value='' label='Select user type' />
                    {dropdownOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
                {touched.user_type && errors.user_type ? ( <p className='text-orange-400 font-semibold text-base font-sans'>{errors.user_type}</p> ) : null}
            </div>
            <p className='text-white text-xs font-sans'>Already have an account?<Link to="/login"> Login</Link></p>
            
            <div className='flex flex-row justify-center'>
                <button type="submit" className='border-solid border border-white rounded-sm font-sans text-sm font-semibold py-2 px-4 text-black bg-white text-center mt-4 w-1/3'>Sign up</button>
            </div>
            </form>
        </div>
        
); 
}

export default Signup;