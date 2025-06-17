import { BrandIconType } from '@/components/ui/BrandIcon';

type PopularTag = {
  href: string;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/MathandProgramming',
    slug: 'MathandProgramming',
    title: 'Math and Programming',
  },
  {
    href: '/tags/MachineLearning',
    slug: 'MachineLearning',
    title: 'Machine Learning',
  },
  {
    href: '/tags/Deep Learning',
    slug: 'DeepLearning',
    title: 'Deep Learning',
  }
];

export default popularTags;
