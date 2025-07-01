// In src/data/mockData.ts

// ... (keep all other mock data arrays)

// 1. Import all the new images for the benefits
import networkingImage from '@/assets/images/Networking Events.jpeg';
import knowledgeImage from '@/assets/images/Knowledge Sharing Platforms.jpg';
import mentorshipImage from '@/assets/images/Mentorship Program.jpg';
import inclusionImage from '@/assets/images/Diversity and Inclusion Initiatives.jpg';
import supportImage from '@/assets/images/Professional Support Clinics.jpg';

// UPDATED: Data for the "Join Us" page benefits with your new images
export const mockMemberBenefits: MemberBenefit[] = [
  { 
    id: '1', 
    title: 'Networking Events', 
    description: 'Industry mixers and round table discussions on hot topics to facilitate connections and collaboration.', 
    imageUrl: networkingImage
  },
  { 
    id: '2', 
    title: 'Knowledge Sharing Platforms', 
    description: 'Access to exclusive webinars and workshops hosted by industry leaders and subject matter experts.', 
    imageUrl: knowledgeImage
  },
  { 
    id: '3', 
    title: 'Mentorship Program', 
    description: 'Match with experienced supply chain professionals for guidance and career development opportunities.', 
    imageUrl: mentorshipImage
  },
  { 
    id: '4', 
    title: 'Diversity and Inclusion Initiatives', 
    description: 'Participate in inclusive leadership programs to create diverse and welcoming work environments.', 
    imageUrl: inclusionImage
  },
  { 
    id: '5', 
    title: 'Professional Support Clinics', 
    description: 'Get help with your career through our annually career fair, resume workshops, and certification guidance.', 
    imageUrl: supportImage
  },
];