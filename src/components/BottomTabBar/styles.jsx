import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {fontSizes} from '../../theme/fontSizes';
import {Fonts} from '../../theme/fonts';
import {deviceHeight} from '../../theme/dimensions';

type Props = {
  colors: Colors,
  fonts: Fonts,
};

export const getStyles = ({colors, fonts}: Props) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    tabButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: deviceHeight * 0.09,
    },
    label: {
      fontSize: fontSizes.sm,
      marginTop: 4,
      fontFamily: fonts.PoppinsRegular,
      color: colors.black,
    },
    tab_select_label: {
      color: colors.graniteGray,
      fontFamily: fonts.PoppinsBold,
    },
  });
