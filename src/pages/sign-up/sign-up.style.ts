import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';
const styles = {
  page: {
    minHeight: rem(741),
    width: rem(539),
    padding: rem(44),
    [breakpoint(1200)]: {
      maxWidth: rem(326),
      textSize: rem(13),
    },
  },
  wrapper: {
    display: 'flex',
  },
  title: {
    fontSize: rem(55),
    lineHeight: 'normal',
    marginBottom: rem(45),
    [breakpoint(1200)]: {
      fontSize: rem(40),
    },
  },
  subtitle: {
    fontSize: rem(20),
    fontWeight: 500,
    [breakpoint(1200)]: {
      fontSize: rem(16),
    },
  },
  left: {
    flex: 1,
    textAlign: 'left',
  },
  right: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Poppins Medium',
    fontSize: rem(12),
    lineHeight: 'normal',
    color: '#8D8D8D',
  },

  button: {
    width: '100%',
    marginTop: rem(55),
    backgroundColor: colors.btnBgColor,
    fontSize: rem(16),
  },
};

export const useSignupStyles = createUseStyles(styles);
