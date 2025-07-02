// MOCK DATA SERVICE
// This simulates fetching data from a Firestore database.

import { Founder, Job, SuccessStory, Program, MemberBenefit, SponsorshipTier, PastEvent } from '@/types';
// Import the new mock data arrays
import { mockFounders, mockJobs, mockSuccessStories, mockPrograms, mockMemberBenefits, mockSponsorshipTiers } from '@/data/mockData';

import { mockPastEvents } from '@/data/mockData'; // Add new import

const simulateNetworkDelay = <T>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500); // 500ms delay
  });
};

export const getFounders = (): Promise<Founder[]> => {
  return simulateNetworkDelay(mockFounders);
};

export const getJobs = (): Promise<Job[]> => {
  return simulateNetworkDelay(mockJobs);
};

export const getSuccessStories = (): Promise<SuccessStory[]> => {
  return simulateNetworkDelay(mockSuccessStories);
};

export const getPrograms = (): Promise<Program[]> => {
    return simulateNetworkDelay(mockPrograms);
};

// NEW: Add these two functions
export const getMemberBenefits = (): Promise<MemberBenefit[]> => {
  return simulateNetworkDelay(mockMemberBenefits);
};

export const getSponsorshipTiers = (): Promise<SponsorshipTier[]> => {
  return simulateNetworkDelay(mockSponsorshipTiers);
};

export const getPastEvents = (): Promise<PastEvent[]> => {
  return simulateNetworkDelay(mockPastEvents);
};