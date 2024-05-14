import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGastroenterology = (
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
      <g clipPath="url(#gastroenterology_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17.316 10.74v-.07L17.314 6H39a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H11.192h.969l-.001-.835-.002-1.85c-.002-1.332-.005-2.75-.01-2.88-.028-.66-.01-2.195.56-3.528.279-.651.672-1.215 1.22-1.617.53-.387 1.264-.67 2.322-.681 2.52.348 4.295 1.88 6.27 3.585l.063.053c1.94 1.675 4.136 3.557 7.3 3.557 3.073 0 5.152-1.303 6.409-3.31 1.211-1.933 1.602-4.425 1.602-6.78v-8.332c0-2.514-.871-4.487-2.256-5.83-1.373-1.332-3.192-1.987-4.991-1.987-1.8 0-3.619.655-4.992 1.987-1.193 1.157-2.005 2.781-2.207 4.817-2.55-.075-3.908-.477-4.714-1.307-.917-.945-1.384-2.714-1.418-6.322ZM10.161 42H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6.314l.002 4.76c.034 3.57.453 6.118 1.983 7.695 1.376 1.418 3.441 1.838 6.09 1.914-.115 4.932-1.09 6.818-2.116 7.587-.544.408-1.213.591-2.065.655-.583.044-1.155.03-1.787.015-.347-.009-.712-.018-1.107-.018-1.469 0-2.648.396-3.567 1.069-.91.666-1.498 1.555-1.878 2.445-.748 1.75-.75 3.648-.72 4.396v-.001l.001.066.001.196.003.651a1473.44 1473.44 0 0 1 .006 3.737V42ZM31.01 25.129c-1.74-.884-3.584-1.82-5.98-.663.246-1.394.37-3.073.37-5.084 0-2.03.69-3.466 1.648-4.395.97-.94 2.275-1.422 3.599-1.422 1.323 0 2.629.482 3.598 1.422.958.93 1.649 2.365 1.649 4.395v6.382c-1.772.945-3.284.177-4.884-.635Z"
        />
      </g>
      <defs>
        <clipPath id="gastroenterology_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGastroenterology);
export default ForwardRef;
