import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSwim = (
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
      <g clipPath="url(#swim_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm27.448 28.902c.484-.238.688-.833.456-1.33-.858-1.838-2.358-3.09-4.183-3.902-1.96-.872-2.95-1.734-3.448-2.368-.464-.591-.601-1.107-.626-1.576-.056-1.07.402-2.086.952-3.25l.002-.003c.067-.142.135-.286.2-.428.818-1.77.074-3.876-1.652-4.707-1.723-.83-3.782-.079-4.598 1.687-.028.062-.07.145-.127.264l-.013.026c-.506 1.029-1.828 3.72-1.667 6.79a9.761 9.761 0 0 0 1.757 5.106l-5.816 1.84c-.512.161-.8.72-.642 1.245a.967.967 0 0 0 1.214.66l7.2-2.277a.985.985 0 0 0 .653-.699 1.015 1.015 0 0 0-.234-.938 9.454 9.454 0 0 1-.48-.565c-1.152-1.465-1.636-3.01-1.713-4.48-.131-2.511.974-4.79 1.474-5.81l.005-.01c.053-.107.104-.211.144-.298a1.503 1.503 0 0 1 2.018-.737 1.553 1.553 0 0 1 .723 2.049l-.195.415-.037.077c-.507 1.073-1.193 2.522-1.107 4.15.045.865.32 1.786 1.053 2.72.748.952 2.028 1.985 4.187 2.946 1.51.672 2.597 1.632 3.205 2.935a.96.96 0 0 0 1.295.468ZM38 21a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM4.222 37.379a1.043 1.043 0 0 1 1.44-.163l1.623 1.254c.902.697 2.19.646 3.032-.12l.09-.081a4.327 4.327 0 0 1 5.795 0 2.237 2.237 0 0 0 2.996 0 4.327 4.327 0 0 1 5.795 0c.836.76 2.164.757 3.015-.017 1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047 1.512-1.475 3.933-1.565 5.557-.209l1.434 1.199c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.739-2.94.017-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0 4.327 4.327 0 0 1-5.795 0 2.237 2.237 0 0 0-2.996 0l-.09.081a4.463 4.463 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405Zm1.44-6.163a1.043 1.043 0 0 0-1.44.163.983.983 0 0 0 .167 1.405l1.622 1.253a4.463 4.463 0 0 0 5.706-.225l.09-.08a2.237 2.237 0 0 1 2.995 0 4.327 4.327 0 0 0 5.795 0 2.237 2.237 0 0 1 2.996 0c1.64 1.49 4.19 1.46 5.815-.018.83-.755 2.124-.759 2.938-.017l.07.063c1.613 1.467 4.127 1.425 5.686-.095a2.08 2.08 0 0 1 2.771-.104l1.434 1.198c.43.36 1.077.311 1.446-.108a.983.983 0 0 0-.111-1.41l-1.434-1.199c-1.623-1.356-4.044-1.266-5.556.209a2.078 2.078 0 0 1-2.836.047l-.07-.064c-1.618-1.472-4.136-1.44-5.738.018-.851.774-2.18.778-3.015.017a4.327 4.327 0 0 0-5.795 0 2.237 2.237 0 0 1-2.996 0 4.327 4.327 0 0 0-5.796 0l-.089.081a2.371 2.371 0 0 1-3.032.12l-1.622-1.254Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="swim_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSwim);
export default ForwardRef;
