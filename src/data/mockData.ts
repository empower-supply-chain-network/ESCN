import { Founder, Job, SuccessStory, Program, MemberBenefit, SponsorshipTier } from '@/types';

// --- IMPORT THE IMAGES AT THE TOP ---
import shuyaImage from '@/assets/images/Shuya.png';
import michelleImage from '@/assets/images/Michelle.jpg';

// --- Import all the new images for the benefits
import networkingImage from '@/assets/images/Networking Events.jpeg';
import knowledgeImage from '@/assets/images/Knowledge Sharing Platforms.jpg';
import mentorshipImage from '@/assets/images/Mentorship Program.jpg';
import inclusionImage from '@/assets/images/Diversity and Inclusion Initiatives.jpg';
import supportImage from '@/assets/images/Professional Support Clinics.jpg';

// ---  IMPORT ALL THE NEW EVENT IMAGES ---
import eventMay2023_1 from '@/assets/images/event-may-2023-1.jpg';
import eventMay2023_2 from '@/assets/images/event-may-2023-2.jpg';
import eventMay2023_3 from '@/assets/images/event-may-2023-3.jpg';
import eventFeb2023_1 from '@/assets/images/event-feb-2023-1.jpg';
import eventFeb2023_2 from '@/assets/images/event-feb-2023-2.jpg';
import eventFeb2023_3 from '@/assets/images/event-feb-2023-3.jpg';
import eventAug2022_1 from '@/assets/images/event-aug-2022-1.jpg';
import eventAug2022_2 from '@/assets/images/event-aug-2022-2.jpg';
import eventAug2022_3 from '@/assets/images/event-aug-2022-3.jpg';



export const mockFounders: Founder[] = [
  {
    id: '1',
    name: 'Co-Founder - Shuya, Zhai',
    title: 'RESILIENCE AND GROWTH IN MONTREAL',
    subtitle: 'RESILIENCE AND GROWTH IN MONTREAL',
    story: [
      "Born in China, my path took me across continents, from Australia to London, UK to McGill University in Montreal. Little did I know that beyond the threshold of graduation lay my darkest chapter - a period of relentless job rejections that echoed with the deafening silence of despair and solitude.",
      "Eventually, securing a role as a logistics and executive assistant ignited a spark of hope, serving as the cornerstone of my career. Evolving within the supply chain arena, each decision propelled me forward, culminating in my current role as Senior manager overseeing imports and transport operations.",
      "<strong>Embracing the challenges, I've emerged stronger, believing that adversity breeds resilience.</strong> Beyond the corporate realm, community volunteering has been my solace, sparking vision to create a supportive community for those enduring similar struggles."
    ],
    imageUrl: shuyaImage,
  },
  {
    id: '2',
    name: 'Co-Founder - Michelle, Zhao',
    title: 'REWRITE A NEW CHAPTER IN CANADA',
    subtitle: 'REWRITE A NEW CHAPTER IN CANADA',
    story: [
      "After over 15 years in China's supply chain management, moving to Canada in 2017 presented unexpected challenges. Lacking local experience and education, I felt helpless and struggled to restart my career. Through determination and reeducation, I've worked as an Import & Export Specialist in Canada for over 4 years, earning CPIM and CSCP certifications, and transitioning to a supply planning role.",
      "<strong>This personal journey highlighted the struggles that many new immigrants face despite their excellent backgrounds.</strong> They possess valuable skills and experience that could greatly benefit local companies, but often lack the support to navigate the Canadian industry. This realization inspired me to co-found this organization, aiming to empower those facing similar struggles by providing support on career paths, reeducation, networking, skill learning, and experience sharing. I want to help them find a better life in Canada, just as I did."
    ],
    imageUrl: michelleImage,
  },
];

export const mockJobs: Job[] = [
    { id: '1', title: 'Logistics Coordinator', company: 'Dynamic Goods Inc.', location: 'Montreal, QC', summary: 'Seeking a detail-oriented Logistics Coordinator to manage transportation and warehousing. 2+ years experience. Strong communication.', type: 'Full-time', postedDate: 'July 20, 2024' },
    { id: '2', title: 'Supply Chain Analyst', company: 'Innovate Solutions Ltd.', location: 'Toronto, ON (Remote)', summary: 'Responsibilities: data analysis, process improvement, inventory management. Excel/SQL desired.', type: 'Full-time', postedDate: 'July 18, 2024' },
    { id: '3', title: 'Procurement Specialist', company: 'Global Sourcing Co.', location: 'Vancouver, BC', summary: '6-month contract for strategic sourcing. Vendor negotiation & contract management. Immediate start.', type: 'Contract', postedDate: 'July 22, 2024' },
];

