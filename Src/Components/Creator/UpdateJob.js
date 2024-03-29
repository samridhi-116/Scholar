import React, {useState} from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UpdateJob = () => {
    const navigate = useNavigate();
    const job = useSelector(state => state.jobs.jobs)
    console.log(job);

    const [jobDetails, setJobDetails] = useState({
        job_name: job?.job_name,
        job_description: job?.job_description,
        job_payment_cycle: job?.job_payment_cycle,
        job_amount: job?.job_amount,
        job_category_id: job?.job_category_id,
        is_active: job?.is_active
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit: formikSubmit } = useFormik({
        initialValues: jobDetails,
        onSubmit: async (values) => {
            try {
                const apiUrl = `http://scholarshiftapi.divasdoor.com/api/updateJob?id=${job.id}`;
                console.log(apiUrl);
                const token = localStorage.getItem('token');
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: job.id,
                        job_name: values.job_name,
                        job_description: values.job_description,
                        job_payment_cycle: values.job_payment_cycle,
                        job_amount: values.job_amount
                    })
                });
                const responseData = await response.json();
                console.log(responseData);
            } catch (error) {
                console.error('Error updating job:', error);
            }
            navigate('/job-creator');
        },
    });
  return (
    <div className='w-4/12 mx-auto mt-4 bg-indigo-600 rounded-md'>
            <form onSubmit={formikSubmit} className=' py-8 w-4/5 mx-auto'>    
            <p className='text-3xl font-sans font-bold text-orange-400 leading-relaxed tracking-wide'>Update Job</p> 
            <p className='text-xs font-sans font-normal text-white leading-relaxed tracking-wide'>Please update the job profile below</p>    
            <br/>  
            <div className='relative mb-3'>
                <input
                    id="job_name"
                    name="job_name"
                    type="text"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Job Title'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.job_name}
                />
                <label 
                    htmlFor="job_name" 
                    className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                        Job Title
                </label> 
                {touched.job_name && errors.job_name ? 
                ( <p className=' text-orange-400 font-semibold text-base font-sans'>
                    {errors.job_name}</p> ) : null}
            </div>
            <div className='relative mb-3'>
                <input
                    id="job_description"
                    name="job_description"
                    type="text"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Job Description'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.job_description}
                />
                <label 
                    htmlFor="job_description" 
                    className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                    Job Description
                </label> 

                {touched.job_description && errors.job_description ? ( <p className=' text-orange-400 font-semibold text-base font-sans'>{errors.job_description}</p> ) : null}
            </div>
            <div className='relative mb-3'>
                <input
                    id="job_payment_cycle"
                    name="job_payment_cycle"
                    type="text"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Job Payment Cycle'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.job_payment_cycle}
                />
                <label 
                    htmlFor="job_payment_cycle" 
                    className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                        Job Payment Cycle
                </label> 
                
                {touched.job_payment_cycle && errors.job_payment_cycle ? 
                ( <p className=' text-orange-400 font-semibold text-base font-sans'>{errors.job_payment_cycle}</p> ) : null}
            </div>
            <div className='relative mb-3'>
                <input
                    id="job_amount"
                    name="job_amount"
                    type="text"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Job Amount'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.job_amount}
                />
                <label 
                    htmlFor="job_amount" 
                    className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                        Job Amount
                </label> 
                {touched.job_amount && errors.job_amount ? 
                    ( <p className=' text-orange-400 font-semibold text-base font-sans'>
                        {errors.job_amount}</p> ) : null}
            </div>
            <div className='relative mb-3'>
                <input
                    id="job_category_id"
                    name="job_category_id"
                    type="text"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Job Category Id'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.job_category_id}
                />
                <label 
                    htmlFor="job_category_id" 
                    className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                        Job Category Id
                </label> 
                {touched.job_category_id && errors.job_category_id ? 
                    ( <p className=' text-orange-400 font-semibold text-base font-sans'>
                        {errors.job_category_id}</p> ) : null}
            </div>
            <div className='relative mb-3'>
                <input
                    id="is_active"
                    name="is_active"
                    type="text"
                    className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-4 text-base leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-300 focus:outline-none peer-focus:text-primary dark:border-neutral-100 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    placeholder='Is Job Active'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.is_active}
                />
                <label 
                    htmlFor="is_active" 
                    className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                        Is Job Active
                </label> 
                {touched.is_active && errors.is_active ? 
                    ( <p className=' text-orange-400 font-semibold text-base font-sans'>
                        {errors.is_active}</p> ) : null}
            </div>
            <div className='flex flex-row justify-center'>
                <button type="submit" className='border-solid border border-orange-400 rounded-sm font-sans text-sm font-semibold py-2 px-4 text-white bg-orange-400 text-center mt-4 w-1/3'>Update Job</button>
            </div>

           
            </form>
    </div>
    
  )
}

export default UpdateJob;