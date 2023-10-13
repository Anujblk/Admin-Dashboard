import { memo, SVGProps } from 'react';

const ChevronDown2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6 9L12 15L18 9' stroke='#757575' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ChevronDown2Icon);
export { Memo as ChevronDown2Icon };
