import {createContext} from 'react';

const updateJobContext = createContext({
    updateJob: {
        job_name:null,
        job_description: null,
        job_payment_cycle: null,
        job_amountL: null,
        job_category_id:null,
        is_active:null
    }
})

export default updateJobContext;