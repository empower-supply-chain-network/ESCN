// MOCK DATA SERVICE
// This simulates fetching data from a Firestore database.

import { Founder, Job, SuccessStory, Program, MemberBenefit, SponsorshipTier, PastEvent, WhySponsorBenefit, SponsorshipBenefit, Partner } from '@/types';
import { mockFounders, mockJobs, mockSuccessStories, mockPrograms, mockMemberBenefits, mockSponsorshipTiers, mockPastEvents, mockWhySponsorBenefits, mockSponsorshipBenefits, mockPartners } from '@/data/mockData';

const simulateNetworkDelay = <T>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 100); // 500ms delay
  });
};

export const getFounders = (): Promise<Founder[]> => simulateNetworkDelay(mockFounders);
export const getJobs = (): Promise<Job[]> => simulateNetworkDelay(mockJobs);
export const getSuccessStories = (): Promise<SuccessStory[]> => simulateNetworkDelay(mockSuccessStories);
export const getPrograms = (): Promise<Program[]> => simulateNetworkDelay(mockPrograms);
export const getMemberBenefits = (): Promise<MemberBenefit[]> => simulateNetworkDelay(mockMemberBenefits);
export const getSponsorshipTiers = (): Promise<SponsorshipTier[]> => simulateNetworkDelay(mockSponsorshipTiers);
export const getPastEvents = (): Promise<PastEvent[]> => simulateNetworkDelay(mockPastEvents);
export const getWhySponsorBenefits = (): Promise<WhySponsorBenefit[]> => simulateNetworkDelay(mockWhySponsorBenefits);
export const getSponsorshipBenefits = (): Promise<SponsorshipBenefit[]> => simulateNetworkDelay(mockSponsorshipBenefits);
export const getPartners = (): Promise<Partner[]> => simulateNetworkDelay(mockPartners);


