import { Users, Handshake, Sparkles, Megaphone } from 'lucide-react';
import { Founder, Job, SuccessStory, Program, MemberBenefit, SponsorshipTier, PastEvent, WhySponsorBenefit, SponsorshipBenefit, Partner, UpcomingEvent } from '@/types';
// --- IMPORT THE IMAGES AT THE TOP ---
import shuyaImage from '@/assets/images/Shuya.jpeg';
import michelleImage from '@/assets/images/Michelle.jpg';

// Import all the new images for the benefits
import networkingImage from '@/assets/images/Networking Events.jpeg';
import knowledgeImage from '@/assets/images/Knowledge Sharing Platforms.jpg';
import mentorshipImage from '@/assets/images/Mentorship Program.jpg';
import inclusionImage from '@/assets/images/Diversity and Inclusion Initiatives.jpg';
import supportImage from '@/assets/images/Professional Support Clinics.jpg';

import eventAug2022_1 from '@/assets/images/event-aug-2022-1.jpg';
import eventAug2022_2 from '@/assets/images/event-aug-2022-2.jpg';
import eventAug2022_3 from '@/assets/images/event-aug-2022-3.jpg';
import eventAug2022_4 from '@/assets/images/event-aug-2022-4.jpg';
import eventFeb2023_1 from '@/assets/images/event-feb-2023-1.jpg';
import eventFeb2023_2 from '@/assets/images/event-feb-2023-2.jpg';
import eventFeb2023_3 from '@/assets/images/event-feb-2023-3.jpg';
import eventFeb2023_4 from '@/assets/images/event-feb-2023-4.jpg'; // New one
import eventMay2023_1 from '@/assets/images/event-may-2023-1.jpg';
import eventMay2023_2 from '@/assets/images/event-may-2023-2.jpg';
import eventMay2023_3 from '@/assets/images/event-may-2023-3.jpg';
import eventMay2023_4 from '@/assets/images/event-may-2023-4.jpg';
import sponsorshipHeroImage from '@/assets/images/sponsorship-hero.jpg';
import augustWebinarPoster from '@/assets/images/August-Webinar.png';
// Create a simple placeholder logo if you like


export const mockFounders: Founder[] = [
  {
    id: '1',
    name: 'Co-Founder - Shuya Zhai',
    title: 'RESILIENCE, LEADERSHIP & EMPOWERMENT IN MONTREAL',
    subtitle: 'RESILIENCE, LEADERSHIP & EMPOWERMENT IN MONTREAL',
    story: [
      "Born in China, my journey has taken me across continents—from Australia to London, and finally to Montreal, where I graduated from McGill University. I never imagined that the period after graduation would be my most defining chapter—a time marked by countless job rejections and the deafening silence of uncertainty.",
      "But from that darkness, I rose. Starting as a logistics and executive assistant, I slowly built my path—earning trust, gaining experience, and moving steadily into leadership. Today, I proudly lead strategic operations in global logistics, overseeing complex freight networks and driving results in a fast-paced industry.",
      "<strong>I didn't wait for the doors to open—I pushed through and made my own way.</strong> Each role became a stepping stone, each challenge a lesson, and each success a reminder of the power of persistence—especially as a woman navigating a traditionally male-dominated field.",
      "Now, I see many individuals standing where I once stood—uncertain, overlooked, or just starting out. <strong>And because I've been there, I'm here to help.</strong> I'm committed to building a space where others can rise, thrive, and be seen.",
      "Beyond the corporate world, volunteering has been my anchor and inspiration. Empowering others through community work is more than a mission—it's a promise to pass on the strength that once helped me stand tall."
    ],
    imageUrl: shuyaImage, // Using the new image
  },
  {
    id: '2',
    name: 'Co-Founder – Ruihua(Michelle), Zhao',
    title: 'REWRITE A NEW CHAPTER IN CANADA',
    subtitle: 'REWRITE A NEW CHAPTER IN CANADA',
    story: [
      "After more than 15 years in supply chain management in China—including <strong>7 years in a leadership role at a Fortune 500 company</strong>—moving to Canada in 2017 brought challenges I never imagined. Despite my global experience, the lack of local credentials and networks left me feeling lost and uncertain about my future.",
      "Instead of giving up, <strong>I chose to grow.</strong> I embraced a lifelong learning mindset—earning CPIM and CSCP certifications and even pursuing a university degree while working full-time. This commitment helped me transition from an Import & Export Specialist to a Supply Planner, a role I had aspired to for 2 years.",
      "This journey taught me that continuous learning isn't just a strategy—it's a necessity to thrive in an ever-changing world. It also opened my eyes to the struggles many talented newcomers face despite their impressive experience. They bring so much value, yet often lack the support and resources to restart their careers.",
      "That realization inspired me to co-found this organization—a community built on support, knowledge-sharing, and growth. I built this platform <strong>for people like me — and people like you</strong> who deserve support, whether you're starting your career or restarting it.",
      "My purpose is simple: to help you grow, rise, and lead.",
      "Let's rewrite our new chapters, together."
    ],
    imageUrl: michelleImage,
  },
];
export const mockJobs: Job[] = [];

