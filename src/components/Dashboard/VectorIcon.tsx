import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 0L7.46667 5.88L4.97778 2.52L0 7'
      stroke='#00AC4F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
