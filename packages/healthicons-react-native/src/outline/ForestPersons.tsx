import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgForestPersons = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.095 22.19A3.81 3.81 0 0 0 9.905 26H15v11H8.5a2.5 2.5 0 0 0 0 5h31a2.5 2.5 0 0 0 0-5h-.477a1 1 0 0 0 .902-1.38l-1.616-3.929a.999.999 0 0 0-.239-.348l-2.795-2.632.938-3.609c.29.53.591 1.01.95 1.416.44.498.954.873 1.61 1.12.636.238 1.36.338 2.2.362a1 1 0 0 0 .055-2c-.726-.02-1.206-.105-1.553-.235a1.939 1.939 0 0 1-.813-.57c-.258-.293-.513-.702-.833-1.311-.187-.356-.376-.74-.592-1.18-.162-.33-.34-.69-.544-1.095-.355-.702-1.102-1.136-1.703-1.358-.605-.224-1.43-.37-2.126-.121-3.005 1.071-4.706 3.353-5.81 6.543a1 1 0 0 0 1.891.654c.61-1.762 1.365-3.073 2.385-4.006l-.326 3.588a1 1 0 0 0 .31.819l5.228 4.923 1.533 3.73a1 1 0 0 0 .902.619H28.01c.21-.002.42-.07.6-.207l3-2.308a1 1 0 0 0 .347-.504l.862-2.855-1.653-1.565-.201.786-.83 2.749-2.745 2.111a1 1 0 0 0 .6 1.793H17V26h5.286a3.81 3.81 0 0 0 1.792-7.172c.13-.443.199-.912.199-1.4 0-2.008-1.187-3.726-2.866-4.426.09-.414.139-.845.139-1.288C21.55 8.558 19.108 6 16.095 6c-3.012 0-5.454 2.558-5.454 5.714 0 .443.048.874.139 1.288-1.68.7-2.867 2.418-2.867 4.426 0 .488.07.957.2 1.4a3.809 3.809 0 0 0-2.018 3.363Zm13.003-7.985.36-1.632c.06-.274.092-.561.092-.859C19.55 9.574 17.916 8 16.095 8c-1.821 0-3.454 1.574-3.454 3.714 0 .298.032.585.092.859l.359 1.632-1.543.643c-.92.383-1.636 1.364-1.636 2.58 0 .296.043.576.12.837l.456 1.561-1.434.766A1.809 1.809 0 0 0 9.905 24H15v-3h2v3h5.286a1.81 1.81 0 0 0 .85-3.408l-1.435-.766.457-1.56c.077-.262.119-.542.119-.837 0-1.217-.716-2.198-1.636-2.58l-1.543-.644ZM8 39.5a.5.5 0 0 1 .5-.5h31a.5.5 0 0 1 0 1h-31a.5.5 0 0 1-.5-.5Z"
        fill="#000"
      />
      <Path d="M38 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="#000" />
    </Svg>
  );
};
export default SvgForestPersons;
