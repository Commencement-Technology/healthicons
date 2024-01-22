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
        d="M22.86 4H20.93l-.95 6.541 3.907 24.763s-7.653 3.349-9.088 3.349c-.499 0-.998-.116-1.475-.227-.896-.207-1.718-.398-2.324.227-.929.956-1.687 2.13 0 3.826 1.687 1.695 4.763 1.911 8.582.957 4.974-1.244 6.518-.65 7.793-.158.688.265 1.297.5 2.323.401 2.559-.246 3.454-1.668 4.046-2.61.086-.136.166-.263.244-.374.61-.878.145-4.329-2.047-5.874-.16-.858 1.04-6.903 2.518-12.158 2.308-8.208-.508-13.716-2.368-17.354-.197-.385-.383-.965-.552-1.309h-2.172l.976 2.104h.005l.038.076c.222.435.453.89.685 1.364l.01.019c1.684 3.46 3.379 8.03 1.536 14.582a116.768 116.768 0 0 0-1.906 7.863 57.483 57.483 0 0 0-.545 3.012c-.06.406-.106.78-.131 1.097-.02.249-.047.67.025 1.055l.143.765.635.448c.615.433 1.089 1.226 1.33 2.12.116.432.157.815.153 1.087a1.75 1.75 0 0 1-.01.165c-.117.175-.21.323-.292.454-.198.318-.336.537-.627.816-.318.303-.836.648-1.877.748a2.125 2.125 0 0 1-.964-.103 9.296 9.296 0 0 1-.464-.17h-.001l-.073-.028-.103-.04a10.9 10.9 0 0 0-.987-.332c-1.649-.458-3.811-.52-7.805.478-3.723.93-5.85.466-6.762-.451-.3-.3-.402-.491-.433-.565l-.003-.008a.807.807 0 0 1 .057-.101c.054-.084.131-.182.24-.303a8.512 8.512 0 0 1 .609.123c.13.03.285.067.506.114a7.03 7.03 0 0 0 1.467.177c.45 0 .936-.114 1.291-.208.408-.107.872-.254 1.352-.418.965-.33 2.091-.762 3.15-1.185a150.99 150.99 0 0 0 3.971-1.658l.09-.04 1.354-.592-4.092-25.936L22.86 4ZM12.075 40.14h-.005.005Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.344 6.104 29.368 4H22.86l-.944 6.53 4.092 25.935-1.354.592-.09.04a154.19 154.19 0 0 1-3.971 1.658 68.621 68.621 0 0 1-3.15 1.185c-.48.164-.944.31-1.352.419-.355.093-.842.207-1.291.207a7.03 7.03 0 0 1-1.467-.177 22.59 22.59 0 0 1-.506-.114 8.512 8.512 0 0 0-.46-.1 3.119 3.119 0 0 0-.15-.023c-.108.12-.185.22-.239.303a.807.807 0 0 0-.057.101l.003.008c.031.074.133.264.433.565.913.917 3.04 1.381 6.762.45 3.994-.998 6.156-.935 7.805-.477.389.108.719.23.987.332l.103.04.073.028h.001c.188.072.32.123.463.17.282.092.536.144.965.103 1.04-.1 1.559-.445 1.877-.748.291-.279.429-.498.627-.816.082-.131.174-.279.292-.454a1.75 1.75 0 0 0 .01-.165 4.076 4.076 0 0 0-.153-1.086c-.241-.895-.715-1.688-1.33-2.121l-.635-.448-.143-.765c-.072-.385-.045-.806-.025-1.055.025-.317.071-.69.131-1.097.12-.817.309-1.855.545-3.013a116.768 116.768 0 0 1 1.906-7.862c1.843-6.552.148-11.123-1.537-14.582l-.01-.019c-.23-.475-.462-.929-.684-1.364l-.038-.076h-.005ZM24.561 8.92a.957.957 0 0 1 1.353.02c.427.439.733.876.927 1.322a4.399 4.399 0 0 1 2.81-.497.957.957 0 0 1-.274 1.894 2.585 2.585 0 0 0-2.476 1.033l-.085.28c-.103.328-.179.571-.172.9.007.352.132.87.83 1.57a.957.957 0 0 1-1.356 1.35c-.989-.994-1.369-1.962-1.387-2.883-.013-.678.193-1.321.308-1.678a7.471 7.471 0 0 0 .057-.186c.091-.332.115-.56.067-.783-.046-.218-.184-.54-.621-.989a.957.957 0 0 1 .02-1.353Zm4.516 11.697a.957.957 0 0 1 1.836.538c-.432 1.472-1.64 1.856-2.012 1.974l-.05.017c-.066.021-.13.038-.194.05a1.778 1.778 0 0 0-.701.399c-.235.222-.422.54-.404 1.047a.957.957 0 1 1-1.912.07c-.038-1.03.345-1.82.867-2.374a4.755 4.755 0 0 1-.682-.79.957.957 0 0 1 1.58-1.08c.194.285.46.545.703.707.104.069.184.106.234.124.147-.049.268-.092.392-.178.123-.086.26-.223.343-.504Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgVaricoseVein;
