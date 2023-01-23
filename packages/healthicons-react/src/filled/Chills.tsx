import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChills = (
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
        d="M16.167 15.35A2 2 0 0 1 18 14h12a2 2 0 0 1 1.833 1.35l2.059 6a2 2 0 0 1-.577 2.158l-.131.043c-.396.133-.952.377-1.517.625l-.147.065c-.48.21-.986.43-1.483.628l-.037.013c-.157.062-.313.122-.467.178-.672.245-1.214.389-1.578.41a1.423 1.423 0 0 1-.074.003c-.205-.663-.35-1.393-.265-2.028.045-.335.15-.619.326-.855.174-.233.454-.471.93-.662l.928-.37-.743-1.858-.928.372c-.775.31-1.37.759-1.79 1.323a3.79 3.79 0 0 0-.705 1.785c-.157 1.172.156 2.352.417 3.136.16.48.502.813.918.99.374.16.773.181 1.107.161.6-.036 1.282-.226 1.924-.45V42a2 2 0 0 1-3.994.153L25.07 30h-2.142l-.935 12.153A2 2 0 0 1 18 42V27.007c.778.233 1.589.425 2.277.46.365.02.782 0 1.165-.142.417-.154.827-.47 1.007-1.009.294-.883.455-2.088.142-3.261-.326-1.223-1.158-2.359-2.72-2.983l-.928-.372-.743 1.857.929.372c.938.375 1.356.989 1.53 1.641.166.623.114 1.32-.043 1.9a1.926 1.926 0 0 1-.237 0c-.48-.024-1.164-.18-1.96-.426a23.944 23.944 0 0 1-.419-.133v-.029l-2.7-1.009a2 2 0 0 1-1.192-2.522l2.06-6Z"
        fill="#333"
      />
      <path d="M28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.722 15.043C11.259 14.505 12.07 14 13 14h1v2h-1c-.213 0-.545.137-.864.457a1.881 1.881 0 0 0-.337.45.953.953 0 0 0-.072.172l-.005.019c.012.02.031.049.06.088.11.146.27.308.496.535l.023.023c.198.198.456.455.66.727.204.272.468.703.468 1.243 0 .466-.238.803-.431 1.002a2.71 2.71 0 0 1-.615.453c-.307.172-.698.34-1.04.488l-.228.098c-.433.19-.768.353-.99.515a1.37 1.37 0 0 0-.075.058c.11.1.28.2.583.372l.038.02c.259.146.637.359.942.644.356.334.673.823.673 1.493 0 1.067-.704 1.764-1.092 2.15l-.058.057c-.467.467-.558.617-.564.774.009.02.041.08.144.18.17.166.431.34.749.507a7.82 7.82 0 0 0 1.232.511l.017.006h.003l.957.287-.575 1.916-.958-.287.276-.92-.276.92h-.002l-.003-.002-.01-.003-.03-.01a8.453 8.453 0 0 1-.465-.16 9.79 9.79 0 0 1-1.096-.487c-.397-.208-.849-.488-1.215-.846-.357-.347-.749-.885-.749-1.593 0-1.066.704-1.764 1.092-2.15l.058-.057c.477-.476.562-.623.565-.783a.384.384 0 0 0-.041-.044c-.11-.102-.28-.204-.592-.38a12.187 12.187 0 0 1-.038-.021c-.259-.145-.637-.358-.942-.643-.356-.334-.673-.823-.673-1.493 0-.812.546-1.34.947-1.632.42-.306.943-.545 1.367-.73l.293-.128c.244-.106.45-.194.624-.28a9.991 9.991 0 0 0-.367-.38l-.022-.022c-.198-.199-.456-.456-.66-.728-.204-.272-.468-.703-.468-1.243 0-.805.488-1.58 1.008-2.1ZM37.979 15.15C37.593 14.636 36.905 14 36 14h-1v2h.987c.01.003.04.014.088.046.087.058.195.16.304.304.231.309.332.632.335.784a.673.673 0 0 1-.072.162 5.275 5.275 0 0 1-.387.554c-.15.2-.344.459-.497.731-.159.283-.33.673-.33 1.133 0 .736.541 1.187.802 1.383.247.185.563.366.819.513l.161.093c.322.188.547.336.691.476.066.064.09.102.1.12 0 .074-.004.132-.458.472l-.052.04c-.401.297-1.205.895-1.205 2.046 0 .98.499 1.643.81 2.056.01.015.022.03.033.044.336.448.442.63.442.9 0 .033-.012.118-.127.268a2.392 2.392 0 0 1-.518.466 4.924 4.924 0 0 1-.86.477l-.01.004h-.001l-.926.37.742 1.858.929-.372-.371-.928c.371.928.37.929.371.928h.002l.003-.002.009-.003.026-.011a4.971 4.971 0 0 0 .37-.172c.23-.114.544-.286.864-.51.314-.22.67-.515.955-.886.287-.373.542-.877.542-1.487 0-.98-.499-1.643-.81-2.056l-.032-.044c-.337-.448-.443-.63-.443-.9v-.01c-.001-.076-.002-.132.457-.476l.052-.039c.4-.297 1.205-.895 1.205-2.046 0-.692-.356-1.202-.705-1.54-.337-.33-.756-.583-1.077-.77a49.875 49.875 0 0 0-.232-.135c-.2-.115-.353-.203-.48-.29a5.47 5.47 0 0 1 .365-.522l.017-.022c.15-.2.344-.459.497-.731.159-.282.33-.673.33-1.133 0-.709-.33-1.45-.736-1.993Zm-.647 4.261s.003.005.013.015a.073.073 0 0 0-.013-.015Zm.672 2.898s0-.003-.003-.008l.003.008Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChills);
export default ForwardRef;