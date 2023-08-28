import React, {useState, useEffect} from 'react';
import JobCard from './JobCard';
import useJobsSearch from '../../utils/useJobsSearch';

const AllJobs = () => {
  const { allJobs, filteredJobs, searchInput, setSearchInput, filterJobs} = useJobsSearch('http://scholarshiftapi.divasdoor.com/api/getAllJob');
  console.log('searchInput:', searchInput);
  console.log('allJobs:', allJobs);
  console.log('filteredJobs:', filteredJobs);
  return (
    <div>
        <div className="flex flex-row my-4 w-1/2 mx-auto">
          <input 
            type="text"
            placeholder="Search Jobs"
            className="flex-1 border-solid border border-orange-400 rounded-l-lg font-sans text-base py-2 px-4 text-slate-400"
            value= {searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <span>
            <button className="border-solid border border-orange-400 rounded-r-lg font-sans text-base py-2 px-4 text-white bg-orange-400 text-center"
            onClick={() => filterJobs(searchInput)}  
            >Search</button>
          </span>   
        </div>
      <div className='flex flex-row justify-start flex-wrap my-4'>
          {filteredJobs?.map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </div>
    </div>
  )
}
export default AllJobs;