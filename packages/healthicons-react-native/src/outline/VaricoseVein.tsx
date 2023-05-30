import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVaricoseVein = (passedProps: SvgProps) => {
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
        d="M22.86 4H20.93l-.95 6.541 3.907 24.763s-7.653 3.349-9.088 3.349c-.499 0-.998-.116-1.475-.227-.896-.207-1.718-.398-2.324.227-.929.956-1.687 2.13 0 3.826 1.687 1.695 4.763 1.911 8.582.957 4.974-1.244 6.518-.65 7.793-.158.688.265 1.297.5 2.323.401 2.559-.246 3.454-1.668 4.046-2.61.086-.136.166-.263.244-.374.61-.878.145-4.329-2.047-5.874-.16-.858 1.04-6.903 2.518-12.158 2.308-8.208-.508-13.716-2.368-17.354-.197-.385-.383-.965-.552-1.309h-2.172l.976 2.104h.005l.038.076c.222.435.453.89.685 1.364l.01.019c1.684 3.46 3.379 8.03 1.536 14.582a116.833 116.833 0 0 0-1.906 7.863 57.575 57.575 0 0 0-.545 3.012c-.06.406-.106.78-.131 1.097-.02.249-.047.67.025 1.055l.143.765.635.448c.615.433 1.089 1.226 1.33 2.12.116.432.157.815.153 1.087a1.748 1.748 0 0 1-.01.165c-.117.175-.21.323-.292.454-.198.318-.336.537-.627.816-.318.303-.836.648-1.877.748a2.125 2.125 0 0 1-.964-.103 9.296 9.296 0 0 1-.464-.17h-.001l-.073-.028-.103-.04a10.9 10.9 0 0 0-.987-.332c-1.649-.458-3.811-.52-7.805.478-3.723.93-5.85.466-6.762-.451-.3-.3-.402-.491-.433-.565l-.003-.008a.807.807 0 0 1 .057-.101c.054-.084.131-.182.24-.303a8.512 8.512 0 0 1 .609.123c.13.03.285.067.506.114a7.03 7.03 0 0 0 1.467.177c.45 0 .936-.114 1.291-.208.408-.107.872-.254 1.352-.418.965-.33 2.091-.762 3.15-1.185a150.99 150.99 0 0 0 3.971-1.658l.09-.04 1.354-.592-4.092-25.936L22.86 4Zm1.794 33.057-.766-1.753.766 1.753Zm-12.58 3.083h-.004.005Z"
        fill="#333"
      />
      <Path
        d="M24.561 8.92a.957.957 0 0 1 1.353.02c.427.439.733.876.927 1.322a4.399 4.399 0 0 1 2.81-.497.957.957 0 0 1-.274 1.894 2.585 2.585 0 0 0-2.476 1.033l-.085.28c-.103.328-.179.571-.172.9.007.352.132.87.83 1.57a.957.957 0 0 1-1.356 1.35c-.989-.994-1.369-1.962-1.387-2.883-.013-.678.193-1.321.308-1.678.024-.076.044-.139.057-.186.091-.332.115-.56.067-.783-.046-.218-.184-.54-.621-.989a.957.957 0 0 1 .02-1.353Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.077 20.617a.957.957 0 0 1 1.836.538c-.432 1.472-1.64 1.856-2.012 1.974l-.05.017c-.066.021-.13.038-.194.05a1.778 1.778 0 0 0-.701.399c-.235.222-.422.54-.404 1.047a.957.957 0 1 1-1.912.07c-.038-1.03.345-1.82.867-2.374a4.755 4.755 0 0 1-.682-.79.957.957 0 0 1 1.58-1.08c.194.285.46.545.703.707.104.069.184.106.234.124.147-.049.268-.092.392-.178.123-.086.26-.223.343-.504Zm-.696.693a.03.03 0 0 0 .004 0h-.004Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgVaricoseVein;