// --- THIS IS THE CORRECTED SECTION ---
// We are replacing the old stories with just Phoebe's story.
export const mockSuccessStories: SuccessStory[] = [
    { 
        id: 'phoebe-story', 
        initials: 'P', 
        name: 'Phoebe', 
        title: 'A Beautiful Encounter at a Life Crossroads', 
        // The specific quote you requested for the summary card
        story: '"In a new land without networks or resources, this group became my bridge — a platform that truly empowered me to restart my career."', 
        detailedStory: [
            "<h2>🛬 A Hasty Choice After Arrival</h2>",
            "<p>When Michelle asked me if I could share my job-hunting journey, I agreed without hesitation—just like how she had helped recommend me for a job without hesitation when I needed it the most.</p>",
            "<p>Six years ago, shortly after landing in Montreal, I chose to study <strong>Early Childhood Education</strong> at Vanier College. Perhaps because of my teaching background, I assumed it would be easy to transition into another field of education. Without doing much research, I made a hasty decision—only to learn that Vanier’s early childhood education program is among the most challenging to graduate from.</p>",
            "<p>Thankfully, I managed to complete the program on time without missing a single day, but it still took me nearly two years. After graduation, I quickly found work at a daycare, but unfortunately, COVID hit just a month into the job. After two weeks of isolation, I declined the offer to return. COVID was just part of the reason—the truth was, I realized I really didn’t enjoy the work at all.</p>",
            "<h2>🔁 A Twisting Path to Career Change</h2>",
            "<p>While staying at home, a friend who had arrived in Canada around the same time encouraged me to switch to the <strong>logistics field</strong>. She had studied logistics while I studied early childhood education—my program took two years; hers took four months. By the time I was still interning, she was already switching jobs and getting salary bumps. She had hit the ground running.</p>",
            "<p>That’s when I began to seriously reflect on my career choice. How could such a vast employment gap exist between two programs with such different time investments?</p>",
            "<blockquote>Who says only men fear choosing the wrong career path? Let me tell you—women do too.</blockquote>",
            "<p>Fortunately, Canada has a strong <strong>continuing education system</strong>. It provides a real opportunity for immigrants to pivot professionally. I decided to study <strong>Transportation & Logistics</strong> at Champlain College. Luckily, I got into an <strong>intensive 4-month program</strong> (which no longer exists today). The instructors were very committed to helping us find jobs after graduation—but I made another mistake: I decided not to job hunt immediately.</p>",
            "<p>By late 2022, about 7–8 months after graduation, I started applying for jobs online. But I had missed the “graduation hiring season.” My instructors had moved on, classmates were already settled, and job leads were few and far between. My applications went unanswered, and I started to feel increasingly discouraged—almost hopeless.</p>",
            "<h2>🌈 A Beautiful Encounter That Changed Everything</h2>",
            "<p>Just when I felt stuck, a classmate casually said, “Let me add you to this Chinese supply chain group. You might find job leads there.” That’s how I joined the group and very quickly received a warm welcome from Michelle, the group leader.</p>",
            "<p>Upon hearing about my urgent job search and struggles, Michelle went out of her way to help. She not only comforted me but actively looked for job leads and passed one along shortly afterward. She also helped me revise my résumé, reviewed international trade processes and key knowledge with me, encouraged me constantly, and most importantly—<strong>gave me back my confidence</strong>.</p>",
            "<blockquote>Michelle not only comforted me but actively looked for job leads, helped revise my résumé, reviewed trade processes, and restored my confidence — it was like rain in a drought.</blockquote>",
            "<p>All of this was a timely and selfless gift. I was deeply moved. <em>It really means a lot to me!</em></p>",
            "<p>Thanks to Michelle’s full support, I landed the job. Seven months later, a recruiter reached out to me, and now I’m in a position I really enjoy. The company culture is relaxed, my colleagues are friendly and respectful, and I feel truly satisfied.</p>",
            "<h2>🤝 The Power of Community</h2>",
            "<p>I met Michelle in person at one of the events, she is a warm-hearted and elegant woman with strong organizational and leadership skills. Calling her “beautiful and kind, capable and compassionate” is no exaggeration.</p>",
            "<p>I’m incredibly grateful to have met her when I needed help the most. She told me that, as a newcomer herself, she and two friends built this platform out of passion and vision—to support immigrants in growing their careers within Canada’s supply chain industry.</p>",
            "<p>There’s a saying: <em>“At home, rely on your parents; outside, rely on your friends.”</em> It may sound cliché, but for us first-generation immigrants, it’s very real.</p>",
            "<p>In a new land where we lack networks, information, and resources, this platform plays the role of a friend. Even though many members haven’t met face-to-face, this group has provided useful information and resources. It transformed scattered leads into a <strong>flowing network of opportunity</strong>.</p>",
            "<h2>🙏 Grateful for the Encounter</h2>",
            "<blockquote>Good things happen to those who do good. Those who give love will receive love in return.</blockquote>"
        ],
        keyImpact: ['Community', 'Networking', 'Mentorship'] 
    }
];


