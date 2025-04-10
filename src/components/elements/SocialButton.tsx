'use-client';

import BehanceIcon from '../icons/Behance';
import GithubIcon from '../icons/Github';
import LinkedInIcon from '../icons/LinkedIn';
import XIcon from '../icons/X';

type IBrand = 'linkedin' | 'github' | 'behance' | 'x';

interface ISocialButtonProps {
  brand: IBrand;
  href: string;
  className?: string;
}

const iconMap: Record<IBrand, React.ElementType> = {
  linkedin: LinkedInIcon,
  github: GithubIcon,
  behance: BehanceIcon,
  x: XIcon,
};

export default function SocialButton({
  brand = 'linkedin',
  href = 'https://linkedin.com',
  className = 'text-foreground-default',
}: ISocialButtonProps) {
  const Icon = iconMap[brand];

  return (
    <a
      href={href}
      className={`${className} text-foreground-medium hover:text-primary transition`}
      rel="noopener"
    >
      <Icon />
    </a>
  );
}
