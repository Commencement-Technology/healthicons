import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgInsecticideResistance = (passedProps: SvgProps) => {
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
        d="M24 4a1 1 0 0 1 1 1v6.317a2.558 2.558 0 0 1 .66.664l1.7-1.416a1 1 0 0 1 .422-.208l3-.667a1 1 0 0 1 .434 1.953l-2.763.614-1.813 1.511a1.007 1.007 0 0 1-.147.102l.02.067 11.172 1.287.196.618c.25.794.15 1.92-.783 2.81-.894.853-2.406 1.348-4.683 1.348-2.383 0-4.014-.74-5.049-1.802a4.99 4.99 0 0 1-.368-.423 18.653 18.653 0 0 1-.031 1.34c.036.02.07.041.105.065l2.248 1.57a1 1 0 0 1 .241.238l1.212 1.696 2.018.506a1 1 0 0 1-.488 1.94l-2.374-.596a1 1 0 0 1-.57-.389l-1.325-1.854-1.352-.944c-.08.393-.175.762-.284 1.101l1.618 1.355a1 1 0 0 1 .337.971l-.473 2.26 1.259 1.259a1 1 0 1 1-1.414 1.414l-1.641-1.641a1 1 0 0 1-.272-.912l.46-2.202-.812-.68c-.33.375-.817.728-1.46.728-.599 0-1.061-.305-1.39-.65l-.483.521.477 2.283a1 1 0 0 1-.272.912l-1.64 1.641a1 1 0 1 1-1.415-1.414l1.259-1.259-.472-2.26a1 1 0 0 1 .246-.885l1.303-1.403a10.513 10.513 0 0 1-.263-.983l-.948.76-1.345 1.882a1 1 0 0 1-.57.389l-2.374.596a1 1 0 1 1-.487-1.94l2.017-.506 1.212-1.696a1 1 0 0 1 .188-.198L21 19.22a.914.914 0 0 1 .037-.028A18.862 18.862 0 0 1 21 17.774a4.99 4.99 0 0 1-.369.423C19.599 19.259 17.968 20 15.585 20c-2.277 0-3.79-.495-4.684-1.348-.933-.89-1.033-2.016-.782-2.81l.195-.619 11.174-1.286.019-.067a1.01 1.01 0 0 1-.147-.102l-1.813-1.511-2.764-.614a1 1 0 0 1 .434-1.953l3 .667a1 1 0 0 1 .424.208l1.7 1.416a2.555 2.555 0 0 1 .66-.664V5a1 1 0 0 1 1-1Zm11.87 13.028c-.04.058-.09.117-.152.177-.354.338-1.248.795-3.303.795-1.95 0-3.026-.593-3.616-1.198a2.922 2.922 0 0 1-.476-.643l7.546.869Zm-23.74 0c.039.058.088.117.15.177.355.338 1.25.795 3.304.795 1.95 0 3.026-.593 3.616-1.198.202-.207.358-.427.476-.643l-7.546.869ZM23 18c0-1.58.214-2.967.534-3.926.159-.477.326-.795.466-.975.139.18.306.498.465.975.32.959.535 2.347.535 3.926 0 1.58-.215 2.968-.535 3.926-.159.477-.326.795-.465.975-.14-.18-.307-.498-.466-.975C23.214 20.968 23 19.58 23 18Z"
        fill="#000"
      />
      <Path
        d="M23 40.586 28.586 35H25v-2h7v7h-2v-3.586L24.414 42H36v2H12v-2h9.586l-7.293-7.293 1.414-1.414L23 40.586Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgInsecticideResistance;
