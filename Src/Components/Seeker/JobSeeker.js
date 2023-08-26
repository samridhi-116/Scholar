import React, {useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserContext from '../../utils/userContext';

const JobSeeker = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='flex flex-row'>
      <div className=' w-1/6'>
        <Link to=':/all-jobs'>
          <p className='bg-orange-400 py-4 px-3 text-center text-base text-white font-medium my-1'>All Jobs</p>
        </Link>
        <Link to=':/applied-jobs'>
          <p className='bg-orange-400 py-4 px-3 text-center text-base text-white font-medium my-1'>Applied Jobs</p>
        </Link>
        <Link to=':/job-category'>
          <p className='bg-orange-400 py-4 px-3 text-center text-base text-white font-medium my-1'>Job Category</p>
        </Link>
      </div>
      <div className='w-full px-8'>
        <p className=' text-3xl text-orange-600 font-bold my-4'>Welcome {user?.name}! </p>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default JobSeeker;