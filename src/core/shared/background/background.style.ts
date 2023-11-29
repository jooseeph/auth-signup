import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  leftBg: {
    flex: '1',
    color: colors.main,
  },
  rightBg: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.mainBg,
  },
};
export const useBackgroundStyles = createUseStyles(styles);
