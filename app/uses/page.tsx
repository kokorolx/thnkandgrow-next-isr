import { MDXLayoutRenderer } from '@/components/MDXComponents';
import UsesLayout from '@/layouts/MDX/UsesLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';

export const metadata = {
  title: 'Uses - Le Hoang Tam',
  description: 'What I Use - Le Hoang Tam',
};

export default function Uses() {
  const author = allAuthors.find((p) => p.slug === 'uses');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <UsesLayout>
        <MDXLayoutRenderer content={author} />
      </UsesLayout>
    </MainLayout>
  );
}
