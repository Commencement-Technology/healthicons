import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg4X4 = (
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
        d="M16.736 8.579a3 3 0 0 1 3.674-2.121l16.42 4.4a3 3 0 0 1 2.122 3.674l-.13.483 2.214.593a1 1 0 0 1 .707 1.225l-.906 3.38a1 1 0 0 1-1.225.707l-2.213-.593-.416 1.555c.04.073.076.148.108.227l.858 2.14a2 2 0 0 1 .076 1.262l-1.23 4.59a2 2 0 0 1-2.45 1.414l-5.743-1.539 1.449-5.406a1 1 0 0 0-.707-1.225l-8.694-2.33a1 1 0 0 0-1.224.708l-1.45 5.406-6.234-1.67a2 2 0 0 1-1.414-2.45l1.197-4.47a2 2 0 0 1 .876-1.18l2.292-1.425c.028-.018.057-.035.085-.05l.405-1.51-2.314-.62a1 1 0 0 1-.707-1.224l.906-3.38a1 1 0 0 1 1.225-.708l2.313.62.13-.483Zm3.156-.19a1 1 0 0 0-1.224.708l-1.553 5.795 18.352 4.918 1.553-5.796a1 1 0 0 0-.707-1.224l-16.42-4.4Zm-4.624 15.326a1.5 1.5 0 1 0 .777-2.898 1.5 1.5 0 0 0-.777 2.898Zm19.224 3.598a1.5 1.5 0 1 1-2.897-.776 1.5 1.5 0 0 1 2.897.776Z"
        fill="#000"
      />
      <path
        d="M15 39c0-1.06-.474-2.078-1.318-2.828C12.838 35.422 11.693 35 10.5 35c-1.193 0-2.338.422-3.182 1.172C6.474 36.922 6 37.939 6 39v2a1 1 0 0 0 1 1h27.5a1 1 0 1 0 0-2H25a2 2 0 0 0-4 0 3 3 0 0 0-6 0v-1ZM17.645 28.946l-5.796-1.553-.76 2.835a1 1 0 0 0 .707 1.225l3.864 1.035a1 1 0 0 0 1.225-.707l.76-2.835ZM28.445 31.886l5.796 1.553-.748 2.792a1 1 0 0 1-1.225.707l-3.864-1.035a1 1 0 0 1-.707-1.225l.748-2.792ZM20.063 27.07l1.036-3.864 2.516.675-1.128 3.839-2.424-.65ZM24.42 28.238l1.127-3.84 2.313.62-1.035 3.864-2.405-.644Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg4X4);
export default ForwardRef;
