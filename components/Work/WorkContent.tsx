import Image from 'next/image';
import { WorkContainer } from './WorkContainer';
import { WorkLeft } from './WorkLeft';
import { WorkRight } from './WorkRight';
import { WorkTile } from './workTiles';

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, image, link, issuedBy, issuedOn, issuedUsing } = work;

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">{title}</h2>
        <div className="text-xl font-medium md:text-xl xl:text-2xl">{description}</div>
      </WorkLeft>
      <WorkRight progress={progress}>
        <div className="text-center drop-shadow-2xl sm:mt-10 md:mt-24">
          <a href={link} target="_blank">
            <Image src={image.src} alt={title} width={image.width} height={image.height} />
          </a>
          <div className="text-black">
            <span className="text-xl font-bold mt-2">Issued on:</span> {issuedOn}
          </div>
          <div className="text-black">
            <span className="text-xl font-bold mt-2">Issued using:</span> {issuedUsing}
          </div>
          <div className="text-black">
            <span className="text-xl font-bold mt-2">Issued by:</span> {issuedBy}
          </div>
        </div>
      </WorkRight>
    </WorkContainer>
  );
}