export const mockPrograms: Program[] = [
    { id: 'continuous-education', title: 'Continuous Education', subtitle: '📚 Learn & Grow', description: 'Partner with leading educational institutions to provide ongoing learning opportunities.' },
    { id: 'certifications', title: 'Supply Chain Certifications', subtitle: '🏆 Get Certified', description: 'Prepare for and earn industry-recognized certifications: CPIM, CSCP, and CLTD.' },
    { id: 'mentorship', title: 'Mentorship Program', subtitle: '🤝 Connect & Guide', description: 'Connect with experienced professionals who can guide your career journey.' },
];

export const mockMemberBenefits: MemberBenefit[] = [
  { id: '1', title: 'Networking Events', description: 'Industry mixers and round table discussions on hot topics to facilitate connections and collaboration.', imageUrl: networkingImage },
  { id: '2', title: 'Knowledge Sharing Platforms', description: 'Access to exclusive webinars and workshops hosted by industry leaders and subject matter experts.', imageUrl: knowledgeImage },
  { id: '3', title: 'Mentorship Program', description: 'Match with experienced supply chain professionals for guidance and career development opportunities.', imageUrl: mentorshipImage },
  { id: '4', title: 'Diversity and Inclusion Initiatives', description: 'Participate in inclusive leadership programs to create diverse and welcoming work environments.', imageUrl: inclusionImage },
  { id: '5', title: 'Professional Support Clinics', description: 'Get help with your career through our annually career fair, resume workshops, and certification guidance.', imageUrl: supportImage },
];

export const mockSponsorshipTiers: SponsorshipTier[] = [
  // ... (all the sponsorship tier data)
];

export const mockWhySponsorBenefits: WhySponsorBenefit[] = [
  { id: '1', icon: Users, title: 'Directly Engage with Talent', description: 'Reach 500+ motivated professionals and students in the supply chain sector.' },
  { id: '2', icon: Handshake, title: 'Showcase Community Leadership', description: 'Empower new immigrants and youth, demonstrating your commitment to social responsibility.' },
  { id: '3', icon: Sparkles, title: 'Align Your Brand with Impact', description: 'Associate your brand with innovation, diversity, and positive community empowerment.' },
  { id: '4', icon: Megaphone, title: 'Amplify Your Promotional Reach', description: 'Gain visibility through our email blasts, LinkedIn, Instagram, and event programs.' },
];

export const mockSponsorshipBenefits: SponsorshipBenefit[] = [
  { id: '1', title: 'Logo Visibility', description: 'Featured on our website, event banners, and promotional materials.' },
  { id: '2', title: 'Social Media Exposure', description: 'Dedicated spotlight posts on our professional networks.' },
  { id: '3', title: 'Free Event Tickets', description: 'Complimentary access for your team to network at our events.' },
  { id: '4', title: 'Networking & Speaking', description: 'Position your team as thought leaders in the industry.' },
];

export const mockPartners: Partner[] = []; 

export { sponsorshipHeroImage };

