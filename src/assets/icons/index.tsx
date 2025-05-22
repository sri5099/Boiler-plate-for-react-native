import React from 'react';
import {SvgProps} from 'react-native-svg';
import Home from '../svg/Home.svg';
import Log from '../svg/Log.svg';
import MyPortfolio from '../svg/MyPortfolio.svg';
import Profile from '../svg/Profile.svg';

export const enum IconNamesI {
  home = 'Home',
  log = 'Log',
  profile = 'Profile',
  myPortfolio = 'myPortfolio',
}

export const icons: Record<IconNamesI, React.FC<SvgProps>> = {
  [IconNamesI.home]: Home,
  [IconNamesI.log]: Log,
  [IconNamesI.profile]: Profile,
  [IconNamesI.myPortfolio]: MyPortfolio,
};

// export const icons:name = {
//   home: Home,
// //   log: Log,
// //   myPortfolio: MyPortfolio,
// //   profile: Profile,
// };

export type IconName = keyof typeof icons;

type Props = SvgProps & {
  name: IconName;
};

const Icon = ({name, ...props}: Props) => {
  const Svg = icons[name];
  return <Svg {...props} />;
};

export default Icon;
