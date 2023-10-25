import { Experience, KeyProject } from './types';

export const pages = [
  {
    name: 'Experience',
    value: '/experience',
  },
];

export const aboutMe = {
  title: 'Kate Bishop',
  position: 'Senior Front-End Software Engineer',
  tagline1: 'Atlanta-based tech fanatic making leading-edge solutions reality.',
  tagline2: "It's nice to meet you!",
  aboutKate:
    'Kate is a UX-obsessed Front-End Engineer with over 6 years of experience creating delightful user experiences and translating design into resilient interfaces. She has experience in several industries, including litigation, e-commerce, insurance, education, finance, and healthcare.',
  aboutKateA:
    'Kate is a UX-obsessed Front-End Engineer with over 5 years of experience',
  aboutKateB:
    'creating delightful user experiences and translating design into resilient interfaces',
  aboutKateC:
    '. She has experience in several industries, including ecommerce, insurance, education, finance, and healthcare.',
  aboutMe:
    'I am a Senior Front-End Software Engineer with over 6 years of experience in software development. With my background in development and an eye towards the future, I bring an innovative perspective framed with technical possibility to business and product analysis.',
  aboutMeSeeking:
    'I am a Senior Front-End Engineer with 5 years of experience in software development. I am seeking an opportunity where I can exercise my skills in UI/UX, leadership, and technology. I’ve held roles in a variety of industries, and with my background in development and an eye towards the future, I bring an innovative perspective framed with technical possibility to business and product analysis.',
  callToAction: 'Learn more about Kate on LinkedIn.',
};

export const contact = {
  email: 'itskatebishop@gmail.com',
  location: 'Atlanta, GA',
  linkedIn: 'https://www.linkedin.com/in/thekatebishop/',
  linkedInShort: 'linkedin.com/in/thekatebishop',
  linkedInButton: "Let's connect!",
  github: 'https://github.com/kate-bishop',
  githubShort: 'github.com/kate-bishop',
};

export const skills = {
  languages:
    'JavaScript, TypeScript, React, PHP, Laravel, Redux, Next.js, Node.js, GraphQL, Apollo, Python, C#, Java, SQL, HTML, CSS',
  technologies:
    'Visual Studio, MS SQL, MongoDB, Postgres, Azure, AWS, Tableau, Lucidchart, Figma, Agile, Scrum, Design Think',
};

export const education = {
  institutionName: 'The University of Alabama',
  degree: 'Bachelor of Science in Commerce and Business Administration',
  dateSpan: ['2013', '2017'],
  major: 'Management Information Systems',
  minor: 'French',
  specializations: 'Management Communications, Business Information Technology',
};

