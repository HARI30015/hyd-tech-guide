export type Company = {
  slug: string;
  name: string;
  monogram: string;
  accent: 'lime' | 'violet' | 'coral';
  intro: string;
  verifiedContext: string;
  location: string;
  locationUrl: string;
  careersUrl: string;
  careersLabel: string;
  studentUrl: string;
  studentLabel: string;
  roles: string[];
  skills: string[];
  verifiedInterviewNotes: string[];
  unverifiedInterviewNotes: string[];
};

// The role and skill tags below are student research prompts, not employer claims.
// Each verified statement links to a current official company careers source.
export const checkedOn = '12 Nov 2026';

export const companies: Company[] = [
  {
    slug: 'microsoft',
    name: 'Microsoft',
    monogram: 'M',
    accent: 'lime',
    intro: 'A global technology company with a major research and development presence in Hyderabad.',
    verifiedContext:
      'Microsoft Careers describes Hyderabad as home to its largest research and development campus outside its U.S. headquarters.',
    location: 'Hyderabad, Telangana',
    locationUrl: 'https://careers.microsoft.com/v2/global/en/locations/hyderabad.html',
    careersUrl: 'https://careers.microsoft.com/v2/global/en/locations/hyderabad.html',
    careersLabel: 'Microsoft Hyderabad careers',
    studentUrl: 'https://careers.microsoft.com/students/us/en',
    studentLabel: 'Microsoft early-in-profession programs',
    roles: ['Software engineering', 'Cloud platforms', 'Data & AI'],
    skills: ['Programming fundamentals', 'Data structures & algorithms', 'Databases', 'Cloud fundamentals'],
    verifiedInterviewNotes: [],
    unverifiedInterviewNotes: [],
  },
  {
    slug: 'google',
    name: 'Google',
    monogram: 'G',
    accent: 'violet',
    intro: 'A technology company with an official careers location page for Hyderabad.',
    verifiedContext:
      'Google Careers maintains a dedicated Hyderabad location page and separate official pages for students, internships, and early-career opportunities.',
    location: 'Hyderabad, Telangana',
    locationUrl: 'https://www.google.com/about/careers/applications/locations/hyderabad/',
    careersUrl: 'https://www.google.com/about/careers/applications/jobs/results',
    careersLabel: 'Search Google Careers',
    studentUrl: 'https://www.google.com/about/careers/applications/students/',
    studentLabel: 'Google student opportunities',
    roles: ['Software engineering', 'Data & AI', 'Cloud platforms'],
    skills: ['Programming fundamentals', 'Algorithms', 'Python or C++', 'Systems concepts'],
    verifiedInterviewNotes: [],
    unverifiedInterviewNotes: [],
  },
  {
    slug: 'amazon',
    name: 'Amazon',
    monogram: 'a',
    accent: 'coral',
    intro: 'A global technology and retail company with a Hyderabad-specific careers page.',
    verifiedContext:
      'Amazon Jobs has a dedicated Hyderabad, India location page and lists University Talent among its career areas.',
    location: 'Hyderabad, Telangana',
    locationUrl: 'https://amazon.jobs/content/en/locations/india/hyderabad',
    careersUrl: 'https://amazon.jobs/content/en/locations/india/hyderabad',
    careersLabel: 'Amazon Hyderabad careers',
    studentUrl: 'https://amazon.jobs/content/en/career-programs/university-students',
    studentLabel: 'Amazon university student programs',
    roles: ['Software engineering', 'Cloud platforms', 'Data & AI'],
    skills: ['Programming fundamentals', 'Data structures & algorithms', 'SQL', 'Systems concepts'],
    verifiedInterviewNotes: [],
    unverifiedInterviewNotes: [],
  },
];