export const mockSuccessStories: SuccessStory[] = [
    { id: '1', initials: 'AD', name: 'Ana de Leon', title: 'From Career Transition to Supply Chain Analyst', story: '"Joining ChainSpark was a turning point. The mentorship program provided invaluable guidance, and networking events helped me connect with professionals. Within six months, I landed my first role as a Supply Chain Analyst!"', keyImpact: ['Mentorship', 'Networking'] },
    { id: '2', initials: 'BC', name: 'Ben Carter', title: 'Accelerated Growth with CSCP Certification', story: '"The CSCP prep course was fantastic. Instructors were knowledgeable, and the study group kept me motivated. Earning my CSCP directly led to a promotion and a significant pay raise. I was able to apply new strategies at work immediately, which impressed my managers. This program is a must for anyone serious about their supply chain career."', keyImpact: ['Certification', 'Peer Support'] },
    { id: '3', initials: 'SJ', name: 'Sofia Jiang', title: 'Finding Community & First Job in a New Country', story: '"As a new immigrant, ChainSpark provided a welcoming community and practical workshops. I made crucial connections that led to my first job in logistics here. The support system is incredible."', keyImpact: ['Community', 'Workshops'] },
];

export const mockPrograms: Program[] = [
    { id: 'continuous-education', title: 'Continuous Education', subtitle: '📚 Learn & Grow', description: 'Partner with leading educational institutions to provide ongoing learning opportunities.' },
    { id: 'certifications', title: 'Supply Chain Certifications', subtitle: '🏆 Get Certified', description: 'Prepare for and earn industry-recognized certifications: CPIM, CSCP, and CLTD.' },
    { id: 'mentorship', title: 'Mentorship Program', subtitle: '🤝 Connect & Guide', description: 'Connect with experienced professionals who can guide your career journey.' },
];

// NEW: Data for the "Join Us" page benefits
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

// NEW: Data for the Sponsorship page
export const mockSponsorshipTiers: SponsorshipTier[] = [
  // Educational Institution Tiers
  { id: 'edu1', category: 'Educational Institution', tier: 'Basic Tier', title: 'Foundation Membership', investment: '$2,500 - $5,000', benefits: ["Access to ChainSpark's online resources", 'Listing on website as a supporting institution', 'Event invitations for representatives and students', 'Access to a directory of ChainSpark members', 'Allows students to join free on some events (career fair, online workshops)'] },
  { id: 'edu2', category: 'Educational Institution', tier: 'Intermediate Tier', title: 'Engagement Partner', investment: '$5,000 - $10,000 annually', benefits: ['All benefits from the Basic Tier', 'Opportunities for students to apply for internships', 'Invitation for ChainSpark members to speak at events', 'Access to specialized webinars and workshops'] },
  { id: 'edu3', category: 'Educational Institution', tier: 'Premium Tier', title: 'Strategic Partner', investment: '$10,000 - $25,000 Annually', benefits: ['All benefits from the Intermediate Tier', 'Tailored internship programs designed in collaboration', 'Sponsorship recognition at major events', 'Access to mentorship from industry professionals for students'] },
  // Internship Partner
  { id: 'int1', category: 'Internship Partner', tier: '', title: 'Internship Placement Partner', benefits: ['Work with ChainSpark to place students in internships', 'Logo placement on program website and marketing materials', 'Acknowledgement in newsletters and social media', '5 VIP passes to ChainSpark events', 'Opportunities to participate in intern review and feedback sessions'] },
  // Certification Sponsor Tiers
  { id: 'cert1', category: 'Certification Sponsor', tier: 'Basic', title: 'Basic Certification Sponsor', investment: '10-15% discount on course enrollments', benefits: ['Exclusive promotional offers for members', 'Listed as a Certification Sponsor on website', 'Opportunity to promote programs at events', 'Feature in quarterly newsletter'] },
  { id: 'cert2', category: 'Certification Sponsor', tier: 'Advanced', title: 'Advanced Certification Sponsor', investment: '15-25% discount on course enrollments', benefits: ['Offer limited scholarships or reduced rates', 'Prominent listing as an Advanced Sponsor', 'Host a dedicated webinar for ChainSpark members', 'Collaborate on a customized marketing campaign'] },
];

// The newest event is first in the array.
export const mockPastEvents: PastEvent[] = [
  {
    id: '3',
    date: 'May, 2023',
    title: 'Career Fair Moment Sharing',
    description: 'Our inaugural career fair in June 2023 was a resounding success, with over 100 attendees. The event featured head-hunters and a diverse range of business owners showcasing job opportunities at their booths.',
    imageUrls: [eventMay2023_1, eventMay2023_2, eventMay2023_3],
  },
  {
    id: '2',
    date: 'Feb, 2023',
    title: 'Past Events Showcase',
    description: 'Guests sharing about supply chain trends in 2023. We were also proud to officially join the CSCA as the QC chapter.',
    imageUrls: [eventFeb2023_1, eventFeb2023_2, eventFeb2023_3],
  },
  {
    id: '1',
    date: 'Aug, 2022',
    title: 'Past Events Showcase',
    description: 'The establishment of the Montreal Supply Chain Mutual Aid Group - an informal of network and the beginning of our journey. We invited guests to share their success in the supply chain industry.',
    imageUrls: [eventAug2022_1, eventAug2022_2, eventAug2022_3],
  },
];