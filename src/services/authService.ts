// MOCK AUTH SERVICE
// This file simulates calls to a Firebase Auth backend.

import { User } from "@/types";

export const loginWithEmail = (email: string): Promise<User> => {
  console.log(`Simulating login for ${email}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockUser: User = {
        uid: 'mock-user-123',
        email: email,
        displayName: 'Mock User',
      };
      resolve(mockUser);
    }, 1000);
  });
};

export const logout = (): Promise<void> => {
  console.log('Simulating logout');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};