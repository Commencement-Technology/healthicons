import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChildCognition = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#child_cognition_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm37.264 26.199-.165-.353c-.714-1.524-.923-3.138-.987-4.57a37.873 37.873 0 0 1-.02-2.09l.003-.267c.006-.566.012-1.08 0-1.574a10.152 10.152 0 0 0-1.772-5.473 12.077 12.077 0 0 0-4.803-3.58l-.033-.014-.033-.015a19.632 19.632 0 0 0-8.158-1.755h-.003a13.477 13.477 0 0 0-9.435 3.842 12.905 12.905 0 0 0-3.884 9.214c.002 2.044.597 4.376 1.63 6.532 1.036 2.162 2.44 3.997 3.917 5.133l.78.6v.984l.007 7.932c.325.402.957.898 1.904 1.328 1.159.526 2.323.739 2.997.683l.082-.006h.081c1.956-.002 2.871-.556 3.265-.892.143-.122.242-.237.308-.327l-.002-2.953-.002-2.583 2.497.644h.003l.013.003.08.02c.073.016.189.042.34.072.302.06.742.138 1.272.203 1.077.132 2.45.202 3.777.006 1.337-.197 2.451-.637 3.217-1.371.714-.684 1.341-1.83 1.34-3.925l-.002-1.71 1.681-.266h.002l.008-.002.026-.005.04-.007a6.094 6.094 0 0 0 1.16-.351c.32-.136.552-.278.688-.398a.76.76 0 0 0 .06-.058 1.285 1.285 0 0 0-.093-.342c-.11-.278-.297-.6-.536-.932a8.603 8.603 0 0 0-.902-1.053l-.034-.033-.021-.02-.009-.008v-.001l-.284-.262Zm1.905 2.619-.003.005a.02.02 0 0 1 .003-.005ZM24.945 40.627l-.002-2.05s.802.206 2 .35c3.541.427 10.543.311 10.537-7.282 0 0 3.302-.523 3.635-2.41.333-1.888-2.205-4.239-2.205-4.239-.864-1.842-.84-4.012-.815-6.05a47.49 47.49 0 0 0 0-1.65 12.155 12.155 0 0 0-2.165-6.618 14.076 14.076 0 0 0-5.648-4.236 21.632 21.632 0 0 0-8.99-1.934 15.477 15.477 0 0 0-10.836 4.415 14.906 14.906 0 0 0-4.482 10.643c.004 4.8 2.758 10.502 6.328 13.249l.007 8.494c1.014 2.122 4.834 3.625 7.065 3.44 4.738-.003 5.572-2.74 5.572-2.74l-.001-1.382Zm2.48-20.155c-.156.174-.237.265-.727.266a3.918 3.918 0 0 1-2.166-.65 4.357 4.357 0 0 1-1.607 1.05c-.552.264-.79.653-1.083 1.13v.001c-.052.086-.107.174-.165.265a3.704 3.704 0 0 0-.582 1.999l.003 3.977-4.116.004c-.104-.852-.3-1.67-.772-2.395a5.822 5.822 0 0 0-1.853-1.793 3.853 3.853 0 0 1-1.62-1.267 3.703 3.703 0 0 1-.712-1.9 3.685 3.685 0 0 1-.263-4.852 3.345 3.345 0 0 1-.137-.994 3.685 3.685 0 0 1 .752-2.235l1.97-1.36a3.781 3.781 0 0 1 1.418-1.621 3.933 3.933 0 0 1 3.008-.505 3.906 3.906 0 0 1 2.308-.995l4.19.28a3.885 3.885 0 0 1 2.272 1.53h.272l2.421.822a3.74 3.74 0 0 1 1.356 2.118 3.91 3.91 0 0 1 1.932 1.749c.419.781.55 1.678.37 2.542a3.828 3.828 0 0 1-1.357 2.202l-2.479.88a3.932 3.932 0 0 1-2.194-.634c-.234.155-.35.285-.44.386Zm-5.45-1.122-8 1.252 2.807-7.002 5.192 5.75Zm2.863-7.824-2.368 4.4 4.483 2.324 2.368-4.4-4.483-2.324Zm9.14 12.56a1.5 1.5 0 1 1-3 .003 1.5 1.5 0 0 1 3-.003ZM16.985 32.6l4-.003-.002-2-4 .003.002 2Zm4.003 3.997-4 .003-.001-2 4-.003.001 2ZM16.992 40.6l4-.003-.002-2-4 .003.002 2Z"
        />
      </g>
      <defs>
        <clipPath id="child_cognition_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChildCognition);
export default ForwardRef;
