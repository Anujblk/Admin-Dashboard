import { memo, SVGProps } from 'react';

const ArrowUp1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10 17L10 5' stroke='#00AC4F' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M4.16667 10L10 4.16667L15.8333 10'
      stroke='#00AC4F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowUp1Icon);
export { Memo as ArrowUp1Icon };
