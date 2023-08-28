import { useState, useEffect } from 'react';
import { filterData } from "../utils/helper"; 

function useJobsSearch(jobsInfo) {
  const [searchInput, setSearchInput] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
    
  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem('token');
      let response = await fetch(jobsInfo ,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 
                `Bearer ${token}`  
        }});
        let result = await response.json();
        setAllJobs(result?.data);
        setFilteredJobs(result?.data);
        console.log(result);  
    };
    fetchJobs();
  }, []);

  const filterJobs = (input) => {
    const data = filterData(input, allJobs);
    setFilteredJobs(data);
  };

  return {
    allJobs,
    filteredJobs,
    searchInput,
    setSearchInput,
    filterJobs,
  };
}

export default useJobsSearch;
