import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChillsFever = (
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
      <g clipPath="url(#chills_fever_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-9 8.5V10h-1V8.5a.5.5 0 0 1 1 0Zm0 4.55V12h-1v1.867l-.572.583a1.5 1.5 0 1 0 2.143 0L39 13.867v-.817ZM36 8.5a2.5 2.5 0 0 1 5 0v4.55a3.5 3.5 0 1 1-5 0V8.5Zm-9.5 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-12.333 6.85A2 2 0 0 1 16 16H28a2 2 0 0 1 1.833 1.35l2.059 6a2 2 0 0 1-.577 2.158l-.131.043c-.396.133-.952.377-1.517.625l-.147.065c-.48.21-.986.43-1.483.628l-.037.013v.001a19.22 19.22 0 0 1-.467.177c-.672.245-1.214.389-1.578.41a1.423 1.423 0 0 1-.074.003c-.205-.663-.35-1.393-.265-2.028.045-.335.15-.619.326-.855.174-.233.454-.471.93-.662l.928-.37-.743-1.858-.928.372c-.775.31-1.37.759-1.79 1.323a3.79 3.79 0 0 0-.705 1.785c-.157 1.172.156 2.352.417 3.136.16.48.502.813.918.99.374.16.773.181 1.107.161.6-.036 1.282-.226 1.924-.45V40a2 2 0 0 1-3.988.22l-1-9A2 2 0 0 1 23 31h-2a2 2 0 0 1-.012.22l-1 9A2 2 0 0 1 16 40V29.007c.778.233 1.589.425 2.277.46.365.02.782 0 1.165-.142.417-.154.827-.47 1.007-1.009.294-.883.455-2.088.142-3.261-.326-1.223-1.158-2.359-2.72-2.983l-.928-.372-.743 1.857.929.372c.938.375 1.356.989 1.53 1.641.166.623.114 1.32-.043 1.9a1.926 1.926 0 0 1-.237 0c-.48-.024-1.164-.18-1.96-.426a23.944 23.944 0 0 1-.419-.133v-.029l-2.7-1.009a2 2 0 0 1-1.192-2.522l2.06-6ZM11 18c-.93 0-1.741.505-2.279 1.043-.52.52-1.007 1.295-1.007 2.1 0 .54.264.971.468 1.243.204.272.462.53.66.728l.022.022c.15.15.271.272.367.38-.174.086-.38.174-.624.28h-.003l-.29.127c-.424.186-.947.425-1.367.731-.4.292-.947.82-.947 1.632 0 .67.317 1.159.673 1.493.305.285.683.498.942.643l.038.021c.312.176.483.278.592.38.021.02.034.035.04.044-.003.16-.087.307-.564.783l-.058.058c-.388.385-1.092 1.083-1.092 2.15 0 1.168.857 1.966 1.55 2.4.717.45 1.613.742 2.308.742h1v-2h-1c-.235 0-.767-.136-1.246-.437-.504-.316-.612-.59-.612-.706 0-.164.079-.307.565-.793l.058-.057c.388-.386 1.092-1.084 1.092-2.15 0-.67-.317-1.159-.673-1.493-.305-.285-.684-.498-.942-.643l-.038-.021c-.304-.171-.473-.273-.583-.372.02-.017.045-.036.075-.058.222-.162.557-.325.99-.515l.228-.098c.342-.147.732-.316 1.04-.488a2.71 2.71 0 0 0 .615-.453c.193-.199.43-.536.43-1.002 0-.54-.264-.97-.467-1.243-.204-.272-.462-.529-.66-.727l-.023-.023a5.602 5.602 0 0 1-.496-.535.982.982 0 0 1-.06-.088.954.954 0 0 1 .076-.191c.074-.142.189-.301.338-.45.32-.32.651-.457.864-.457h1v-2h-1Zm-3.028 8.408s0-.003.004-.007a.029.029 0 0 1-.004.007Zm28.007-7.258C35.593 18.636 34.905 18 34 18h-1v2h.987c.01.003.04.014.088.046.087.058.195.16.304.304.231.309.332.632.335.784a.673.673 0 0 1-.072.162c-.083.146-.2.306-.37.533l-.017.021c-.15.2-.344.459-.497.731-.159.283-.33.673-.33 1.133 0 .736.541 1.187.802 1.383.247.185.563.366.819.513l.161.093c.322.188.547.336.691.476.066.064.09.102.1.12 0 .074-.004.132-.458.472l-.052.04c-.401.297-1.205.895-1.205 2.046 0 .98.499 1.643.81 2.056l.033.044c.336.448.442.63.442.9 0 .216-.138.495-.485.776-.162.13-.336.232-.485.298-.104.046-.166.062-.187.067a.029.029 0 0 0-.007.002h-.978v2h1c.343 0 .697-.115.98-.24.305-.134.63-.327.934-.571.581-.47 1.228-1.262 1.228-2.332 0-.98-.499-1.643-.81-2.056l-.032-.044c-.337-.448-.443-.63-.443-.9v-.01c-.001-.076-.002-.132.457-.476l.052-.039c.4-.297 1.205-.895 1.205-2.046 0-.692-.356-1.202-.705-1.54-.337-.33-.756-.583-1.077-.77a49.875 49.875 0 0 0-.232-.135 7.662 7.662 0 0 1-.48-.29 5.47 5.47 0 0 1 .365-.522l.017-.022c.15-.2.344-.459.497-.731.159-.282.33-.673.33-1.133 0-.709-.33-1.45-.736-1.993Zm-.647 4.261s.003.005.013.015a.073.073 0 0 0-.013-.015Zm.672 2.898v-.003a.047.047 0 0 0-.003-.005l.003.008Z"
        />
      </g>
      <defs>
        <clipPath id="chills_fever_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChillsFever);
export default ForwardRef;
