import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRegisterBook = (
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
      <g clipPath="url(#register_book_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM25 13.177V36.42l.003.002.01.004h.002l.008-.002c4.909-2.223 9.191-3.483 14.923-2.437a.058.058 0 0 0 .047-.011.034.034 0 0 0 .007-.007V10.537c-5.658-1.415-9.683.136-15 2.64Zm17-2.193v-.46c0-.885-.589-1.694-1.484-1.92-6.15-1.546-10.628.092-15.757 2.477-.25.052-.503.104-.759.16-.256-.056-.51-.108-.76-.16-5.128-2.385-9.606-4.023-15.756-2.476A1.973 1.973 0 0 0 6 10.524v.46c-.406.089-.82.185-1.243.287a.991.991 0 0 0-.757.965v25.539c0 .633.583 1.105 1.204.987 6.213-1.185 10.4-1.268 16.122-.4a3 3 0 0 0 5.348 0c5.721-.868 9.91-.785 16.122.4A1.012 1.012 0 0 0 44 37.775V12.236a.991.991 0 0 0-.757-.965A63.511 63.511 0 0 0 42 10.984Zm-19 2.193c-5.317-2.504-9.342-4.055-15-2.64v23.431l.002.002.001.002.004.003a.058.058 0 0 0 .048.012c5.73-1.047 10.013.213 14.922 2.435.005.003.008.003.008.003h.001a.026.026 0 0 0 .011-.004l.003-.002V13.177ZM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2Zm9.612-2.077c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071l-.756 1.852Zm-9.612-5.923c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2ZM13.5 16v-3h-2v3h2Zm3.5-2v3h-2v-3h2Zm3.5 4v-3h-2v3h2Zm16.49 11.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2Zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071l.756 1.852Zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2ZM34.5 16v-3h2v3h-2ZM31 14v3h2v-3h-2Zm-3.5 4v-3h2v3h-2Z"
        />
      </g>
      <defs>
        <clipPath id="register_book_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRegisterBook);
export default ForwardRef;
