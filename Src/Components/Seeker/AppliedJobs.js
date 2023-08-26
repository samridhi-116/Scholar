import React, { useState, useEffect } from 'react';
import AppliedJobCard from './AppliedJobCard';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  async function appliedjobs(){
    const token = localStorage.getItem('token');
    const appliedJobsData = await fetch('http://scholarshiftapi.divasdoor.com/api/jobseekers', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 
            `Bearer ${token}`  
      }
    });
    if (!appliedJobsData.ok) {
      console.error('Failed to fetch applied jobs:', appliedJobsData.statusText);
      return;
    }
  
    try {
      const json = await appliedJobsData.json();
      setAppliedJobs(json.data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
  
  useEffect(()=>{
    appliedjobs();
  },[])

  

  return (
    <div className='flex flex-row justify-start flex-wrap my-4'>
          {appliedJobs?.map((appliedJob) => (
            <AppliedJobCard key={appliedJob.id} appliedJob={appliedJob} />
          ))}
    </div>
  )
}

export default AppliedJobs;