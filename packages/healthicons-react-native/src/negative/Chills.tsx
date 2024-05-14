import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChills = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#chills_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm16.167 15.35A2 2 0 0 1 18 14h12a2 2 0 0 1 1.833 1.35l2.059 6a2 2 0 0 1-.577 2.158l-.131.043c-.396.133-.952.377-1.517.625l-.147.065c-.48.21-.986.43-1.483.628l-.037.013c-.157.062-.313.122-.467.178-.672.245-1.214.389-1.578.41a1.423 1.423 0 0 1-.074.003c-.205-.663-.35-1.393-.265-2.028.045-.335.15-.619.326-.855.174-.233.454-.471.93-.662l.928-.37-.743-1.858-.928.372c-.775.31-1.37.759-1.79 1.323a3.79 3.79 0 0 0-.705 1.785c-.157 1.172.156 2.352.417 3.136.16.48.502.813.918.99.374.16.773.181 1.107.161.6-.036 1.282-.226 1.924-.45V42a2 2 0 0 1-3.994.153L25.07 30h-2.142l-.935 12.153A2 2 0 0 1 18 42V27.007c.778.233 1.589.425 2.277.46.365.02.782 0 1.165-.142.417-.154.827-.47 1.007-1.009.294-.883.455-2.088.142-3.261-.326-1.223-1.158-2.359-2.72-2.983l-.928-.372-.743 1.857.929.372c.938.375 1.356.989 1.53 1.641.166.623.114 1.32-.043 1.9a1.926 1.926 0 0 1-.237 0c-.48-.024-1.164-.18-1.96-.426a23.944 23.944 0 0 1-.419-.133v-.029l-2.7-1.009a2 2 0 0 1-1.192-2.522l2.06-6ZM24 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-13.278 3.043C11.259 14.505 12.07 14 13 14h1v2h-1c-.213 0-.545.137-.864.457a1.881 1.881 0 0 0-.337.45.953.953 0 0 0-.075.184l-.002.007c.012.02.031.049.06.088.11.146.27.308.496.535l.023.023c.198.198.456.455.66.727.204.272.468.703.468 1.243 0 .466-.238.803-.431 1.002a2.71 2.71 0 0 1-.615.453c-.307.172-.698.34-1.04.488l-.228.098c-.433.19-.768.353-.99.515a1.37 1.37 0 0 0-.075.058c.11.1.28.2.583.372l.038.02c.259.146.637.359.942.644.356.334.673.823.673 1.493 0 1.067-.704 1.764-1.092 2.15l-.058.057c-.467.467-.558.617-.564.774.009.02.041.08.144.18.17.166.431.34.749.507a7.82 7.82 0 0 0 1.232.511l.017.006h.002l.958.287-.575 1.916-.958-.287.276-.92-.276.92h-.002l-.003-.002-.01-.003-.03-.01a8.453 8.453 0 0 1-.465-.16 9.79 9.79 0 0 1-1.096-.487c-.397-.208-.849-.488-1.215-.846-.357-.347-.749-.885-.749-1.593 0-1.066.704-1.764 1.092-2.15l.058-.057c.477-.476.562-.623.565-.783a.384.384 0 0 0-.041-.044c-.11-.102-.28-.204-.592-.38l-.038-.021c-.259-.145-.637-.358-.942-.643-.356-.334-.673-.823-.673-1.493 0-.812.546-1.34.947-1.632.42-.306.943-.545 1.367-.73l.293-.128c.244-.106.45-.194.624-.28a9.991 9.991 0 0 0-.367-.38l-.022-.022c-.198-.199-.456-.456-.66-.728-.204-.272-.468-.703-.468-1.243 0-.805.488-1.58 1.008-2.1ZM36 14c.905 0 1.593.636 1.979 1.15.406.542.735 1.284.735 1.993 0 .46-.17.85-.329 1.133-.153.272-.348.532-.497.731l-.017.022a5.47 5.47 0 0 0-.364.523c.126.086.279.174.479.29l.232.134c.321.187.74.44 1.077.77.349.338.705.848.705 1.54 0 1.15-.804 1.749-1.205 2.046l-.052.04c-.459.343-.458.399-.457.475v.01c0 .27.106.452.443.9l.033.044c.31.413.81 1.076.81 2.056 0 .61-.256 1.114-.543 1.487-.285.37-.64.666-.956.886a6.923 6.923 0 0 1-1.233.682l-.026.01-.009.004-.003.002h-.001L36.429 30l.371.928-.928.372-.743-1.857.927-.371.01-.004a3.951 3.951 0 0 0 .25-.116c.172-.086.395-.21.61-.36.222-.155.401-.316.518-.467.115-.15.127-.235.127-.268 0-.27-.106-.451-.442-.9l-.034-.044c-.31-.413-.81-1.076-.81-2.056 0-1.151.805-1.749 1.206-2.047l.052-.039c.454-.34.458-.398.457-.473a.503.503 0 0 0-.099-.119c-.144-.14-.369-.288-.69-.476l-.162-.093c-.256-.147-.572-.328-.819-.513-.26-.196-.801-.647-.801-1.383 0-.46.17-.85.329-1.133.153-.272.348-.532.497-.731l.016-.021c.17-.227.288-.387.37-.534a.673.673 0 0 0 .073-.16c-.003-.153-.104-.476-.335-.785a1.32 1.32 0 0 0-.304-.304.367.367 0 0 0-.088-.046H35v-2h1Zm1.332 5.411s.003.005.013.015a.073.073 0 0 0-.013-.015Zm.672 2.898s0-.003-.003-.008l.003.008Z"
        />
      </G>
      <Defs>
        <ClipPath id="chills_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgChills;
