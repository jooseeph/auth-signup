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
    },
  },
  wrapper: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: rem(55),
    fontWeight: 400,
  },
  welcome: {
    fontSize: rem(20),
    fontWeight: 500,
  },

  subtitle: {
    fontSize: rem(16),
  },
  email: {
    fontSize: rem(55),
  },
  button: {
    width: '100%',
    backgroundColor: colors.btnBgColor,
    fontSize: rem(16),
  },
  or: {
    marginTop: 33,
    marginBottom: 33,
    color: '#ABABAB',
    fontFamily: 'Poppins',
    fontSize: rem(16),
    fontWeight: 400,
    lineHeight: 'normal',
  },
};

export const useLoginStyles = createUseStyles(styles);
