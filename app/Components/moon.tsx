import React, { forwardRef, memo } from "react";

type MoonStarProps = React.SVGProps<SVGSVGElement> & {
  /** size in px or any valid CSS size (e.g. "1.5rem") */
  size?: number | string;
  /** stroke / fill color; defaults to currentColor */
  color?: string;
  /** accessible title (used for aria-label and <title>) */
  title?: string;
};

const MoonStar = forwardRef<SVGSVGElement, MoonStarProps>(
  ({ size = 24, color = "currentColor", title = "Moon and star", className = "", ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        role="img"
        aria-label={title}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        {/* crescent moon */}
        <path
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          fill="none"
        />

        {/* small five-point star */}
        <polygon
          points="16.5,6.2 17.2,7.9 19.0,8.1 17.6,9.4 17.9,11.2 16.2,10.2 14.4,11.2 14.7,9.4 13.3,8.1 15.1,7.9"
          fill="none"
        />
      </svg>
    );
  }
);

MoonStar.displayName = "MoonStar";

export default memo(MoonStar);