export const experience: Experience[] = [
  {
    companyName: 'Calloquy, PBC',
    companyDescription:
      'Calloquy, PBC is a litigation tech startup making remote legal proceedings accessible, secure, and efficient. The company ceased operations in October 2023.',
    location: 'Atlanta, GA',
    jobTitle: 'Senior Front-End Engineer',
    dateSpan: 'October 2022 - October 2023',
    description:
      'I was a leader on the product development team building and delivering a comprehensive video conference platform designed for litigation processes with React (TypeScript) and Laravel PHP.',
    keyProjects: [
      {
        bulletPoints: [
          'Architected and developed new features with emphasis on security and reliability, including administrative dashboards and functions, an algorithm to visually organize users by role and party within a meeting, document management, and maintainable role-based permissions handling',
          'Strategized frequent priority shifts to ensure a balance of tackling revenue-driving features and critical performance improvements, while maintaining high quality code and documentation efforts',
          'Demonstrated technical expertise in business-level language with stakeholders to refine product requirements',
          'Mentored junior engineers in development best practices, team workflows, and professionalism',
        ],
      },
    ],
  },
  {
    companyName: 'OTR Solutions',
    companyDescription:
      'OTR Solutions offers over-the-road carriers factoring and technical tools to deliver reliable cash flow, back office, web domain, and fuel services.',
    location: 'Roswell, GA',
    jobTitle: 'Front-End Software Engineer, UX Architect',
    dateSpan: 'August - September 2022 (Short-Term Contract)',
    description:
      'During the 6-week timeline, I redesigned and rebuilt the UI for a complex customer portal with focus on speed to complete key workflows, ease of data entry, and preparation for an expansion of offerings. After deployment, my work increased users’ understanding of the services the company offers and reduced the time required to complete key tasks by up to 50%.',
    keyProjects: [
      {
        bulletPoints: [
          'Collaborated with stakeholders to refine task flows, improve use of space in the UI, and optimize website architecture',
          'Improved existing DevExpress implementation by reworking file architecture, introducing reusable components and classes, and building in screen-size breakpoints for mobile support',
          'Delivered organized code complete with change log documentation and a road map for feature updates and improvements to the codebase',
        ],
      },
    ],
  },
  {
    companyName: 'Manufactured',
    companyDescription:
      'Manufactured is a venture-backed product sourcing company that provides entrepreneurs with access to manufacturing companies.',
    location: 'Culver City, CA (Remote)',
    jobTitle: 'Lead Front-End Developer, Product Owner',
    dateSpan: 'September 2021 - February 2022',
    description:
      'I led front-end product development with React (TypeScript) and GraphQL to bring a green-field platform to launch.',
    keyProjects: [
      {
        bulletPoints: [
          'Revitalized development and delivered the MVP Sales and Customer Service Platform on schedule by refining scope with stakeholders, clearly documenting development requirements, and setting attainable timelines',
          'Designed information and process flows to scope new product and partner integration requirements, and developed a road-map of short- and long-term product goals for the next 3 years',
          'Introduced new team practices to foster collaboration across an international team and promote timely delivery of features, including visualized metrics to describe the team’s progress, check-ins with leaders, and team calendars',
        ],
      },
    ],
  },
  {
    companyName: 'Groundspeed Analytics',
    companyDescription:
      'Groundspeed Analytics is an artificial intelligence InsurTech startup revolutionizing the $350 billion commercial insurance industry.',
    location: 'Ann Arbor, MI (Remote)',
    jobTitle: 'Full-Stack Software Engineer II',
    dateSpan: 'February 2021 - September 2021',
    description:
      'I built new front-end features on the analytics platform with React (TypeScript) and GraphQL, and improved existing back-end software with Python, MongoDB, and Postgres in preparation for major customer scaling.',
    keyProjects: [
      {
        bulletPoints: [
          'Developed dynamic UI to visualize human-in-the-loop processes and enrich sales demos',
          'Improved performance for data-intense software by optimizing redundant UI and state management (Redux) processes and strategically migrating the legacy monolith platform to microservices with AWS Lambda (Python)',
        ],
      },
    ],
  },
  {
    companyName: 'Pariveda Solutions',
    location: 'Atlanta, GA',
    jobTitle: 'Associate Software Development Consultant',
    dateSpan: 'July 2017 - January 2021',
    companyDescription: 'Pariveda Solutions is a consulting firm dedicated to solving complex technology and business problems by aligning their focus on people-development with the mission of their clients.',
    description:
      'I was a team lead and served as a technical expert for projects across several industries. I led internal company-wide initiatives to promote User Experience in solutions architecture, curated resources to share knowledge within the company, and mentored junior consultants in technology and professionalism to prepare for promotion. Key Projects include...',
    keyProjects: [
      {
        projectName: 'Pharmaceutical Services Design System',
        projectRole: 'Team Lead, React Developer',
        bulletPoints: [
          'Led a React team to advance a MVP-level component library to a verbose, WCAG-compliant accessible design system, enabling rapid prototyping and web application development across the organization',
          'Collaborated between development and design teams and planned roadmap to integrate organization rebranding efforts into the design system',
        ],
      },
      {
        projectName: 'Healthcare Financial Data Analytics',
        projectRole: 'Team Lead, Data Analyst',
        bulletPoints: [
          'Developed a proof of concept to incorporate predictive analytics and machine learning into current hospital and business operation based on existing data',
          'Visualized metrics representing patient behavior at doctor appointments to inform administrative actions, such as determining preferred schedules, providing reminders to patients, and planning for expected costs and revenue',
        ],
      },
      {
        projectName: 'Insurance Webform Redesign',
        projectRole: 'Lead React Developer, UX Analyst',
        bulletPoints: [
          'Redesigned an outdated input-heavy webform using a Design Think framework to ensure a thoughtful approach to user experience and content strategy',
          'Led front-end development of the web application that resulted in increased speed to completion, improved data quality, and enabled user scalability',
        ],
      },
      {
        projectName: 'e-Commerce Marketing Data Discovery',
        projectRole: 'Data Architect',
        bulletPoints: [
          'Assessed current set of data sources and utilization process to make business decisions',
          'Strategized a phased data analytics plan to match domain expertise to the right data, maximize effectiveness of marketing spend, and enable data-driven decision making',
        ],
      },
      {
        projectName: 'Construction Vending Machine Cross-Platform Mobile App',
        projectRole: 'Xamarin Developer',
        bulletPoints: [
          'Transitioned an existing native-iOS app to the Xamarin platform in C# with a focus on replicating and adjusting features for Android users',
          'Designed, user-tested, and developed a new Cart Checkout experience for both iOS and Android',
        ],
      },
      {
        projectName: 'Customer Persona Build',
        projectRole: 'UX Analyst',
        bulletPoints: [
          'Designed and facilitated a workshop with executive team to harvest current understanding of the company’s customers',
          'Synthesized outputs into personas, delivered recommendations and coaching to executive team regarding use of insights',
        ],
      },
    ],
  },
];

