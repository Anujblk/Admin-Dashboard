import { memo, SVGProps } from 'react';

const Rectangle15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 968 151' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 30C0 13.4315 13.4315 0 30 0H938C954.569 0 968 13.4315 968 30V121C968 137.569 954.569 151 938 151H30C13.4315 151 0 137.569 0 121V30Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle15Icon);
export { Memo as Rectangle15Icon };
