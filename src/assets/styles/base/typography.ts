import PoppinsBold from '../../fonts/Poppins/Poppins-Bold.ttf';
import PoppinsLight from '../../fonts/Poppins/Poppins-Light.ttf';
import PoppinsSemiBold from '../../fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsRegular from '../../fonts/Poppins/Poppins-Regular.ttf';
import PoppinsThin from '../../fonts/Poppins/Poppins-ExtraLight.ttf';
import PoppinsXBlack from '../../fonts/Poppins/Poppins-ExtraBold.ttf';
const typography = {
  '@font-face': [
    {
      fontFamily: 'Poppins Bold',
      src: `url("${PoppinsBold}")`,
    },
    {
      fontFamily: 'Poppins Light',
      src: `url("${PoppinsLight}")`,
    },
    {
      fontFamily: 'Poppins Medium',
      src: `url("${PoppinsSemiBold}")`,
    },
    {
      fontFamily: 'Poppins Regular',
      src: `url("${PoppinsRegular}")`,
    },
    {
      fontFamily: 'Poppins Thin',
      src: `url("${PoppinsThin}")`,
    },
    {
      fontFamily: 'Poppins XBlack',
      src: `url("${PoppinsXBlack}")`,
    },
  ],
};

export default typography;
