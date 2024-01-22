import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChills = (
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
        d="M29 9a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13 16c-.93 0-1.741.505-2.278 1.043-.52.52-1.008 1.295-1.008 2.1 0 .54.264.971.468 1.243.204.272.462.53.66.728l.022.022c.15.15.271.272.367.38-.174.086-.38.174-.624.28h-.001a53.6 53.6 0 0 0-.293.127c-.423.186-.946.425-1.366.731-.4.292-.947.82-.947 1.632 0 .67.317 1.159.673 1.493.305.285.683.498.942.643l.038.021c.312.176.483.278.592.38.021.02.034.035.04.044-.002.16-.087.307-.564.783l-.058.058c-.388.385-1.092 1.083-1.092 2.15 0 .707.392 1.245.749 1.592.366.358.818.638 1.215.846a9.79 9.79 0 0 0 1.561.648l.03.01.01.002.003.001h.002l.958.288.575-1.915-.958-.288h-.002l-.017-.006a5.812 5.812 0 0 1-.364-.126 7.82 7.82 0 0 1-.868-.385c-.318-.166-.58-.341-.749-.507a.647.647 0 0 1-.144-.18c.006-.157.097-.307.564-.774l.058-.057c.388-.386 1.092-1.084 1.092-2.15 0-.67-.317-1.159-.673-1.493-.305-.285-.683-.498-.942-.643l-.038-.021c-.304-.171-.473-.273-.583-.372a1.37 1.37 0 0 1 .075-.058c.222-.162.557-.325.99-.515l.228-.098c.342-.147.732-.316 1.04-.488a2.71 2.71 0 0 0 .615-.453c.193-.199.43-.536.43-1.002 0-.54-.264-.97-.467-1.243a7.089 7.089 0 0 0-.66-.727l-.023-.023a5.611 5.611 0 0 1-.496-.535.984.984 0 0 1-.06-.088l.005-.019a.953.953 0 0 1 .072-.172c.073-.142.188-.301.337-.45.32-.32.651-.457.864-.457h1v-2h-1Zm-.859 16.958.257-.856-.223.745c-.013.042-.02.068-.026.084l-.008.027ZM18.765 16a3 3 0 0 0-2.878 2.154l-1.765 6a3 3 0 0 0 1.68 3.596l1.198.523v12.994c0 1.585 1.396 2.672 2.87 2.73 1.47.058 2.952-.906 3.116-2.47L23.881 33h.238l.895 8.528c.164 1.563 1.646 2.527 3.116 2.47 1.474-.058 2.87-1.146 2.87-2.731V28.273l1.199-.523a3 3 0 0 0 1.68-3.596l-1.766-6A3 3 0 0 0 29.235 16h-10.47Zm9.885 12.962c.116-.034.233-.07.35-.11v12.415c0 .267-.286.706-.949.732-.666.026-1.019-.397-1.048-.68l-.989-9.423A1 1 0 0 0 25.02 31h-2.04a1 1 0 0 0-.994.896l-.989 9.423c-.03.283-.382.706-1.048.68-.663-.026-.949-.465-.949-.732V28.852c.117.04.234.076.35.11.477.136 1.07.253 1.634.145.3-.057.614-.182.89-.416.276-.236.463-.54.575-.875.25-.753.51-1.715.09-2.66-.417-.937-1.365-1.563-2.668-2.084l-.928-.372-.743 1.857.929.372c1.197.478 1.499.852 1.582 1.04.08.177.089.459-.148 1.18-.11.007-.321-.013-.663-.11a12.208 12.208 0 0 1-1.252-.463l-.195-.081c-.377-.157-.78-.325-1.137-.444l-.948-.316-.01.031a1 1 0 0 1-.317-1.048l1.764-6a1 1 0 0 1 .96-.718h10.47a1 1 0 0 1 .96.718l1.764 6a1 1 0 0 1-.316 1.048l-.01-.03-.95.315c-.355.119-.759.287-1.136.444l-.195.081c-.454.188-.875.355-1.252.462-.342.098-.553.118-.663.11-.237-.72-.227-1.002-.148-1.18.083-.187.385-.56 1.582-1.04l.929-.37-.743-1.858-.928.372c-1.303.52-2.251 1.147-2.668 2.084-.42.945-.16 1.907.09 2.66.112.335.299.639.576.875.275.234.588.359.889.416.565.108 1.157-.01 1.634-.145Z"
        fill="#000"
      />
      <path
        d="M37.279 17.043C36.74 16.505 35.93 16 35 16h-1v2h1c.213 0 .545.137.864.457.149.149.264.308.338.45.036.07.058.128.07.172l.006.019a.984.984 0 0 1-.06.088c-.11.146-.27.308-.497.535l-.022.023a7.089 7.089 0 0 0-.66.727c-.203.272-.468.703-.468 1.243 0 .466.238.803.431 1.002.192.197.422.344.615.453.308.172.698.34 1.04.488l.03.012.198.086c.433.19.768.353.99.515.03.022.055.041.075.058-.11.1-.28.2-.583.372l-.037.02c-.26.146-.638.359-.942.644-.357.334-.674.823-.674 1.493 0 1.067.704 1.764 1.092 2.15l.058.057c.467.467.558.617.564.774a.647.647 0 0 1-.144.18c-.17.166-.431.34-.749.507a7.82 7.82 0 0 1-1.232.511l-.017.006h-.002l-.958.287.575 1.916.96-.288h.003l.01-.004.03-.01a8.453 8.453 0 0 0 .465-.16 9.79 9.79 0 0 0 1.096-.487c.397-.208.849-.488 1.215-.846.357-.347.749-.885.749-1.593 0-1.066-.704-1.764-1.093-2.15l-.057-.057c-.477-.476-.562-.623-.565-.783a.384.384 0 0 1 .041-.044c.11-.102.28-.204.592-.38l.038-.021c.259-.145.637-.358.942-.643.356-.334.673-.823.673-1.493 0-.812-.546-1.34-.947-1.632-.42-.306-.943-.545-1.366-.73l-.293-.128c-.244-.105-.451-.194-.625-.28.096-.108.216-.23.367-.38l.022-.022a7.1 7.1 0 0 0 .66-.728c.204-.272.468-.703.468-1.243 0-.805-.488-1.58-1.008-2.1Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChills);
export default ForwardRef;
