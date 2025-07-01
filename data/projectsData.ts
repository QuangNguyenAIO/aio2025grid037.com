import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'work',
    title: 'Our website',
    imgSrc: '/static/images/projects/karhdo-blog.png',
    repo: 'Karhdo/aio2025grid037.com',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
  {
    type: 'work',
    title: 'RAG - chatbot',
    imgSrc: '/static/images/projects/rag-chatbot.png',
    repo: '',
    builtWith: ['torch', 'python', 'transformers', 'langchain', 'streamlit'],
  },
];

export default projectsData;
