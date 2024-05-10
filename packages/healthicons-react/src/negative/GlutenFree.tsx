import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlutenFree = (
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
      <g clipPath="url(#gluten_free_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 42c4.61 0 8.817-1.734 12.001-4.584l-5.348-5.349A6.992 6.992 0 0 1 27.92 34.3L25 35.64V38h-2v-2.359L20.079 34.3A7 7 0 0 1 16 27.939V26a1 1 0 0 1 .724-.961 6.99 6.99 0 0 1-.724-3.1V20a1 1 0 0 1 1.417-.909l.06.027A6.99 6.99 0 0 1 17 16.58V15a1 1 0 0 1 1.356-.934l2.136.813c.084.032.167.066.25.1a7.767 7.767 0 0 1 1.868-4.893l.63-.737a1 1 0 0 1 1.52 0l.63.736a7.767 7.767 0 0 1 1.869 4.895c.082-.035.165-.069.249-.1l2.136-.815A1 1 0 0 1 31 15v1.58a6.99 6.99 0 0 1-.476 2.538l.059-.027A1 1 0 0 1 32 20v1.939a6.99 6.99 0 0 1-.724 3.1A1.001 1.001 0 0 1 32 26v1.939a6.99 6.99 0 0 1-.378 2.269L37.416 36A17.933 17.933 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l2.942 2.943a1 1 0 0 1-1.414 1.414l-2.97-2.97A17.937 17.937 0 0 0 6 24c0 9.941 8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm1.121-27.6A5.768 5.768 0 0 0 24 11.543a5.768 5.768 0 0 0-1.121 4.859c.434.422.81.897 1.121 1.414.31-.517.687-.992 1.121-1.414ZM23 21.42v.129l-.78-.297A5 5 0 0 1 19 16.579v-.128l.78.297A5 5 0 0 1 23 21.421Zm2.78-.168-.78.297v-.128a5 5 0 0 1 3.22-4.673l.78-.297v.128a5 5 0 0 1-3.22 4.673ZM25 26.107v1.333l2.087-.958A5 5 0 0 0 30 21.94v-.38l-2.954 1.357A3.512 3.512 0 0 0 25 26.107Zm-2 .954a5 5 0 0 0-2.913-4.543L18 21.56v.379a5 5 0 0 0 2.913 4.543L23 27.44v-.379Zm0 6v.38l-2.087-.959A5 5 0 0 1 18 27.94v-.38l2.087.959A5 5 0 0 1 23 33.062Zm4.087-.579L25 33.44v-1.333c0-1.372.8-2.619 2.046-3.191L30 27.56v.379a5 5 0 0 1-2.913 4.543Z"
        />
      </g>
      <defs>
        <clipPath id="gluten_free_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGlutenFree);
export default ForwardRef;
