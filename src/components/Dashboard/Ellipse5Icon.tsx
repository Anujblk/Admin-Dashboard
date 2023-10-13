import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 169 169' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={84.5} cy={84.5} r={84.5} stroke='#F1EFFB' strokeWidth={20} />
  </svg>
);

const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };
