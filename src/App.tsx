import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Layout Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Page Components (Importing all destinations)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ProgramsPage from './pages/ProgramsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import JobsPage from './pages/JobsPage';

// Modal Components and State Management
import { BaseModal } from './components/modals/BaseModal';
import { LoginModal } from './components/modals/LoginModal';
import { MembershipModal } from './components/modals/MembershipModal';
import { useTypedSelector } from './hooks/useTypedSelector';
import { closeModal } from './store/slices/uiSlice';

function App() {
  const dispatch = useDispatch();
  const { modalType, isModalOpen } = useTypedSelector((state) => state.ui);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'login':
        return <LoginModal />;
      case 'membership':
        return <MembershipModal />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white-linen text-text-primary">
      <Header />
      <main className="flex-grow">
        {/* This is the main "map" that connects URLs to pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </main>
      <Footer />
      <BaseModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {renderModalContent()}
      </BaseModal>
    </div>
  );
}

export default App;