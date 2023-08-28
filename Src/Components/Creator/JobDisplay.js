import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import updateJobContext from '../../utils/updateJobContext';

const JobDisplay = ({ job }) => {
  const { updateJob, setUpdateJob } = useContext(updateJobContext);

  return (
    <div className=' w-[23%] border-solid border border-gray-600 p-4 my-4 mr-5'>
      <p className=' text-xl font-sans font-semibold leading-relaxed'>{job.job_name}</p>
      <p className='text-sm font-sans font-medium text-gray-700 leading-relaxed whitespace-nowrap text-ellipsis overflow-hidden w-full'>{job.job_description}</p>
      <p className='text-sm font-sans font-normal text-gray-500 leading-relaxed'>Payment Cycle: {job.job_payment_cycle}</p>
      <p className='text-sm font-sans font-normal text-gray-500 leading-relaxed'>CTC: {job.job_amount}</p>
      
      <Link to="/update-job">
        <button onClick={()=>{
          setUpdateJob(job);
        }}

        className='border-solid border-2 border-orange-400 rounded-sm font-sans text-xs font-semibold bg-orange-400 py-2 px-4 text-white text-center hover:bg-transparent hover:text-orange-500 mt-2'>Update Job</button>
      </Link>
    </div>
  )
}

export default JobDisplay;