import React from 'react'

const AppliedJobCard = ({ appliedJob }) => {
  return (
    <div>
        <p className='text-xs font-sans font-normal text-gray-500 leading-relaxed'>
            {appliedJob?.applicant}
        </p>
        <p className='text-xs font-sans font-normal text-gray-500 leading-relaxed'>
            {appliedJob?.job_id}
        </p>
        <p className=' text-xl font-sans font-semibold leading-relaxed'>{appliedJob?.job?.job_name}</p>
        <p className='text-sm font-sans font-medium text-gray-700 leading-relaxed whitespace-nowrap text-ellipsis overflow-hidden w-full'>{appliedJob?.job?.job_description}</p>
        <p className='text-sm font-sans font-normal text-gray-500 leading-relaxed'>
            Payment Cycle: 
        {appliedJob?.job?.job_payment_cycle}</p>
        <p className='text-sm font-sans font-normal text-gray-500 leading-relaxed'>
            CTC: {appliedJob?.job?.job_amount}</p>
    </div>
  )
}

export default AppliedJobCard;