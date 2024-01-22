import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPlantationWorker = (
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
        d="M34 16c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM17.828 37.059 17.651 37H14v3h13.97c.077.153.16.306.25.46.271.458.692 1.048 1.324 1.54H6v-6.462c0-4.214 6.26-6.274 12-7.092a45.352 45.352 0 0 1 2-.24V30a2 2 0 0 0 2 2h4c.532 0 1.016-.208 1.374-.547.033.11.068.222.105.337.15.456.37 1.019.686 1.574A3.981 3.981 0 0 1 26 34h-4a4 4 0 0 1-3.974-3.537c-1.02.152-2.042.344-3.026.578V35h3s2.5 1 6 1c1.16 0 2.21-.11 3.096-.257a2.994 2.994 0 0 0-.066 1.18l.005.027-.004-.026v.004l.001.006.003.016.006.042a9.44 9.44 0 0 0 .099.53l.051.232c-.929.143-2.008.246-3.191.246-1.937 0-3.593-.276-4.77-.553a17.76 17.76 0 0 1-1.402-.388Zm-6.356-4.89c.481-.206.993-.395 1.528-.57V35a1 1 0 0 0-1 1v4H8v-4.462c0-1.053.867-2.253 3.472-3.369ZM34.246 26.685c.276.317.55.583.755.771L35 27.5v1.962c-.24-.383-.57-.783-1.022-1.056-.494-.297-1.047-.39-1.522-.404-.482-.014-.96.05-1.365.133a9.152 9.152 0 0 0-1.43.42l-.027.01-.009.003-.002.002h-.002a1.002 1.002 0 0 0-.61 1.069v.004l.001.009.005.028a7.284 7.284 0 0 0 .08.43c.057.273.149.65.282 1.054.132.402.314.858.563 1.277.243.412.59.857 1.08 1.153.494.297 1.047.39 1.522.404.482.014.96-.05 1.364-.133.409-.083.771-.19 1.03-.276l.062-.02v2.893c-.24-.383-.57-.783-1.022-1.056-.494-.297-1.047-.39-1.522-.404-.482-.014-.96.05-1.365.133a9.152 9.152 0 0 0-1.341.385l-.047.018-.043.017-.026.01-.009.004h-.002l-.002.001a1.002 1.002 0 0 0-.61 1.069v.004l.001.009.005.028a7.284 7.284 0 0 0 .08.43c.057.273.149.65.282 1.054.132.402.314.858.563 1.277.243.412.59.857 1.08 1.153.494.297 1.047.39 1.522.404.482.014.96-.05 1.364-.133.409-.083.771-.19 1.03-.276l.062-.02V42a1 1 0 1 0 2 0v-1.154l.044.01.048.01c.404.082.882.146 1.364.132.475-.014 1.028-.107 1.522-.404.49-.296.837-.741 1.08-1.153.249-.42.43-.875.563-1.277a10.079 10.079 0 0 0 .362-1.484l.005-.028.001-.009v-.005a1.002 1.002 0 0 0-.61-1.068h-.002l-.003-.002-.008-.003-.026-.01a8.61 8.61 0 0 0-.402-.144 9.152 9.152 0 0 0-1.03-.276 6.047 6.047 0 0 0-1.364-.133c-.475.014-1.028.107-1.522.404L37 35.42v-1.574l.08.017.012.002c.404.083.882.147 1.364.133.475-.014 1.028-.107 1.522-.404.49-.296.837-.741 1.08-1.153.249-.42.43-.875.563-1.277a10.079 10.079 0 0 0 .362-1.484l.005-.028.001-.009v-.005a1.002 1.002 0 0 0-.61-1.068h-.002l-.003-.002-.008-.003-.026-.01a8.61 8.61 0 0 0-.402-.144 9.152 9.152 0 0 0-1.03-.276 6.047 6.047 0 0 0-1.364-.133c-.475.014-1.028.107-1.522.404L37 28.42V27.456c.205-.188.478-.454.754-.771.28-.32.579-.713.813-1.147.23-.427.433-.958.433-1.538 0-.58-.202-1.111-.433-1.538a6.458 6.458 0 0 0-.813-1.147 9.754 9.754 0 0 0-1.098-1.07l-.022-.018-.007-.006-.004-.003a1.001 1.001 0 0 0-1.246 0h-.002l-.002.003-.007.006-.022.018a7.308 7.308 0 0 0-.33.287c-.208.19-.486.46-.768.783-.28.32-.579.713-.813 1.147-.23.427-.433.958-.433 1.538 0 .58.202 1.111.433 1.538.234.434.534.826.813 1.147ZM38.603 37c-.284.009-.457.063-.55.119-.095.058-.234.194-.39.456a4.61 4.61 0 0 0-.384.885 7.479 7.479 0 0 0-.111.37c.102.026.21.052.323.075.314.063.629.101.906.093.284-.009.457-.063.55-.119.095-.058.234-.194.39-.456a4.61 4.61 0 0 0 .384-.885c.042-.127.079-.252.111-.37a6.535 6.535 0 0 0-.323-.075 4.076 4.076 0 0 0-.906-.093Zm-7.112.093c-.112.023-.22.049-.323.075.032.118.069.243.11.37.106.32.235.63.385.885.156.263.295.398.39.456.093.056.266.11.55.119.277.008.592-.03.906-.093.112-.023.22-.049.323-.075a7.479 7.479 0 0 0-.11-.37 4.61 4.61 0 0 0-.385-.885c-.156-.263-.295-.398-.39-.456-.093-.056-.266-.11-.55-.119a4.076 4.076 0 0 0-.906.093Zm7.112-7.093c-.284.009-.457.063-.55.119-.095.057-.234.194-.39.456a4.61 4.61 0 0 0-.384.885 7.479 7.479 0 0 0-.111.37c.102.026.21.052.323.075.314.064.629.101.906.093.284-.009.457-.063.55-.119.095-.057.234-.194.39-.456a4.61 4.61 0 0 0 .384-.885c.042-.127.079-.252.111-.37a6.535 6.535 0 0 0-.323-.075 4.076 4.076 0 0 0-.906-.093Zm-2.357-4.63a7.154 7.154 0 0 1-.246.268 7.154 7.154 0 0 1-.246-.268 4.487 4.487 0 0 1-.562-.783C35.048 24.32 35 24.124 35 24c0-.124.048-.32.192-.588.141-.26.341-.53.562-.783.083-.095.166-.185.246-.268.08.083.163.173.246.268.22.253.421.523.562.783.144.268.192.464.192.588 0 .124-.048.32-.192.588-.141.26-.341.53-.562.783Zm-5.078 4.798c.102-.026.21-.052.323-.075.314-.064.629-.101.906-.093.284.009.457.063.55.119.095.057.234.194.39.456.15.254.279.564.384.885.042.127.079.252.111.37a6.535 6.535 0 0 1-.323.075c-.314.064-.629.101-.906.093-.284-.009-.457-.063-.55-.119-.095-.057-.234-.194-.39-.456a4.61 4.61 0 0 1-.384-.885 7.479 7.479 0 0 1-.111-.37Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPlantationWorker);
export default ForwardRef;
