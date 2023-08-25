import React, {useState, useContext} from 'react';
import { useFormik } from 'formik';
import { FormValidation } from './FormValidate';
import { Link, useNavigate} from 'react-router-dom';

const CreateJob = () => {

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
          email: '',
          password: '',
          name: ''
        },
        validationSchema: FormValidation,
        onSubmit: (values) => {
            console.log(values);
        },
    });
  return (
    <div className='w-4/12 mx-auto mt-4 bg-indigo-600 rounded-md'>
            <form onSubmit={handleSubmit} className=' py-8 w-4/5 mx-auto'>    
            <p className='text-3xl font-sans font-bold text-white leading-relaxed tracking-wide'>Create Job</p> 
            <p className='text-xs font-sans font-normal text-white leading-relaxed tracking-wide'>Please enter the job details below</p>    
            <br/>  
            <div className='relative mb-3'>
                <input
                    id="job_name"
                    name="job_name"
                    type="job_name"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Job Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.job_name}
                />
                <label htmlFor="job_name" className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>job_name</label> 
                {touched.job_name && errors.job_name ? ( <p className=' text-orange-400 font-semibold text-base font-sans'>{errors.job_name}</p> ) : null}
            </div>
            

            
            <div className='flex flex-row justify-center'>
                <button type="submit" className='border-solid border border-white rounded-sm font-sans text-sm font-semibold py-2 px-4 text-black bg-white text-center mt-4 w-1/3'>Create Job</button>
            </div>
            </form>
    </div>
  )
}

export default CreateJob;