import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';
const styles = {
  page: {
    minHeight: rem(741),
    width: rem(1224),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [breakpoint(1200)]: {
      maxWidth: rem(326),
    },
  },

  title: {
    fontSize: rem(55),
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    [breakpoint(1200)]: {
      fontSize: rem(40),
    },
  },


  button: {
    width: rem(451),
    height: rem(54),
    border: 'none',
    borderRadius: rem(10),
    backgroundColor: colors.mainButtonTextColor,
    color: colors.buttonTextColor,
    fontSize: rem(16),
    marginTop: rem(85),
    [breakpoint(1200)]: {
      maxWidth: rem(272),
    },
  },
};

export const useHomeStyles = createUseStyles(styles);
