import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/Button';
import { closeModal, openModal } from '@/store/slices/uiSlice';

export const LoginModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login clicked! (Implement actual login)');
    dispatch(closeModal());
  };

  const switchToJoin = () => {
    dispatch(closeModal());
    dispatch(openModal('membership'));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-forest-green mb-4">Member Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-text-primary">Email:</label>
          <input type="email" required className="w-full p-2 border rounded-md border-border-medium focus:ring-emerald-green focus:border-emerald-green" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-text-primary">Password:</label>
          <input type="password" required className="w-full p-2 border rounded-md border-border-medium focus:ring-emerald-green focus:border-emerald-green" />
        </div>
        <Button type="submit" className="w-full">Login</Button>
      </form>
      <p className="mt-4 text-sm text-center text-text-secondary">
        Don't have an account?{' '}
        <button onClick={switchToJoin} className="font-semibold text-emerald-green hover:underline">
          Join ChainSpark
        </button>
      </p>
    </div>
  );
};