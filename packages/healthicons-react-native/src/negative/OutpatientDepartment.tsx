import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOutpatientDepartment = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#outpatient_department_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm7.575 16.452a17.376 17.376 0 0 0-1.495 5.15v8.853a1.5 1.5 0 0 1-3 0v-6.348l-.167-.303a19.364 19.364 0 0 1-.545-1.09c-.198-.43-.407-.933-.569-1.441-.156-.49-.299-1.08-.299-1.658 0-2.012.64-4.048 1.74-5.613 1.095-1.559 2.785-2.82 4.896-2.82a1.5 1.5 0 0 1 1.45 1.119l1.174 4.467h2.906a1.5 1.5 0 1 1 0 3h-4.063a1.5 1.5 0 0 1-1.451-1.119l-.577-2.197Zm6.38-8.381c-.36 1.32-1.59 2.293-3.054 2.293-1.746 0-3.16-1.384-3.16-3.091 0-.121.007-.241.02-.36 1.197.703 2.255 1.107 3.362 1.255.928.124 1.842.062 2.832-.097Zm-5.313-2.96a3.186 3.186 0 0 1 2.259-.929c1.308 0 2.43.777 2.91 1.885-.962.165-1.707.215-2.422.119-.806-.108-1.645-.412-2.747-1.075Zm6.604 3.707c.655 0 1.185-.865 1.185-1.932 0-1.066-.53-1.931-1.185-1.931-.654 0-1.185.864-1.185 1.931 0 1.067.53 1.932 1.185 1.932Zm9.876 4.637c1.746 0 3.16-1.384 3.16-3.091 0-1.707-1.414-3.091-3.16-3.091-1.745 0-3.16 1.384-3.16 3.09 0 1.708 1.415 3.092 3.16 3.092Zm-3.69 6.315.606 1.317a1.5 1.5 0 0 0 1.363.873h4.091a1.5 1.5 0 1 0 0-3h-3.13l-2.11-4.587a1.5 1.5 0 0 0-1.671-.84L29.89 21c-.31-1.468-.31-1.468-.312-1.467h-.003l-.005.002-.012.002-.03.007a2.512 2.512 0 0 0-.28.083c-.163.055-.375.14-.618.265-.488.251-1.1.665-1.695 1.334-1.211 1.361-2.214 3.61-2.214 7.244 0 .68.308 1.215.617 1.576.068.08.14.155.214.227H17.53V38h1.58v-5.409h8.69V38h1.58V32.148a37.509 37.509 0 0 0 2.004.555h.001l.118.03.264.385c.318.469.727 1.085 1.133 1.702a404.833 404.833 0 0 1 1.463 2.24l.1.155.027.04.006.01.002.004 1.26-.815-1.26.815a1.5 1.5 0 1 0 2.52-1.63l-1.26.815 1.26-.815h-.001l-.002-.003-.007-.01-.027-.042-.1-.156a477.617 477.617 0 0 0-1.474-2.257c-.409-.62-.827-1.25-1.157-1.738a31.451 31.451 0 0 0-.43-.62 7.04 7.04 0 0 0-.168-.226 2.584 2.584 0 0 0-.1-.121l-.003-.003c-.019-.022-.126-.145-.281-.255-.179-.127-.357-.19-.38-.198h-.002a2.643 2.643 0 0 0-.154-.052 8.392 8.392 0 0 0-.272-.076l-.343-.088-.388-.1c-.506-.132-1.124-.3-1.746-.501-.047-1.066.016-1.88.191-2.605a6.38 6.38 0 0 1 .258-.818Z"
        />
      </G>
      <Defs>
        <ClipPath id="outpatient_department_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgOutpatientDepartment;
