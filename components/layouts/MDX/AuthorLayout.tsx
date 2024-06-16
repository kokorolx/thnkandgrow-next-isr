import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, occupation, company, name } = content;

  return (
    <div className="pt-8 author-container">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">{name}</h1>
          <h2 className="text-sm font-normal md:text-base">
            {occupation} <span className="font-semibold">{company}</span>
          </h2>
          <p>
            Cloud Engineer - Software architect - Full Stack Developer, and Tech Enthusiast. I love
            to learn and share.
          </p>
        </div>
        <div>
          <Image
            alt="Hoang-Tam Lee"
            height={130}
            width={130}
            src={avatar || ''}
            className="rounded-full object-scale-down grayscale"
          />
        </div>
      </div>
      <div className="prose max-w-none pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
