import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 181 181' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M90.5 0C109.651 2.28368e-07 128.307 6.07496 143.786 17.3508C159.265 28.6267 170.768 44.5222 176.641 62.7502L137.701 75.2945C134.483 65.3065 128.18 56.5966 119.698 50.418C111.217 44.2394 100.994 40.9106 90.5 40.9106L90.5 0Z'
      fill='url(#paint0_linear_604_143)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_604_143'
        x1={160.638}
        y1={0.00000461543}
        x2={90.5}
        y2={181}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF007A' />
        <stop offset={1} stopColor='#CDF4FF' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
