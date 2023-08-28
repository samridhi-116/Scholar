import React, {useContext} from 'react';
import UserContext from '../../utils/userContext';

const JobCard = ({job}) => {
    const { job_name, job_description, job_amount, id, job_payment_cycle } = job;
    const { user } = useContext(UserContext);
    const ApplyJob = async(job_id)=>{
        const data={
            'job_id':job_id,
            'applicant':user.id
        }
        console.log(data);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://scholarshiftapi.divasdoor.com/api/jobapplication', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 
                    `Bearer ${token}`  
              },
              body: JSON.stringify(data)
            }); 
            if (response.ok) {
                const responseData = await response.json()
                console.log(responseData);
                alert(responseData.message);
            }              
        } catch (error) {
            console.error('Error:', error);
        }
      }  

  return (
    <div className='w-[23%] border-solid border border-gray-600 p-4 my-4 mr-4'>
      <p className='text-xl font-sans font-semibold leading-relaxed whitespace-nowrap text-ellipsis overflow-hidden w-full'>{job_name}</p>
      <p className='text-sm font-sans font-medium text-gray-700 leading-relaxed whitespace-nowrap text-ellipsis overflow-hidden w-full'>{job_description}</p>
      <p className='text-sm font-sans font-normal text-gray-500 leading-relaxed'>Payment Cycle: {job_payment_cycle}</p>
      <p className='text-sm font-sans font-normal text-gray-500 leading-relaxed'>CTC: {job_amount}</p>
    
    <button 
        onClick={()=>ApplyJob(id)}
        className='border-solid border-2 border-orange-400 rounded-sm font-sans text-xs font-semibold bg-orange-400 py-2 px-4 text-white text-center hover:bg-transparent hover:text-orange-500 mt-2'>
        Apply Job</button>
    </div>
  )
}

export default JobCard;