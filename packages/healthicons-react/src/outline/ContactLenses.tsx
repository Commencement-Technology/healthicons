import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContactLenses = (
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
        d="M34.985 9.686a1.15 1.15 0 0 0 .012-.269c.002-.072.003-.144.003-.217h-.04C34.482 7.407 29.757 6 24 6c-5.758 0-10.482 1.407-10.96 3.2H13c0 .073.001.145.003.217a1.149 1.149 0 0 0 .012.27C13.326 14.605 18.33 18.2 24 18.2c.076 0 .152 0 .229-.002a9.103 9.103 0 0 0-.294.04c-2.25.344-4.654 1.567-7.142 4.055l-11 11 1.414 1.414 11-11c2.263-2.262 4.296-3.227 6.03-3.492 1.733-.265 3.281.15 4.606.855 1.334.71 2.418 1.701 3.176 2.533.269.296.494.567.67.793l-.122.123c-1.226-.59-2.61-.59-3.911-.243-1.697.453-3.36 1.514-4.676 2.83-1.312 1.311-2.361 2.962-2.717 4.666-.254 1.22-.148 2.47.462 3.589l-5.432 5.432 1.414 1.414L35.274 24.64l-.43-.677L34 24.5c.844-.537.843-.538.843-.538v-.001l-.003-.003-.006-.01-.02-.03a11.542 11.542 0 0 0-.331-.47 15.683 15.683 0 0 0-.986-1.192c-.851-.934-2.111-2.098-3.715-2.951-1.272-.677-2.775-1.164-4.459-1.17 5.105-.508 9.375-3.916 9.662-8.449Zm-1.881-.574-.012.015.012-.015Zm-.544.388a7.936 7.936 0 0 0-1.388-.569C29.426 8.375 26.89 8 24 8c-2.89 0-5.426.375-7.172.931a7.94 7.94 0 0 0-1.388.569c.327.18.784.377 1.388.569C18.574 10.624 21.11 11 24 11c2.89 0 5.426-.376 7.172-.931A7.934 7.934 0 0 0 32.56 9.5Zm-17.664-.388.012.015c-.01-.01-.012-.015-.012-.015Zm17.462 2.663C30.341 12.525 27.345 13 24 13c-3.345 0-6.34-.475-8.358-1.225C16.936 14.293 20.072 16.2 24 16.2c3.927 0 7.064-1.907 8.358-4.425Zm-9.11 22.062 7.744-7.743c-.547-.102-1.158-.062-1.82.114-1.288.344-2.655 1.19-3.777 2.312-1.126 1.125-1.92 2.444-2.174 3.66-.122.585-.121 1.14.028 1.657Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContactLenses);
export default ForwardRef;
