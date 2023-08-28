import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobByCategory = () => {
  const { id } = useParams();
  console.log(id);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobsByCategory = async () => {
      try {
        const response = await fetch(`http://scholarshiftapi.divasdoor.com/api/jobsbycategory?id=${id}`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs by category:', error);
      }
    };

    if (id) {
      fetchJobsByCategory();
    }
  }, []);

  return (
    <div>
      <h2>Jobs in Category {id}</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.job_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobByCategory;

