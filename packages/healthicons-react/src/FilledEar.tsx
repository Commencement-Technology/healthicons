import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledEar = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12.154 18c0-6.075 5.303-11 11.846-11 6.542 0 11.846 4.925 11.846 11 0 3.807-2.082 7.163-5.25 9.139-2.689 1.676-5.52 4.315-5.52 7.772V35c0 3.314-2.892 6-6.46 6-3.57 0-6.462-2.686-6.462-6v-2H10v2c0 4.418 3.857 8 8.615 8s8.616-3.582 8.616-8v-.089c0-2.404 2.013-4.52 4.565-6.112C35.536 26.467 38 22.501 38 18c0-7.18-6.268-13-14-13s-14 5.82-14 13h2.154ZM23 14c-1.948 0-3.528 1.315-3.911 3.02h.028c.813.042 1.918.158 3.038.464 1.111.304 2.312.816 3.247 1.697.964.909 1.598 2.169 1.598 3.827 0 .03-.001.06-.004.09-.146 1.61-.54 2.84-1.137 3.762-.606.937-1.386 1.503-2.202 1.824-.798.314-1.598.382-2.249.382-.327 0-.629-.018-.878-.033l-.099-.007a15.753 15.753 0 0 0-.3-.018 1.783 1.783 0 0 0-.041.077 5.985 5.985 0 0 0-.277.674c-.064.174-.137.374-.233.614-.21.525-.511 1.178-1.017 1.7-.544.559-1.284.927-2.252.927-.838 0-1.532-.192-2.076-.565a2.739 2.739 0 0 1-1.031-1.34A3.529 3.529 0 0 1 13 29.891a3.728 3.728 0 0 1 .04-.546l.003-.014.001-.005v-.003c0-.001 0-.002.984.178l.984.179v-.003l.001-.003v-.003.003l-.004.038a1.727 1.727 0 0 0 .073.695.741.741 0 0 0 .281.376c.14.096.417.216.948.216.402 0 .632-.131.817-.321.221-.228.405-.574.595-1.049.046-.115.097-.253.152-.401.13-.35.282-.76.436-1.058a2.88 2.88 0 0 1 .12-.213c.556-1.423 1.417-3.915 1.069-4.958-.233-.698-.682-1.396-1.096-1.943-.504-.422-.888-.83-1.12-1.318-.286-.604-.285-1.235-.284-1.815v-.103c0-3.248 2.721-5.82 6-5.82s6 2.572 6 5.82h-2c0-2.075-1.756-3.82-4-3.82Zm-2.808 14.92-.009.01a.045.045 0 0 1 .01-.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledEar);
export default ForwardRef;