export const internships = [
  {
    companyName: 'ACT, Inc.',
    jobTitle: 'User Experience Analyst',
    location: 'Iowa City, IA',
    dateSpan: 'May 2016 - August 2016',
    description:
      'Explored modes of communication with students to initiate difficult conversations about academic performance.',
    keyProjects: [
      {
        projectName: null,
        projectRole: null,
        bulletPoints: [
          'Prototyped an interactive data visualization tool to help students plan for academic and career success',
          'Interviewed subject matter experts including high school students, parents, and school counselors to understand student needs on the journey to college',
          'Identified and experimented with data sources and ACT products that could be incorporated into the tool to enrich its offerings',
        ],
      },
    ],
  },
  {
    companyName: 'The Conference Board, European HQ',
    jobTitle: 'Marketing Assistant',
    location: 'Brussels, Belgium',
    dateSpan: 'May 2015 - August 2015',
    description:
      'Supported the European Product Sales Team in recruitment processes to acquire participation of top executives of leading companies in international business conferences.',
    keyProjects: [
      {
        projectName: null,
        projectRole: null,
        bulletPoints: [
          'Maintained the integrity of the Prospective Member Database by verifying dated files, archiving prospective member communication threads, and updating records',
          'Performed extensive online research to recommend and nominate qualified executives as prospective conference members',
          'Contributed to initial research and recruitment efforts for several European conferences',
        ],
      },
    ],
  },
  {
    companyName: 'The University of Alabama',
    jobTitle: 'Teaching Assistant, Head of Grading',
    location: 'Tuscaloosa, AL',
    dateSpan: 'August 2015 - May 2017',
    description:
      "Coordinated and counseled students taking an introductory programming course (C#, Java, C++) in order to support students' development of technical and professional skills.",
    keyProjects: [
      {
        projectName: null,
        projectRole: null,
        bulletPoints: [
          'Managed a team of 8 TAs to design, analyze, and grade programming assignments',
          'Mentored over 100 students a semester in problem solving techniques, project management, and technical application through personal instruction and assistance',
          'Led groups of 35-40 students in weekly laboratory assignments to ensure material comprehension',
        ],
      },
    ],
  },
];

