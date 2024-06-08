import Image from 'next/image';
import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import MediaIcon from '@mui/icons-material/YouTube';

const ProjectCard = ({ project }: any) => (
  <div className='project'>
    <div>
      {project.thumbnail && (
        <Image
          className='project__thumbnail'
          src={project.thumbnail}
          alt='thumbnail'
          width={300}
          height={200}
        />
      )}

      {project.name && <h3>{project.name}</h3>}

      {project.description && (
        <div className='project__description paragraph__list'>
          {project.description.map((item: any) => (
            <p key={uniqid()}>{item}</p>
          ))}
        </div>
      )}
    </div>

    <div>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item: any) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode ? (
        <a
          href={project.sourceCode}
          target='_blank'
          rel='noreferrer'
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      ) : (
        <a
          href='#'
          aria-label='source code'
          className='link link--icon disabled'
        >
        </a>
      )}

      {project.livePreview ? (
        <a
          href={project.livePreview}
          target='_blank'
          rel='noreferrer'
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      ) : (
        <a
          href='#'
          aria-label='live preview'
          className='link link--icon disabled'
        >
        </a>
      )}

      {project.externalVideoSource ? (
        <a
          href={project.externalVideoSource}
          target='_blank'
          rel='noreferrer'
          aria-label='live preview'
          className='link link--icon'
        >
          <MediaIcon />
        </a>
      ) : (
        <a
          href='#'
          aria-label='live preview'
          className='link link--icon disabled'
        >
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
