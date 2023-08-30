import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: null,
};
const jobUpdateSlice = createSlice({
    name: "update job",
    initialState,
    reducers:{
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        updateJob: (state, action) => {
            state.jobs = action.payload
        }
    }
})
export const {addJob, updateJob} = jobUpdateSlice.actions;
export default jobUpdateSlice.reducer;