export const portfolio = [
  {
    projectTitle: 'International Insurance Claim Intake',
    projectRole: 'UX/UI Designer & Developer',
    problem:
      'The core business of an insurance company is the ability to track incoming claims. The current form is outdated, slow, data intensive, and error prone. The process is so painful, users make phone calls to request an admin enter information on their behalf. How can we give the process a face lift and put the intended users back into the playing field?',
    approach:
      'I held discovery workshops with user groups in different business units around the world to understand exactly what data is required for tracking and reporting. As I moved into the prototyping with Axure, I kept tight feedback loops with user groups to capture their reactions and ideas and bring them along on the design journey.',
    result:
      'The new intake process cut completion times down from a minimum of 10 minutes to as low as 4 minutes. Users are less prone to errors as the process allows returning to previous tabs to make changes. The form is intuitive enough for most users to begin using with light training. Upon user approval of the prototype, I led UI development efforts using React.js.',
    artifacts: [
      {
        src: 'artifacts/insurance1-wireframe.jpeg',
        title: 'Hi-Fi Wireframe',
        description: null,
      },
    ],
  },
  {
    projectTitle: 'Design Think Competition: BarHop',
    projectRole: 'UX Analyst & Designer',
    problem:
      'Over the course of 17-weeks, solve a “wicked problem”: Closing out bar tabs is a buzz kill. How can we revolutionize this experience?',
    approach:
      'I targeted discovery from the dual perspectives of the customer and bartender. I found that both parties were primarily concerned with security of information and time consumption of closing. For bartenders, mistakes are easy to make, there are always more drinks to pour. Customers want to know their credit cards are safe behind the counter and they have their next destination in mind.',
    result:
      'I prototyped and iterated with Sketch and Figma tools on a mobile app focused on ease of use for customers: quick registration, photo-entry for payment method, and the ability to close the tab in three taps. While the customer experience becomes self-serving, the bartender’s POS experience does not change, outside of not needing to handle credit cards themselves. I also scoped opportunities for improvement, including a social aspect to organize bar crawls and integrations with rideshare options to ensure users get home safely.',
    artifacts: [
      {
        src: 'artifacts/barhop1-regflow.png',
        title: 'Registration Flow',
        description:
          'Because this app would likely be downloaded on the go, a hefty information collection would not be delightful. I split the registration into two flows to allow for a "quick start" entry into the app, and a longer flow to set up payment.',
      },
      {
        src: 'artifacts/barhop2-orderflow.png',
        title: 'Drink Order Flow',
        description: null,
      },
      {
        src: 'artifacts/barhop3-closeflow.png',
        title: 'Close Tab Flow',
        description: null,
      },
    ],
  },
  {
    projectTitle: 'Tough Conversations via Computer Interaction',
    projectRole: 'UX Analyst',
    problem:
      'High school students view the ACT score as a barrier to collegiate and career success. When test results do not meet expectations, students feel they cannot pursue their dream schools or jobs. How can ACT guide students toward meaningful conversations that will keep them motivated to retest or explore other paths to reach their goals?',
    approach:
      'I organized interviews with subject matter experts including high school students, parents, and a school counselor to gather user journeys and sentiments. I created user narratives from these interviews and hosted ideation sessions with the User Experience team. I also pursued other ACT data sources and products offered in the student portal such as career aptitude tests to find that the established website was ACT’s most valuable communication tool.',
    result:
      'I prototyped an interactive data visualization tool for the student portal that would help students plan for academic and career success. Armed with historical data of ACT scores, careers, and “where are they now” data of past students and their current careers, students could plug their own scores and interests into the tool to receive next-step recommendations and talking points to bring to their parents or school counselors.',
    artifacts: [
      {
        src: 'artifacts/conversation1-gauges.png',
        title: 'Projected Success Gauges',
        description: null,
      },
      {
        src: 'artifacts/conversation2-recommender.png',
        title: 'University Recommender',
        description: null,
      },
      {
        src: 'artifacts/conversation3-majormap.png',
        title: 'Major Map',
        description: null,
      },
    ],
  },
];
