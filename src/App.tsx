import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Layout Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ProgramsPage from './pages/ProgramsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import JobsPage from './pages/JobsPage';
// 1. Import the new page components
import JoinPage from './pages/JoinPage';
import SponsorshipPage from './pages/SponsorshipPage';
import EventDetailPage from './pages/EventDetailPage';
import StoryDetailPage from './pages/StoryDetailPage';


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
      // The membership modal is no longer triggered by the main button, but we can leave it here for future use.
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          
          {/* 2. Add the new routes to the router */}
          <Route path="/join" element={<JoinPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/events/:eventId" element={<EventDetailPage />} />
          <Route path="/success-stories/:storyId" element={<StoryDetailPage />} />
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