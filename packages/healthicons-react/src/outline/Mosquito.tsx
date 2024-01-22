import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMosquito = (
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
        d="M24.001 6a1 1 0 0 1 1 1v6.565c.73.553 1.365 1.696 1.825 3.22l2.674-2.547v-2.905a1 1 0 0 1 .31-.724l3.5-3.333a1 1 0 0 1 1.38 1.448l-3.19 3.038v2.905a1 1 0 0 1-.31.724l-3.5 3.333a.995.995 0 0 1-.373.225c.058.36.108.732.15 1.114L41.891 22c.45 1.667-.271 5-6.77 5-4.422 0-6.587-2.162-7.52-4.279-.002.97-.06 1.906-.166 2.786l5.501 5.178a1 1 0 0 1 .294.93l-.719 3.499 2.914 1.371a1 1 0 1 1-.852 1.81l-3.626-1.707a1 1 0 0 1-.553-1.106l.765-3.723-4.151-3.907c-.158.63-.345 1.207-.554 1.719l1.921 2.181a1 1 0 0 1 .196.987l-1.258 3.654 2.677 4.056a1 1 0 0 1-1.669 1.102l-2.948-4.467a1 1 0 0 1-.111-.876l1.228-3.57-1.107-1.256c-.425.465-.893.721-1.383.721s-.958-.257-1.384-.723l-1.108 1.258 1.228 3.57a1 1 0 0 1-.111.876l-2.948 4.467a1 1 0 1 1-1.67-1.102l2.678-4.056-1.258-3.654a1 1 0 0 1 .196-.987l1.923-2.183c-.21-.512-.396-1.09-.554-1.719L16.84 31.76l.765 3.723a1 1 0 0 1-.553 1.106l-3.626 1.707a1 1 0 0 1-.852-1.81l2.914-1.371-.72-3.5a1 1 0 0 1 .295-.929l5.504-5.18a23.908 23.908 0 0 1-.167-2.79C19.47 24.834 17.305 27 12.877 27c-6.498 0-7.22-3.333-6.769-5l14.428-1.938c.042-.38.092-.752.15-1.112a.995.995 0 0 1-.376-.226l-3.5-3.333a1 1 0 0 1-.31-.724v-2.905l-3.19-3.038a1 1 0 0 1 1.38-1.448l3.5 3.333a1 1 0 0 1 .31.724v2.905l2.676 2.549c.46-1.525 1.095-2.67 1.825-3.222V7a1 1 0 0 1 1-1ZM8.374 23.788c.407.453 1.55 1.212 4.503 1.212 2.714 0 4.16-.946 4.964-1.907.192-.23.356-.472.495-.717L8.317 23.72c.018.023.037.045.057.067Zm31.252 0c-.407.453-1.55 1.212-4.503 1.212-2.714 0-4.16-.946-4.964-1.907a4.814 4.814 0 0 1-.495-.717l10.019 1.345a1.623 1.623 0 0 1-.057.067Zm-14.023-1.139c0 2.432-.379 4.543-.924 5.973-.24.63-.482 1.049-.678 1.3-.196-.251-.438-.67-.677-1.3-.545-1.43-.924-3.541-.924-5.973 0-2.43.379-4.542.924-5.973.24-.628.481-1.048.677-1.298.196.25.439.67.678 1.298.545 1.431.924 3.542.924 5.974Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMosquito);
export default ForwardRef;
