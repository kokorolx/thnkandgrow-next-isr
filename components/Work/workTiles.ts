export type WorkTile = {
  title: string;
  intro: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  link: string;
  issuedOn: string;
  issuedBy: string;
  issuedUsing: string;
};

export const workTiles: WorkTile[] = [
  {
    title: `AWS Knowledge: Solutions Architect`,
    intro: `I've earned`,
    description: `Earners of this badge have developed technical skills and knowledge of AWS concepts and services with a focus on designing solutions on AWS using best practices.`,
    image: {
      src: '/static/images/skill-solution-architect.webp',
      width: 680,
      height: 680,
    },
    link: 'https://www.credly.com/badges/6fed4a9a-21f2-4acf-9385-7223a3168a86',
    issuedOn: 'May 31, 2024',
    issuedBy: 'Amazon Web Services Training and Certification',
    issuedUsing: 'using Credly',
  },
  {
    title: `AWS Knowledge: Amazon EKS`,
    intro: `I've earned`,
    description: `Earners of this badge have developed knowledge of running microservices and container workloads with Amazon Elastic Kubernetes Service (Amazon EKS).`,
    image: {
      src: '/static/images/skill-aws-eks.webp',
      width: 680,
      height: 680,
    },
    link: 'https://www.credly.com/badges/df07128a-b1d8-4e2b-be42-7a9463f4aafe',
    issuedOn: 'June 05, 2024',
    issuedBy: 'Amazon Web Services Training and Certification',
    issuedUsing: 'using Credly',
  },
  {
    title: `AWS Knowledge: Cloud Essentials`,
    intro: `I've earned`,
    description: `Earners of this badge have developed knowledge of foundational AWS Cloud concepts with a focus on AWS Compute, Storage, Networking and Database services, security, architecture, pricing, and support.`,
    image: {
      src: '/static/images/skill-cloud-essentials.webp',
      width: 680,
      height: 680,
    },
    link: 'https://www.credly.com/badges/9ce340b2-d4a4-46d8-ac8c-4a2451f33f5d',
    issuedOn: 'May 05, 2024',
    issuedBy: 'Amazon Web Services Training and Certification',
    issuedUsing: 'using Credly',
  },
];
