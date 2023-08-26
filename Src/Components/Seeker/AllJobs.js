import React, {useState, useEffect} from 'react';
import JobCard from './JobCard';

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem('token');
      let response = await fetch('http://scholarshiftapi.divasdoor.com/api/getAllJob',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 
                `Bearer ${token}`  
        }});
        let result = await response.json()
        setJobs(result.data);
        console.log(result);  
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <div className='flex flex-row justify-start flex-wrap my-4'>
          {jobs?.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
    </div>

  )
}

export default AllJobs;