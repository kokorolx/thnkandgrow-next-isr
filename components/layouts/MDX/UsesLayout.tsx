import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

export default function UsesLayout({ children }: Props) {
  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          What I Use
        </h1>
        <span className="text-gray-700  dark:text-gray-300">
          Inspired by{' '}
          <a
            href="https://wesbos.com/uses"
            className="underline-magical"
            target="_blank"
            rel="noreferrer"
          >
            Wes bos
          </a>
        </span>
      </div>
      <div className="prose max-w-none pb-8 text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
