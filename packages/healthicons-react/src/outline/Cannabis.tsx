import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCannabis = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.86 5.488a1 1 0 0 0-1.72 0C21.149 8.834 20 12.78 20 17c0 .407.01.812.032 1.213A19.175 19.175 0 0 0 9.326 11.9a1 1 0 0 0-1.184 1.184 19.175 19.175 0 0 0 7.94 11.954A15.857 15.857 0 0 0 15 25c-3.531 0-6.819 1.176-9.588 3.191a1 1 0 0 0 0 1.618C8.182 31.824 11.469 33 15 33a15.74 15.74 0 0 0 3.14-.316l-.006.012c-1.215 2.105-1.644 4.466-1.396 6.801a1 1 0 0 0 1.4.809c1.96-.87 3.657-2.24 4.862-4.074V41h2v-4.768c1.205 1.834 2.902 3.203 4.862 4.074a1 1 0 0 0 1.4-.809c.248-2.335-.18-4.696-1.396-6.801l-.007-.012A15.74 15.74 0 0 0 33 33c3.532 0 6.819-1.176 9.588-3.191a1 1 0 0 0 0-1.618C39.818 26.176 36.532 25 33 25c-.364 0-.724.012-1.083.037a19.175 19.175 0 0 0 7.94-11.954 1 1 0 0 0-1.182-1.183 19.175 19.175 0 0 0-10.707 6.313c.021-.401.032-.806.032-1.213 0-4.22-1.148-8.166-3.14-11.512ZM24 25.791a19.38 19.38 0 0 1 1.345-3.597C25.772 20.539 26 18.798 26 17c0-3.196-.72-6.213-2-8.884-1.28 2.671-2 5.688-2 8.884 0 1.798.228 3.539.655 5.194A19.38 19.38 0 0 1 24 25.79Zm9.222-4.427a17.103 17.103 0 0 1-6.895 4.204 22.33 22.33 0 0 0 .9-2.666c.8-1.58 1.855-3.055 3.166-4.367a17.11 17.11 0 0 1 7.097-4.267 17.11 17.11 0 0 1-4.268 7.096Zm-12.448 1.538c.245.915.546 1.805.899 2.666a17.103 17.103 0 0 1-6.895-4.204 17.11 17.11 0 0 1-4.268-7.096 17.11 17.11 0 0 1 7.097 4.267 17.076 17.076 0 0 1 3.167 4.367Zm1.985 8.072a16.76 16.76 0 0 1-1.172.59 8.846 8.846 0 0 0-1.72 2.132 8.95 8.95 0 0 0-1.184 4.05 8.95 8.95 0 0 0 2.915-3.05 8.92 8.92 0 0 0 1.161-3.722ZM15 27c2.464 0 4.804.656 6.901 1.837-.493.305-.963.646-1.404 1.022A13.843 13.843 0 0 1 15 31c-2.576 0-5.015-.716-7.183-2 2.168-1.284 4.607-2 7.183-2Zm12.503 2.859c-.441-.377-.91-.717-1.404-1.022C28.196 27.656 30.536 27 33 27c2.576 0 5.015.716 7.183 2-2.168 1.284-4.607 2-7.183 2-1.927 0-3.779-.401-5.497-1.141Zm-2.262 1.115a8.92 8.92 0 0 0 1.16 3.722 8.95 8.95 0 0 0 2.916 3.05 8.95 8.95 0 0 0-1.183-4.05 8.846 8.846 0 0 0-1.72-2.132 16.76 16.76 0 0 1-1.173-.59Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCannabis);
export default ForwardRef;
