import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTruckDriver = (
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
        d="M21 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.364 18.52c-.363.285-.834.513-1.402.698a8 8 0 1 1-15.924 0c-.568-.185-1.039-.413-1.401-.698-.47-.37-.785-.864-.822-1.458-.035-.551.183-1.019.401-1.349a4.31 4.31 0 0 1 .76-.841c.14-.123.278-.232.406-.327-.038-.205-.08-.453-.122-.74A26.73 26.73 0 0 1 15 10c0-.314.134-.548.196-.647.078-.125.17-.232.254-.318.167-.175.383-.353.62-.524.48-.348 1.14-.739 1.924-1.105C19.557 6.676 21.704 6 24 6c2.297 0 4.443.677 6.006 1.406a12.03 12.03 0 0 1 1.924 1.105c.237.171.453.35.62.524.084.086.176.193.254.318.062.099.196.333.196.647 0 1.602-.13 2.9-.26 3.805-.042.287-.084.535-.122.74.128.095.267.204.407.327.25.219.536.504.759.841.219.33.436.798.402 1.35-.037.593-.352 1.087-.822 1.457Zm-16.362-8.202c.015 1.348.127 2.438.238 3.2.026.18.052.34.076.482h13.368c.025-.142.05-.303.076-.482.11-.762.223-1.852.238-3.2a3.886 3.886 0 0 0-.241-.188c-.361-.261-.909-.59-1.597-.911C27.777 8.573 25.924 8 24 8s-3.777.573-5.16 1.219c-.688.321-1.236.65-1.596.91a3.886 3.886 0 0 0-.242.19ZM16.788 16l-.003.002a5.03 5.03 0 0 0-.495.376c-.178.156-.32.308-.406.44a.778.778 0 0 0-.055.093.71.71 0 0 0 .044.037c.15.118.472.291 1.1.462.124.034.257.066.399.098l.009.002c.502.111 1.12.21 1.873.288 1.067.111 2.41.184 4.088.2L24 18c3.227 0 5.314-.201 6.62-.49l.008-.002c.143-.032.276-.064.4-.098.627-.17.95-.344 1.099-.462a.71.71 0 0 0 .044-.037.782.782 0 0 0-.054-.093 2.348 2.348 0 0 0-.407-.44 5.018 5.018 0 0 0-.494-.376L31.212 16H16.788Zm6.94 4c2.642 0 4.69-.14 6.26-.384a6 6 0 1 1-11.98.069c1.463.202 3.338.315 5.72.315ZM16.078 38.877A8.07 8.07 0 0 0 16 40v1a1 1 0 0 1-1.864.504 2.99 2.99 0 0 1-2.203.259l-1.932-.518a3 3 0 0 1-2.12-3.674l.776-2.898a3 3 0 0 1 3.674-2.121l1.932.517c.672.18 1.23.575 1.618 1.091a9.987 9.987 0 0 1 8.12-4.16 9.987 9.987 0 0 1 8.116 4.158 2.987 2.987 0 0 1 1.616-1.088l1.932-.517a3 3 0 0 1 3.674 2.12l.777 2.899a3 3 0 0 1-2.122 3.674l-1.931.517a2.99 2.99 0 0 1-2.2-.256A1 1 0 0 1 32 41v-1a8.07 8.07 0 0 0-.078-1.123l-5.204 1.395a3 3 0 0 1-5.436 0l-5.204-1.395Zm5.042-.72A3.007 3.007 0 0 1 23 36.172v-4.11a8.009 8.009 0 0 0-6.397 4.886l4.517 1.21Zm10.277-1.21A8.009 8.009 0 0 0 25 32.062v4.109c.904.32 1.61 1.06 1.88 1.987l4.517-1.21Zm2.147-.72a1 1 0 0 1 .707-1.225l1.932-.518a1 1 0 0 1 1.224.707l.777 2.898a1 1 0 0 1-.707 1.225l-1.932.518a1 1 0 0 1-1.225-.708l-.776-2.897Zm-21.73-1.743a1 1 0 0 0-1.226.707l-.776 2.897a1 1 0 0 0 .707 1.225l1.932.518a1 1 0 0 0 1.225-.707l.776-2.898A1 1 0 0 0 13.745 35l-1.932-.517ZM25 39a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTruckDriver);
export default ForwardRef;
