import { memo, SVGProps } from 'react';

const ChevronRight2Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6 12L10 8L6 4' stroke='#9197B3' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ChevronRight2Icon4);
export { Memo as ChevronRight2Icon4 };
