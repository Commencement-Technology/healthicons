import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGuideDog = (
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
        d="M12.477 13.26c-.382.467-.477.803-.477.887a1 1 0 0 1-.666.943 317.38 317.38 0 0 1-3.227 1.116c.068.357.173.787.33 1.209C8.833 18.476 9.354 19 10 19c1.334 0 2.567-.089 3.445-.459.42-.177.709-.398.897-.662.184-.257.325-.628.325-1.204h2c0 .925-.235 1.719-.697 2.366a3.591 3.591 0 0 1-.637.682c-.007 1.518-.081 2.79-.143 3.846l-.02.338c-.069 1.2-.101 2.031-.012 2.686.082.605.26.992.59 1.327.365.37.987.748 2.105 1.17a1 1 0 0 1 .647.935c0 1.18.132 2.148.25 3.021.059.427.114.832.149 1.228.045.512.074 1.17-.178 1.717a1.663 1.663 0 0 1-.723.779c-.324.176-.674.23-.998.23-.046 0-.2.031-.444.236a3.008 3.008 0 0 0-.63.768l-.001.003c.429.005.826.014 1.19.022l.737.014c.782.013 1.306.002 1.674-.058.176-.029.277-.063.333-.09a.25.25 0 0 0 .053-.033c.002-.003.088-.113.088-.588v-6.249a1 1 0 0 1 .686-.949l8.333-2.761a1 1 0 0 1 1.192.469c.327.598.612 1.146.862 1.626.139.268.267.514.385.736.343.644.63 1.135.956 1.569.63.835 1.481 1.555 3.402 2.612a1 1 0 0 1 .485.625c.15.577.177 1.134-.074 1.648-.191.39-.527.667-.676.79l-.048.04c-.15.13-.242.227-.32.393a1.406 1.406 0 0 0-.066.177h2.216v-4.304l-3.241-7.05 1.817-.835 2.046 4.45c.128-.96.213-2.05.17-3.13-.059-1.518-.365-2.891-1.036-3.861-.626-.905-1.639-1.564-3.422-1.564-.806 0-1.6.01-2.373.02-1.17.015-2.29.029-3.319.006-1.733-.038-3.362-.181-4.853-.63-1.511-.455-2.869-1.22-4.062-2.474-1.183-1.244-2.165-2.928-2.997-5.168-.354-.952-.775-1.278-1.065-1.39-.304-.118-.707-.095-1.2.135-.49.23-.969.624-1.32 1.054Zm26.856 20.352V39a1 1 0 0 1-1 1H34a1 1 0 0 1-1-1c0-.847.128-1.497.37-2.018.248-.536.58-.852.823-1.063l.146-.128c-1.718-.989-2.727-1.817-3.522-2.873-.424-.562-.768-1.164-1.124-1.831a89.425 89.425 0 0 1-.415-.792c-.134-.258-.274-.528-.427-.818L22 31.747v5.527c0 .638-.101 1.3-.521 1.83-.434.548-1.053.76-1.63.855-.57.093-1.264.096-2.029.084l-.776-.015A89.764 89.764 0 0 0 15 40c-.41 0-.845-.177-1.108-.595-.219-.347-.229-.72-.209-.957.041-.49.26-1.015.516-1.452a4.999 4.999 0 0 1 1.073-1.294c.413-.345.982-.677 1.653-.7v-.004a3.822 3.822 0 0 0-.018-.547c-.023-.253-.066-.573-.116-.946-.102-.762-.234-1.741-.277-2.798-.914-.392-1.643-.83-2.19-1.383-.7-.71-1.022-1.532-1.148-2.463-.12-.88-.069-1.913-.002-3.068l.02-.338c.047-.816.1-1.73.125-2.773-1.087.274-2.284.318-3.319.318-2.02 0-3-1.712-3.437-2.887a9.808 9.808 0 0 1-.454-1.715 10.31 10.31 0 0 1-.1-.726l-.004-.048-.002-.014v-.007L7 15.529l-.323-.947.454-.155a881.577 881.577 0 0 0 2.996-1.032c.167-.515.476-1.003.802-1.401.513-.627 1.221-1.225 2.022-1.6.8-.373 1.792-.567 2.77-.188.991.384 1.737 1.266 2.216 2.558.77 2.075 1.631 3.497 2.572 4.487.93.978 1.976 1.572 3.19 1.937 1.233.371 2.649.509 4.32.546 1.008.022 2.055.008 3.187-.007.776-.01 1.591-.02 2.46-.02 2.384 0 4.038.936 5.068 2.426.985 1.425 1.325 3.244 1.39 4.92.067 1.695-.143 3.37-.364 4.605a26.084 26.084 0 0 1-.427 1.955ZM7 15.528l-.323-.947a1 1 0 0 0-.674 1.021L7 15.528Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.707 8.293a1 1 0 0 1 0 1.414l-15.5 15.5a1 1 0 0 1-.707.293H15a1 1 0 1 1 0-2h7.086L37.293 8.293a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 30.5V24h2v6.5h-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGuideDog);
export default ForwardRef;
