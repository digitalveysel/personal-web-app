'use client';

import SocialButton from '../elements/SocialButton';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-end">
      <ul className="flex flex-col gap-5">
        <li>
          <SocialButton brand="linkedin" href="https://linkedin.com/in/digitalveysel" />
        </li>
        <li>
          <SocialButton brand="github" href="https://github.com/digitalveysel" />
        </li>
        <li>
          <SocialButton brand="behance" href="https://behance.com/digitalveysel" />
        </li>
        <li>
          <SocialButton brand="x" href="https://x.com/digitalveysel" />
        </li>
      </ul>
    </footer>
  );
}
