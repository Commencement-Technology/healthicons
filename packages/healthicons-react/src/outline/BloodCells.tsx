import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodCells = (
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
      <path d="M23.486 16.04C24.63 15.441 25 14.787 25 14.333c0-.396-.274-.942-1.136-1.489l1.072-1.688c1.137.72 2.064 1.801 2.064 3.177 0 1.571-1.197 2.751-2.586 3.479C22.977 18.564 21.06 19 19 19c-2.061 0-3.977-.436-5.414-1.188-1.39-.728-2.586-1.908-2.586-3.479 0-1.376.927-2.456 2.064-3.178l1.072 1.69C13.274 13.39 13 13.937 13 14.332c0 .454.37 1.108 1.514 1.707 1.097.575 2.681.96 4.486.96 1.805 0 3.39-.385 4.486-.96Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.995 24.543C28.22 23.31 32 19.728 32 15.5 32 10.253 26.18 6 19 6S6 10.253 6 15.5c0 2.976 1.872 5.632 4.803 7.374-4.474 2.662-6.512 7.517-4.551 10.912 1.981 3.432 7.297 4.072 11.873 1.43 4.433-2.56 6.546-7.262 4.87-10.673Zm4.017-3.94C28.99 19.158 30 17.33 30 15.5c0-1.83-1.011-3.658-2.988-5.103C25.037 8.954 22.211 8 19 8c-3.21 0-6.037.954-8.012 2.397C9.01 11.842 8 13.67 8 15.5c0 1.83 1.011 3.658 2.988 5.103C12.963 22.046 15.789 23 19 23c3.21 0 6.037-.954 8.012-2.397ZM11.95 24.52c.372-.214.747-.402 1.122-.563 1.085.407 2.259.706 3.495.877l-.142 1.246c.645.073.98.32 1.124.57.164.284.201.79-.192 1.513-.384.704-1.112 1.461-2.123 2.045-1.011.584-2.03.836-2.833.816-.821-.02-1.242-.307-1.405-.59-.144-.25-.192-.663.068-1.26l-1.835-.797c-.418.963-.528 2.083.035 3.057.643 1.115 1.881 1.56 3.088 1.59 1.226.03 2.605-.347 3.882-1.084 1.277-.737 2.293-1.743 2.88-2.82.577-1.06.81-2.355.167-3.47a2.837 2.837 0 0 0-.516-.651L19 25c.64 0 1.268-.034 1.883-.099.075.103.144.209.207.318.606 1.048.668 2.454.003 4.01-.664 1.555-2.019 3.13-3.968 4.255-1.95 1.126-3.991 1.511-5.67 1.31-1.679-.203-2.866-.96-3.471-2.008-.606-1.049-.667-2.455-.003-4.01.664-1.555 2.019-3.13 3.968-4.256Z"
      />
      <path d="M36.596 34.369c-.093.35-.457.761-1.289 1.007-.813.24-1.918.26-3.102-.058-1.185-.317-2.132-.888-2.716-1.502-.598-.628-.707-1.165-.613-1.516.082-.309.367-.657 1.006-.91l-.733-1.86c-1.012.398-1.906 1.136-2.205 2.253-.343 1.278.233 2.505 1.096 3.412.877.922 2.166 1.658 3.647 2.055 1.48.397 2.966.404 4.186.044 1.2-.354 2.313-1.129 2.655-2.407.3-1.117-.106-2.203-.783-3.054l-1.566 1.245c.429.538.5.982.417 1.291Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.245 36.457c-1.071 3.998-6.261 6.081-11.592 4.653-5.331-1.428-8.784-5.828-7.713-9.826 1.071-3.998 6.261-6.081 11.592-4.653 5.331 1.429 8.784 5.828 7.713 9.826Zm-1.932-.518c-.336 1.255-1.354 2.358-3.012 3.023-1.659.666-3.843.83-6.13.216-2.289-.613-4.099-1.846-5.202-3.252-1.104-1.406-1.434-2.87-1.097-4.124.336-1.255 1.353-2.358 3.012-3.023 1.659-.666 3.843-.829 6.13-.216 2.288.613 4.098 1.846 5.202 3.252 1.104 1.406 1.433 2.87 1.097 4.124ZM35.835 24.764c2.395.642 4.727-.294 5.208-2.09.482-1.796-1.07-3.773-3.465-4.414-2.395-.642-4.726.294-5.208 2.09-.48 1.796 1.07 3.773 3.465 4.414Zm2.577-1.987c.503-.202.658-.467.7-.62.04-.154.039-.462-.296-.888-.335-.427-.935-.858-1.755-1.077-.82-.22-1.556-.148-2.06.055-.502.201-.658.467-.699.62-.041.154-.04.462.295.888.336.427.936.858 1.756 1.078.82.22 1.555.147 2.059-.056Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodCells);
export default ForwardRef;
