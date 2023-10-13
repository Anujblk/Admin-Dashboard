import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 229 229' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={114.5} cy={114.5} r={114.5} fill='white' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
