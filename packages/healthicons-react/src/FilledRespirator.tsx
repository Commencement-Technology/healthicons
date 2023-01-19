import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledRespirator = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M17 19a7 7 0 1 1 14 0v4.73a33.687 33.687 0 0 0-1.106-2.245c-.757-1.395-1.622-2.704-2.575-3.679-.937-.958-2.09-1.724-3.416-1.724s-2.48.766-3.416 1.724c-.954.975-1.818 2.284-2.575 3.679-.32.588-.624 1.2-.912 1.82V19Zm16-4a9 9 0 1 0-18 0v13.402a9.237 9.237 0 0 0-.835-.71c-.573-.43-1.18-.762-1.787-.92-.612-.16-1.29-.156-1.895.194l-3.22 1.86c-.605.349-.948.933-1.115 1.543-.167.605-.182 1.297-.098 2.007.17 1.425.766 3.11 1.711 4.748.946 1.638 2.108 2.996 3.256 3.855.573.429 1.18.761 1.787.92.613.16 1.29.155 1.895-.195l.008-.004 3.212-1.855c.606-.35.948-.933 1.116-1.544.061-.224.102-.46.125-.705a.99.99 0 0 0 .095.005h9.295a.99.99 0 0 0 .095-.005c.023.245.064.481.126.705.168.61.51 1.194 1.116 1.544l3.22 1.859c.605.35 1.282.353 1.895.194.607-.159 1.214-.491 1.786-.92 1.15-.86 2.31-2.217 3.256-3.855.946-1.639 1.542-3.323 1.711-4.748.085-.71.07-1.402-.097-2.007-.168-.61-.51-1.194-1.116-1.544a1.848 1.848 0 0 0-.045-.025l-3.175-1.833c-.605-.35-1.282-.354-1.895-.195-.607.159-1.214.491-1.786.92-.214.16-.428.337-.641.53V15ZM10.945 29.55a7.017 7.017 0 0 0-.56-.38l1.028-.594c.06-.035.201-.082.496-.006.3.079.69.271 1.143.61.902.675 1.908 1.823 2.759 3.296.85 1.474 1.341 2.919 1.475 4.038.067.562.039.995-.044 1.294-.08.294-.191.392-.253.427l-1.028.594a7.027 7.027 0 0 0-.049-.676c-.17-1.424-.765-3.109-1.711-4.747-.946-1.639-2.107-2.996-3.256-3.856Zm26.476-.38-1.028-.594c-.061-.036-.202-.083-.496-.006-.3.079-.69.27-1.143.61-.903.675-1.908 1.822-2.76 3.296-.85 1.474-1.34 2.918-1.474 4.038-.067.562-.039.995.043 1.294.081.294.192.392.253.427l1.029.594c.005-.222.021-.449.049-.677.17-1.424.765-3.109 1.71-4.747.947-1.638 2.108-2.996 3.257-3.856a6.9 6.9 0 0 1 .56-.38ZM24 10a8.977 8.977 0 0 1 6.711 3.003 7.003 7.003 0 0 0-13.422 0A8.977 8.977 0 0 1 24 10Zm.832 18.236a.93.93 0 1 1-1.859 0 .93.93 0 0 1 1.86 0Zm0 3.718a.93.93 0 1 1-1.859 0 .93.93 0 0 1 1.86 0Zm.93-.93a.93.93 0 1 0 0-1.859.93.93 0 0 0 0 1.86Zm-2.789-.93a.93.93 0 1 1-1.859 0 .93.93 0 0 1 1.86 0Zm.93-11.224c-.71 0-1.297.36-1.74.774-.448.418-.844.977-1.194 1.587a1 1 0 0 0 1.734.996c.301-.524.58-.894.825-1.122.248-.231.369-.235.375-.235.006 0 .127.004.375.235.244.228.523.598.825 1.122a1 1 0 0 0 1.734-.996c-.35-.61-.747-1.17-1.194-1.587-.444-.414-1.03-.773-1.74-.773Zm4.647 11.225a4.647 4.647 0 1 1-9.295 0 4.647 4.647 0 0 1 9.295 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledRespirator);
export default ForwardRef;
