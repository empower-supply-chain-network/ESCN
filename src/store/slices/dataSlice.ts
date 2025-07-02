import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Founder, Job, SuccessStory, Program, MemberBenefit, SponsorshipTier } from '@/types';
import { getFounders, getJobs, getSuccessStories, getPrograms, getMemberBenefits, getSponsorshipTiers } from '@/services/dataService';
import { PastEvent } from '@/types'; // Add new type
import { getPastEvents } from '@/services/dataService'; // Add new service function


interface DataState {
  founders: Founder[];
  jobs: Job[];
  stories: SuccessStory[];
  programs: Program[];
  memberBenefits: MemberBenefit[];
  sponsorshipTiers: SponsorshipTier[];
  pastEvents: PastEvent[]; // NEW
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  founders: [],
  jobs: [],
  stories: [],
  programs: [],
  memberBenefits: [],
  sponsorshipTiers: [],
  pastEvents: [], // NEW
  status: 'idle',
  error: null,
};

export const fetchAllData = createAsyncThunk('data/fetchAll', async () => {
  const [founders, jobs, stories, programs, memberBenefits, sponsorshipTiers, pastEvents] = await Promise.all([
    getFounders(),
    getJobs(),
    getSuccessStories(),
    getPrograms(),
    getMemberBenefits(),
    getSponsorshipTiers(),
    getPastEvents(), // NEW
  ]);
  return { founders, jobs, stories, programs, memberBenefits, sponsorshipTiers, pastEvents };
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
        state.programs = action.payload.programs;
        state.memberBenefits = action.payload.memberBenefits;
        state.sponsorshipTiers = action.payload.sponsorshipTiers;
        state.pastEvents = action.payload.pastEvents; // NEW
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default dataSlice.reducer;