import { memo, SVGProps } from 'react';

const Rectangle30Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 968 472' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 30C0 13.4314 13.4315 0 30 0H938C954.569 0 968 13.4315 968 30V442C968 458.569 954.569 472 938 472H30C13.4315 472 0 458.569 0 442V30Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle30Icon);
export { Memo as Rectangle30Icon };
