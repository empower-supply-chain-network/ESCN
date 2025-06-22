import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { openModal } from '@/store/slices/uiSlice';
import { cn } from '@/utils/cn';
import { useAuth } from '@/hooks/useAuth';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/programs', label: 'Programs' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/jobs', label: 'Jobs' },
];

export function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const handleLoginClick = () => {
    dispatch(openModal('login'));
  };

  return (
    // THE ONLY CHANGE IS ON THIS LINE:
    // Removed bg-white-linen/80 and backdrop-blur-sm
    // Replaced with the solid bg-white-linen
    <header className="fixed top-0 z-50 w-full bg-white-linen shadow-sm border-b border-border-light">
      <nav className="container flex items-center justify-between max-w-6xl py-2 mx-auto px-4">
        <Link to="/" className="flex-shrink-0">
          <img src="/ESCN_Logo.png" alt="ChainSpark Logo" className="block w-auto h-20" />
        </Link>
        
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2 }}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'text-text-primary font-medium transition-colors hover:text-emerald-green',
                    isActive ? 'text-emerald-green font-semibold' : '' // Style for the active link
                  )
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
           {isAuthenticated ? (
             <Button>Dashboard</Button>
           ) : (
            <Button variant="outline" size="sm" onClick={handleLoginClick}>Login</Button>
           )}
        </div>
        {/* A placeholder for a potential mobile menu button */}
        <div className="lg:hidden">
            {/* Mobile menu logic would go here */}
        </div>
      </nav>
    </header>
  );
}