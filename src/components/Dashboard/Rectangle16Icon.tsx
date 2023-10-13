import { memo, SVGProps } from 'react';

const Rectangle16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 628 378' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 30C0 13.4315 13.4315 0 30 0H598C614.569 0 628 13.4315 628 30V348C628 364.569 614.569 378 598 378H30C13.4314 378 0 364.569 0 348V30Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle16Icon);
export { Memo as Rectangle16Icon };
