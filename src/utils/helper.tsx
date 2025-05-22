import {IconNamesI} from '../assets/icons';

export const generateBottomTabIcon = (id: number) => {
  let iconName = IconNamesI.home;
  switch (id) {
    case 1:
      iconName = IconNamesI.log;
      break;

    case 2:
      iconName = IconNamesI.profile;
      break;

    case 3:
      iconName = IconNamesI.myPortfolio;
      break;

    default:
      break;
  }
  return iconName;
};
