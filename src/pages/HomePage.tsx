import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { openModal } from '@/store/slices/uiSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="relative flex items-center justify-center w-full min-h-screen pt-24 text-center bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/Homepage_Photo_3.png')" }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-4"
        >
          {/* --- THIS IS THE CORRECTED LINE --- */}
          <h1 className="text-5xl font-bold text-white lg:text-6xl whitespace-nowrap" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Empower Supply Chain Network
          </h1>
          <p className="mt-4 text-2xl font-medium text-white-linen lg:text-3xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            Illuminate Your Path with ChainSpark
          </p>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-white-linen" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            Empowering the next generation of supply chain leaders through meaningful networking, innovative knowledge sharing, and collaborative growth.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button size="lg" onClick={() => navigate('/events')}>
                Upcoming Events
              </Button>
            </motion.div>
            <Button size="lg" variant="secondary" onClick={() => dispatch(openModal('membership'))}>
              Join Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;