import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../../utils/userContext';
import { Link } from 'react-router-dom';
import JobDisplay from './JobDisplay';

const JobCreator = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://scholarshiftapi.divasdoor.com/api/getAllJob', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
         
        );
        const data = await response.json();
        setJobs(data?.data); // Set the fetched jobs data to the state
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const { user } = useContext(UserContext);
  return (
    <div className='mt-6 w-4/5 mx-auto'>
        <p className=' text-3xl text-orange-600 font-bold my-4'>Welcome {user?.name}! </p>

        <div className='flex flex-row justify-between items-center'>
          <h2 className=' mt-4 text-xl font-semibold font-sans text-indigo-500'>Your Job Post</h2>
          <Link to="/create-job">
            <button className='border-solid border border-indigo-500 rounded-sm font-sans text-sm font-semibold py-2 px-4 text-white bg-indigo-500 text-center mt-6'>
            Create Jobs</button>
          </Link>
        </div>
        <div className='flex flex-row justify-between flex-wrap my-4'>
          {jobs?.map((job) => (
            <JobDisplay key={job.id} job={job} />
          ))}
        </div>
        
    </div>
  )
}
export default JobCreator;