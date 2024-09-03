'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';
import ProjectItem from './ProjectItem';
import ProjectPreview from './ProjectPreview';
import { projects } from './constants';
import { ProjectModal } from './types';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function Projects() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<ProjectModal>({ active: false, index: 0 });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg text-center">
        <span role="img" aria-label="roadwork sign" className="text-3xl">
          🚧
        </span>
        <h1 className="text-3xl font-bold mb-4 text-white">Page Under Construction</h1>
        <p className="text-gray-700">
          I'm currently working on this page to bring you valuable content.
        </p>
        <p className="text-gray-700">Please check back soon for updates.</p>
      </div>
    </div>
  );

  return (
    <>
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <ProjectItem
            index={index}
            title={project.title}
            url={project.url}
            role={project.role}
            setModal={setModal}
          />
        </motion.div>
      ))}
      {breakpoint === 'desktop' && <ProjectPreview modal={modal} projects={projects} />}
    </>
  );
}
