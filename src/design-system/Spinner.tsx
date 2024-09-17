import * as React from 'react';

export type SpinnerProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 20,
  className,
  ...props
}: SpinnerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    className={className}
    data-testid="spinner"
    {...props}
  >
    <path
      d="M 9.231 4.615 L 9.231 -0 L 10.769 -0 L 10.769 4.615 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.9166666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 12.026 4.952 L 14.334 0.955 L 15.666 1.724 L 13.358 5.721 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.8333333333333334s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 14.279 6.642 L 18.276 4.334 L 19.045 5.666 L 15.048 7.974 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.75s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 15.385 9.231 L 20 9.231 L 20 10.769 L 15.385 10.769 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.6666666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 15.048 12.026 L 19.045 14.334 L 18.276 15.666 L 14.279 13.358 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.5833333333333334s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 13.358 14.279 L 15.666 18.276 L 14.334 19.045 L 12.026 15.048 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 10.769 15.385 L 10.769 20 L 9.231 20 L 9.231 15.385 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.4166666666666667s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 7.974 15.048 L 5.666 19.045 L 4.334 18.276 L 6.642 14.279 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.3333333333333333s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 5.721 13.358 L 1.724 15.666 L 0.955 14.334 L 4.952 12.026 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.25s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 4.615 10.769 L 0 10.769 L 0 9.231 L 4.615 9.231 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.16666666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 4.952 7.974 L 0.955 5.666 L 1.724 4.334 L 5.721 6.642 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="-0.08333333333333333s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
    <path
      d="M 6.642 5.721 L 4.334 1.724 L 5.666 0.955 L 7.974 4.952 Z"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        begin="0s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </path>
  </svg>
);

export default Spinner;
