import { memo, SVGProps } from 'react';

const ArrowUp1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10 3L10 15' stroke='#D0004B' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M15.8333 10L10 15.8333L4.16667 10'
      stroke='#D0004B'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowUp1Icon2);
export { Memo as ArrowUp1Icon2 };
