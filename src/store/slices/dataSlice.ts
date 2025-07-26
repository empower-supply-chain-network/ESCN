import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Founder, Job, SuccessStory, Program, MemberBenefit, SponsorshipTier,WhySponsorBenefit, SponsorshipBenefit, Partner } from '@/types';
import { getFounders, getJobs, getSuccessStories, getPrograms, getMemberBenefits, getSponsorshipTiers,getWhySponsorBenefits, getSponsorshipBenefits, getPartners  } from '@/services/dataService';
import { PastEvent } from '@/types'; // Add new type
import { getPastEvents } from '@/services/dataService'; // Add new service function


interface DataState {
  founders: Founder[];
  jobs: Job[];
  stories: SuccessStory[];
  programs: Program[];
  memberBenefits: MemberBenefit[];
  sponsorshipTiers: SponsorshipTier[];
  pastEvents: PastEvent[]; 
  whySponsorBenefits: WhySponsorBenefit[]; // NEW
  sponsorshipBenefits: SponsorshipBenefit[]; // NEW
  partners: Partner[]; // // NEW
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
  pastEvents: [], //
  whySponsorBenefits: [], // NEW
  sponsorshipBenefits: [], // NEW
  partners: [], // NEW NEW
  status: 'idle',
  error: null,
};

export const fetchAllData = createAsyncThunk('data/fetchAll', async () => {
  const [founders, jobs, stories, programs, memberBenefits, sponsorshipTiers, pastEvents,whySponsorBenefits, sponsorshipBenefits, partners] = await Promise.all([
    getFounders(),
    getJobs(),
    getSuccessStories(),
    getPrograms(),
    getMemberBenefits(),
    getSponsorshipTiers(),
    getPastEvents(),
    getPastEvents(),
    getWhySponsorBenefits(), // NEW
    getSponsorshipBenefits(), // NEW
    getPartners(),  // NEW
  ]);
  return { founders, jobs, stories, programs, memberBenefits, sponsorshipTiers, pastEvents,whySponsorBenefits, sponsorshipBenefits, partners };
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
        state.pastEvents = action.payload.pastEvents; 
        state.whySponsorBenefits = action.payload.whySponsorBenefits; // NEW
        state.sponsorshipBenefits = action.payload.sponsorshipBenefits; // NEW
        state.partners = action.payload.partners;// NEW
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default dataSlice.reducer;