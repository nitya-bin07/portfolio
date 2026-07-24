import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'futureme',
    title: 'FutureMe',
    description:
      'A full-stack letters-to-your-future-self app — write a letter today, schedule it to arrive in your inbox months or years from now.',
    stack: ['Next.js 14', 'Express', 'PostgreSQL', 'Stripe', 'Nodemailer'],
    liveUrl: 'https://futureme.example.com',
    githubUrl: 'https://github.com/nitya-bin07/Futureme',
    highlights: [
      'Migrated database from SQLite to PostgreSQL for production reliability',
      'Integrated real Stripe Checkout with webhook verification',
      'Built a scheduled email delivery system using node-cron',
    ],
  },
  {
    slug: 'wanderlust',
    title: 'Wanderlust',
    description:
      'An Airbnb-style listings platform where users can browse, list, and review stays.',
    stack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    liveUrl: 'https://wanderlust-9ma5.onrender.com',
    githubUrl: 'https://github.com/nitya-bin07/wanderlust',
    highlights: [
      'Implemented image uploads via Cloudinary',
      'Deployed on Render with MongoDB Atlas',
      'Resolved production issues with IP whitelisting and credential handling',
    ],
  },
]
