import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUltrasoundScanner = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.978 8.354a49.084 49.084 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81a52.79 52.79 0 0 0-.07.174c-.227.57-.48 1.206-.868 1.693-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.214-1.988c.476-.052.637-.187.76-.342.197-.247.343-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.084 47.084 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088-.385-.486-.638-1.12-.865-1.69a34.27 34.27 0 0 0-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875Zm9.664 3.712A14 14 0 0 1 33.9 15.1a1 1 0 0 1-1.415 1.415 12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1c1.3-1.3 2.844-2.33 4.542-3.034Zm-.632 4.927a10 10 0 0 1 12.008.02 1 1 0 0 1-1.204 1.598 8 8 0 0 0-9.606-.017 1 1 0 1 1-1.198-1.601Zm.99 6.07v1.808a9.62 9.62 0 0 1 .149-.057C20.253 24.399 21.872 24 24 24s3.747.4 4.851.814l.149.057v-1.807a7.47 7.47 0 0 0-.851-.378C27.253 22.351 25.872 22 24 22c-1.872 0-3.253.35-4.149.686a7.47 7.47 0 0 0-.851.378Zm11-.563.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 0 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8-.6-.8.003-.002.005-.004.01-.007a1.683 1.683 0 0 1 .127-.088c.08-.052.194-.123.34-.205a9.11 9.11 0 0 1 1.264-.58C20.253 20.399 21.872 20 24 20s3.747.4 4.851.814a9.11 9.11 0 0 1 1.264.58 5.837 5.837 0 0 1 .467.293l.01.007.005.004h.001l.002.002-.6.8Zm-1.012 4.558a7.48 7.48 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26c-1.872 0-3.253.35-4.149.686a7.468 7.468 0 0 0-.839.372c.045.497.213.977.492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 1 0 6 0v-3.768a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395ZM24 31a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUltrasoundScanner);
export default ForwardRef;
