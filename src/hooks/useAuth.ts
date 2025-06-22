import { useTypedSelector } from './useTypedSelector';

export const useAuth = () => {
  const { user, isAuthenticated, loading, error } = useTypedSelector((state) => state.auth);

  return {
    user,
    isAuthenticated,
    isLoading: loading === 'pending',
    error,
  };
};