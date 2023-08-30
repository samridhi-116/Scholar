export function filterData(searchInput, jobs) {
    const filterJobs = jobs?.filter((job) =>
      (typeof job?.job_name === 'string' && job?.job_name.includes(searchInput)) || 
      (typeof job?.job_amount == 'string' && job?.job_amount.includes(searchInput)) || 
      (typeof job?.job_payment_cycle == 'string' && job?.job_payment_cycle.includes(searchInput)) || 
      (typeof job?.job_category_id == 'string' && job?.job_category_id.includes(searchInput))
    );
    return filterJobs;
  }
 