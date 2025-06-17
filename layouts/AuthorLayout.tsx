import { ReactNode } from 'react';
import type { Authors } from 'contentlayer/generated';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

import { CareerTimeline } from '@/components/about';
import { Link, Image, Button, Twemoji } from '@/components/ui';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content;

  return (
    <>
      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            Learn more about us and the purpose of this blog.
          </p>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 sm:pt-28">
            <Image src={avatar || ''} alt="avatar" width={192} height={192} className="h-48 w-48 rounded-full" />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>

            <div className="mt-2 flex gap-3">
              <Link href={`mailto:${email}`}>
                <Mail size={24} strokeWidth={1} />
              </Link>
              <Link href={github || ''} target="_blank">
                <Github size={24} strokeWidth={1} />
              </Link>
              <Link href={linkedin || ''} target="_blank">
                <Linkedin size={24} strokeWidth={1} />
              </Link>
              <Link href={twitter || ''} target="_blank">
                <Twitter size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>

          {/* <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">{children}</div> */}

          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">
            <h2>
              Hello everyone! <Twemoji className="mx-2" emoji="waving-hand" />
            </h2>
            <p>
              We are <strong>aio2025grid037.com </strong> – an AI research group also known as <strong>GRID037</strong>
            </p>
            <p>
              We are individuals who share a passion for AI and technology. Each of us comes from different backgrounds,
              but we all have one common goal:{' '}
              <strong>to explore, learn, and grow in the field of artificial intelligence.</strong>
            </p>
            <h2>What do we do??</h2>
            <p>
              We study together, share resources, solve problems ranging from basic to advanced, and build small
              projects to:
            </p>
            <ul>
              <li>Deepen our understanding of fundamental AI concepts</li>
              <li>
                Sharpen our skills in advanced topics like:
                <ul>
                  <li>Deep Learning</li>
                  <li>Computer Vision</li>
                </ul>
              </li>
              <li>Practice critical thinking and teamwork skills</li>
            </ul>

            <h2>Why did we create this blog?</h2>
            <p>
              We started this blog as a space to share knowledge and document our learning journey. Writing things down
              helps us reinforce what we’ve learned, and it’s also a way to give back to the community. We believe that{' '}
              <strong>learning is a journey best taken together</strong>. Through this blog, we hope to:
            </p>
            <ul>
              <li>Record and reflect on what we’ve learned</li>
              <li>Share helpful articles, resources, and projects</li>
              <li>Connect with others who share the same interests</li>
              <li>Inspire and motivate those who are beginning or continuing their journey into AI</li>
            </ul>

            <h2>Our vision</h2>
            <p>
              Our long-term goal at GRID037 is to build a sustainable learning community where people
              <strong>grow together, support one another, and maintain a positive, open, and creative spirit.</strong>
            </p>
            <p>
              If you have feedback, questions, or want to collaborate with us, feel free to reach out or leave a
              comment. We truly appreciate your thoughts!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
