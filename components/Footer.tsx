import siteMetadata from 'content/siteMetadata';
import Link from 'next/link';
import { Suspense } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import SectionContainer from './SectionContainer';
import NowPlaying from './Spotify/NowPlaying';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-gray-500 dark:text-gray-400">
          <Suspense fallback="loading...">
            <NowPlaying />
          </Suspense>
          <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link href="/">{siteMetadata.title}</Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5">
              <li>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillLinkedin className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a href={siteMetadata.github} target="_blank" rel="noreferrer" aria-label="github">
                  <FaGithub className="sm:text-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul>
              <li>
                Email:{' '}
                <a
                  href="mailto:hello@thnkandgrow.com"
                  className="text-blue-400 hover:text-blue-600"
                >
                  hello@thnkandgrow.com
                </a>
              </li>
              <li>Address: Ho Chi Minh - Vietnam</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="https://thnkandgrow.com" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="https://thnkandgrow.com/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="https://thnkandgrow.com/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="https://thnkandgrow.com/projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="https://blog.thnkandgrow.com/" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="mail:hello@thnkandgrow.com" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul>
              <li>
                <a
                  href="https://blog.thnkandgrow.com/blog/category/technology/"
                  className="hover:underline"
                >
                  Full-Stack Development
                </a>
              </li>
              <li>
                <a
                  href="https://blog.thnkandgrow.com/blog/category/aws/"
                  className="hover:underline"
                >
                  AWS Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://blog.thnkandgrow.com/blog/category/technology/ruby-on-rails/"
                  className="hover:underline"
                >
                  Ruby on Rails
                </a>
              </li>
              <li>
                <a
                  href="https://blog.thnkandgrow.com/blog/category/technology/"
                  className="hover:underline"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a href="https://blog.thnkandgrow.com/blog/tag/docker/" className="hover:underline">
                  Docker Orchestration
                </a>
              </li>
              <li>
                <a
                  href="https://blog.thnkandgrow.com/blog/category/technology/database/"
                  className="hover:underline"
                >
                  Database Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
            <ul>
              <li>
                <a href="https://dly.to/y55fNZ3b21J" className="hover:underline">
                  Daily.dev
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/hoangtamle" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.github.com/kokorolx" className="hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-4 mt-4">
            <h4 className="hidden text-lg font-semibold mb-2">About Us</h4>
            <p className="hidden">
              Lê Hoàng Tâm with 7+ years of experience in delivering high-quality web applications,
              our team specializes in Full-Stack Development, AWS Solutions, and DevOps practices.
              We are committed to innovation and continuous improvement.
            </p>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