export const mockPastEvents: PastEvent[] = [
  {
    id: '3',
    date: 'May, 2023',
    title: 'Inaugural Supply Chain Career Fair',
    description: 'Our first-ever career fair was a resounding success, connecting job seekers with recruiters and business owners.', // Short description for the grid
    coverImageUrl: eventMay2023_3, // As requested
    imageUrls: [eventMay2023_1, eventMay2023_2, eventMay2023_3,eventMay2023_4],
    detailedDescription: [
        "In June 2023, we proudly hosted our <strong>first-ever Supply Chain Career Fair</strong>—an unforgettable event that brought together <strong>job seekers, recruiters, and business owners</strong> under one roof. With over <strong>100 attendees</strong>, it marked a significant step forward in our community impact.",
        "The venue was buzzing with energy as <strong>hiring managers and headhunters</strong> interacted directly with participants. Attendees explored <strong>job opportunities</strong> in logistics, manufacturing, procurement, and tech through engaging booths and one-on-one chats.",
        "What made the fair truly special was its <strong>community-centered approach</strong>. Many businesses were immigrant-led and sought to <strong>recruit diverse talent</strong> reflective of modern Canada. We also provided <strong>live résumé reviews, coaching, and casual coffee chats</strong> to boost participants’ confidence and readiness.",
        "The success of this career fair demonstrated the power of <strong>grassroots action</strong> in connecting talent to meaningful careers. It validated our long-standing belief in the importance of inclusive, immigrant-led solutions in Canada’s supply chain future."
    ]
  },
  {
    id: '2',
    date: 'Feb, 2023',
    title: 'Becoming Quebec Chapter of CSCA',
    description: 'We celebrated joining the Canadian Supply Chain Association (CSCA) as its official Quebec Chapter.',
    coverImageUrl: eventFeb2023_3, // As requested
    imageUrls: [eventFeb2023_4, eventFeb2023_2, eventFeb2023_3,eventFeb2023_1],
    detailedDescription: [
        "By February 2023, our group reached a pivotal moment: we officially joined the <strong>Canadian Chinese Supply Chain Association (CSCA)</strong> as its <strong>Quebec Chapter</strong>. This milestone signified our evolution from a grassroots community to a recognized regional player within the national supply chain ecosystem.",
        "To commemorate this partnership, we hosted an industry seminar featuring <strong>renowned professionals and thought leaders</strong>. Their talks explored the <strong>future of the supply chain in 2023</strong>, including the role of <strong>Artificial Intelligence</strong>, <strong>automation in warehousing</strong>, and <strong>procurement innovation</strong>.",
        "Speakers highlighted real-world applications and shared case studies that demonstrated how companies are evolving in the face of disruption. The session attracted both newcomers and seasoned professionals seeking to <strong>stay competitive and informed</strong>.",
        "This event reinforced our commitment to <strong>collaboration, bilingual inclusion, and diverse representation</strong> in Canadian supply chain leadership."
    ]
  },
  {
    id: '1',
    date: 'Aug, 2022',
    title: 'Founding of the Mutual Aid Group',
    description: 'The very first gathering of what would become the Montreal Supply Chain Mutual Aid Group.',
    coverImageUrl: eventAug2022_1, // As requested
    imageUrls: [eventAug2022_1, eventAug2022_3, eventAug2022_2,eventAug2022_4],
    detailedDescription: [
        "In August 2022, we proudly hosted the <strong>very first gathering</strong> of what would later become the Montreal Supply Chain Mutual Aid Group. The event took place in a cozy community space in downtown Montreal, welcoming <strong>newcomers, industry professionals, and curious learners</strong> alike.",
        "The event was more than just a meetup—it was a <strong>foundational moment</strong> for a grassroots initiative created by and for immigrants navigating the Canadian job market. Several <strong>inspirational guest speakers</strong>, many of whom had successfully restarted their careers in Canada, shared heartfelt stories of resilience, adaptation, and growth in the Canadian supply chain sector.",
        "We also held a panel on <strong>current supply chain industry trends</strong>, touching on post-COVID recovery, supply chain digitization, and regional hiring demands. The conversations sparked <strong>peer-to-peer connections</strong> and planted the seeds for a long-term support ecosystem.",
        "This informal launch was driven by a shared vision: to <strong>build a trusted support network</strong> that empowers newcomers with professional insights, local resources, and industry access."
    ]
  },
];

export const mockUpcomingEvents: UpcomingEvent[] = [
  {
    id: 'a-flavour-of-modern-ai',
    date: 'August 29, 2025',
    time: '12:30PM - 1:30PM EST',
    title: 'A Flavour of Modern AI',
    tagline: 'Explore how AI is transforming jobs, industries, and the future of work.',
    speakerName: 'Hanyin CHEN',
    speakerTitle: 'President & CEO, ASKAFOX INC.\nC2 Montreal "Innovator of the year 2024"',
    speakerBio: [
      'Material engineering by training',
      'Trilingual entrepreneur in AI & supply chain',
      'Former executive in the energy & mobility sectors',
      'Founder of a top 100 AI company in Canada'
    ],
    posterUrl: augustWebinarPoster,
    registrationLink: 'https://forms.gle/FTyNn1rj2SW9NPAH7'
  }
];
