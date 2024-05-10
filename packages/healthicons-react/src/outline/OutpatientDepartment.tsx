import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOutpatientDepartment = (
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
      <path d="M15.08 27.602c.243-1.961.832-3.73 1.495-5.15l.577 2.197a1.5 1.5 0 0 0 1.45 1.119h4.064a1.5 1.5 0 1 0 0-3H19.76l-1.174-4.467a1.5 1.5 0 0 0-1.45-1.119c-2.111 0-3.801 1.261-4.896 2.82-1.1 1.565-1.74 3.601-1.74 5.613 0 .578.143 1.168.299 1.658.162.508.37 1.01.569 1.44a19.364 19.364 0 0 0 .712 1.394v6.348a1.5 1.5 0 0 0 3 0v-8.853ZM22.382 15.188l.025-.032c.25-.318.439-.686.548-1.085-.99.159-1.904.221-2.832.097l-.207-.03-.015-.003c-.822-.136-1.622-.416-2.48-.857l-.009-.005c-.213-.11-.43-.23-.65-.36a3.046 3.046 0 0 0 .096 1.199c.346 1.201 1.416 2.106 2.72 2.236a3.18 3.18 0 0 0 2.804-1.16ZM19.9 10.182a3.211 3.211 0 0 0-1.899.62 3.16 3.16 0 0 0-.359.309l.132.078c.767.45 1.407.723 2 .877l.127.03c.165.039.327.068.488.09.67.09 1.367.051 2.245-.09h.003a13.925 13.925 0 0 0 .174-.03 3.051 3.051 0 0 0-.24-.446l-.014-.023a3.173 3.173 0 0 0-2.656-1.415ZM24.246 14.818c.482 0 .896-.467 1.081-1.14.067-.241.104-.51.104-.792 0-.282-.037-.55-.104-.792-.185-.672-.6-1.14-1.08-1.14-.45 0-.842.41-1.043 1.012a2.988 2.988 0 0 0-.143.92c0 .283.037.55.104.793.186.671.6 1.14 1.081 1.14ZM37.282 16.364c0 1.707-1.414 3.09-3.16 3.09-1.745 0-3.16-1.383-3.16-3.09 0-1.707 1.415-3.091 3.16-3.091 1.746 0 3.16 1.384 3.16 3.09Z" />
      <path d="m30.433 25.77.605 1.317a1.5 1.5 0 0 0 1.363.873h4.091a1.5 1.5 0 1 0 0-3h-3.13l-2.11-4.587a1.5 1.5 0 0 0-1.671-.84l.308 1.466a81.836 81.836 0 0 0-.311-1.466h-.003l-.005.002-.012.002-.03.007a2.512 2.512 0 0 0-.28.083 4.6 4.6 0 0 0-.618.265c-.488.251-1.1.665-1.695 1.334-1.211 1.361-2.214 3.61-2.214 7.244 0 .68.308 1.215.617 1.576.068.08.14.155.214.227H17.53V38h1.58v-5.409h8.69V38h1.58v-5.852c.59.182 1.148.332 1.592.448l.413.107.118.03.264.385c.318.469.727 1.085 1.133 1.702a404.833 404.833 0 0 1 1.463 2.24l.136.21a1.5 1.5 0 1 0 2.518-1.63l-.137-.212a477.617 477.617 0 0 0-1.474-2.257c-.408-.62-.826-1.25-1.156-1.738a31.451 31.451 0 0 0-.43-.62 7.04 7.04 0 0 0-.168-.226 2.584 2.584 0 0 0-.1-.121l-.003-.003c-.019-.022-.126-.145-.281-.255-.179-.127-.357-.19-.38-.198h-.002a2.643 2.643 0 0 0-.154-.052 8.392 8.392 0 0 0-.272-.076l-.343-.088-.388-.1c-.506-.132-1.124-.3-1.746-.501-.047-1.066.016-1.88.191-2.605a6.38 6.38 0 0 1 .258-.818Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm31 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutpatientDepartment);
export default ForwardRef;
