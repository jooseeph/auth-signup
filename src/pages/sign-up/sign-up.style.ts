import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
const styles = {
  page: {
    minHeight: rem(741),
    width: rem(539),
    padding: rem(44),
  },
  wrapper: {
    display: 'flex',
  },
  title: {
    fontSize: rem(55),
    lineHeight: 'normal',
    marginBottom: rem(45),
  },
  subtitle: {
    fontSize: rem(20),
    fontWeight: 500,
  },
  left: {
    flex: 1,
    textAlign: 'left',
  },
  right: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Poppins Medium',
    fontSize: rem(13),
    lineHeight: 'normal',
    color: '#8D8D8D',
  },

  button: {
    width: '100%',
    marginTop: rem(45),
    backgroundColor: colors.btnBgColor,
    fontSize: rem(16),
  },
};

export const useSignupStyles = createUseStyles(styles);
