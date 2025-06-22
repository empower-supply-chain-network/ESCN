import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Founder, Job, SuccessStory, Program } from '@/types'; // Added Program type
// Import the new data service function
import { getFounders, getJobs, getSuccessStories, getPrograms } from '@/services/dataService'; 

interface DataState {
  founders: Founder[];
  jobs: Job[];
  stories: SuccessStory[];
  programs: Program[]; // Added programs to the state
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  founders: [],
  jobs: [],
  stories: [],
  programs: [], // Initialize as an empty array
  status: 'idle',
  error: null,
};

// Async Thunks
export const fetchAllData = createAsyncThunk('data/fetchAll', async () => {
  // Fetch all four data types in parallel
  const [founders, jobs, stories, programs] = await Promise.all([
    getFounders(),
    getJobs(),
    getSuccessStories(),
    getPrograms(), // Fetch the programs
  ]);
  // Return all data in the payload
  return { founders, jobs, stories, programs };
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.founders = action.payload.founders;
        state.jobs = action.payload.jobs;
        state.stories = action.payload.stories;
        state.programs = action.payload.programs; // Store the fetched programs
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default dataSlice.reducer;