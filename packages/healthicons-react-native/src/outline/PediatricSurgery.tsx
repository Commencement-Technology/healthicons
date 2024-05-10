import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPediatricSurgery = (passedProps: SvgProps) => {
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
        d="M25.826 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.326 17.995c.334-.667.7-2.3-.5-3.5-1.2-1.2-2.5-.995-3.5-.5-.462.229-.923.79-1.472 1.458-1.235 1.502-2.913 3.542-6.028 3.542-3.115 0-4.792-2.04-6.027-3.542-.55-.668-1.011-1.23-1.473-1.458-1-.495-2.3-.7-3.5.5-1.2 1.2-.833 2.833-.5 3.5 1.449 3.105 3.243 5.024 5.5 6.005v5c0 .19.024.405.076.634a9.241 9.241 0 0 0-3.076 6.912c0 1.002.188 2.505.728 3.795.527 1.258 1.558 2.66 3.383 2.66 1.8 0 3.223-1.487 3.223-3.273 0-.773-.294-1.444-.5-1.915l-.029-.063c-.233-.536-.36-.863-.36-1.204 0-.34.179-.872.54-1.46.332-.538.734-.988 1.047-1.234.32.09.646.148.968.148.322 0 .649-.058.968-.148.314.246.715.696 1.047 1.234.362.588.54 1.12.54 1.46 0 .332-.127.666-.362 1.21l-.03.069c-.204.472-.496 1.146-.496 1.902 0 1.787 1.422 3.273 3.222 3.273 1.819 0 2.84-1.49 3.358-2.73.543-1.3.753-2.798.753-3.724a9.241 9.241 0 0 0-3.075-6.912c.05-.23.075-.444.075-.634v-5c2.257-.98 4.051-2.9 5.5-6.005Zm-21.199-.87.011.024c1.314 2.814 2.809 4.288 4.485 5.017l1.203.523V26h8v-3.311l1.203-.523c1.676-.729 3.172-2.203 4.485-5.017l.011-.024.012-.024c.036-.071.122-.323.115-.604a.797.797 0 0 0-.24-.588c-.15-.15-.266-.22-.339-.253a.524.524 0 0 0-.195-.05c-.137-.009-.355.029-.66.18.002-.002.003-.003.005-.003l.006-.002-.02.021c-.053.05-.21.201-.522.572l-.256.31c-.347.423-.798.972-1.296 1.484-1.334 1.372-3.318 2.827-6.309 2.827-2.99 0-4.975-1.455-6.309-2.827a23.64 23.64 0 0 1-1.296-1.484l-.256-.31c-.31-.371-.468-.521-.521-.572a2.073 2.073 0 0 0-.02-.021s.003 0 .01.004c-.306-.15-.523-.188-.66-.18a.524.524 0 0 0-.195.05 1.211 1.211 0 0 0-.339.254.797.797 0 0 0-.24.588c-.007.28.08.533.115.604l.012.024ZM16.2 29.992c-.306-.474-.374-.873-.374-.992v-1h8v1c0 .119-.068.518-.373.992-.285.44-.735.88-1.412 1.168-.19.082-.404.184-.586.27l-.104.05c-.222.104-.428.2-.633.283-.435.176-.72.237-.892.237-.171 0-.456-.06-.892-.237a12.266 12.266 0 0 1-.633-.284l-.104-.049a16.555 16.555 0 0 0-.586-.27 3.098 3.098 0 0 1-1.411-1.168Zm-3.374 6.554c0-1.965.768-3.74 2.009-5.035A5.136 5.136 0 0 0 16.826 33l.034.015c-.273.313-.53.663-.752 1.023-.44.715-.837 1.626-.837 2.508 0 .797.298 1.479.508 1.96l.02.044c.238.545.36.857.36 1.178 0 .724-.568 1.272-1.222 1.272-.588 0-1.113-.417-1.538-1.432-.411-.982-.573-2.206-.573-3.022Zm10.718-2.508a7.76 7.76 0 0 0-.752-1.023l.034-.015a5.136 5.136 0 0 0 1.992-1.49 7.252 7.252 0 0 1 2.008 5.036c0 .705-.173 1.935-.598 2.953-.451 1.08-.986 1.501-1.513 1.501-.654 0-1.222-.548-1.222-1.273 0-.307.123-.622.362-1.178l.02-.046c.21-.483.507-1.171.507-1.957 0-.882-.397-1.793-.838-2.508ZM35.73 37.8l-1.6 1.2v-9c0-.97.46-1.832 1.175-2.38a2.498 2.498 0 0 1-1.174-2.12v-14a2.5 2.5 0 1 1 5 0v14c0 .697-.285 1.327-.745 1.78 1.04.485 1.786 1.555 1.58 2.869a12.832 12.832 0 0 1-2.385 5.697 11.725 11.725 0 0 1-1.259 1.437 8.535 8.535 0 0 1-.534.473l-.02.016-.017.013-.013.01-.004.003h-.002l-.001.002Zm-.6-.8.6.8-.6-.8Zm2-15.414-1 1v-2.172l1-1v2.172Zm-1-4 1-1V11.5a.5.5 0 0 0-1 0v6.086Zm0 7.828 1-1V25.5a.5.5 0 0 1-1 0v-.086Zm0 9.026a10.84 10.84 0 0 0 1.86-4.601c.06-.378-.256-.839-.86-.839a1 1 0 0 0-1 1v4.44Z"
      />
    </Svg>
  );
};
export default SvgPediatricSurgery;
