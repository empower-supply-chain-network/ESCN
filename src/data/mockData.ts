import { Founder, Job, SuccessStory, Program } from '@/types';

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
    imageUrl: '/Shuya.png',
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
    imageUrl: '/Michelle.jpg',
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