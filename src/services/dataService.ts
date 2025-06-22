// MOCK DATA SERVICE
// This simulates fetching data from a Firestore database.

import { Founder, Job, SuccessStory, Program } from '@/types';
// Import the new mock data array
import { mockFounders, mockJobs, mockSuccessStories, mockPrograms } from '@/data/mockData';

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

// Add the new function to get programs
export const getPrograms = (): Promise<Program[]> => {
    return simulateNetworkDelay(mockPrograms);
};