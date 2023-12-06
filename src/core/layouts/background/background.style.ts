import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';

const styles = {
  body: {
    margin: 0,
    position: 'relative',
    height: '100vh',
  },
  container: {
    display: 'flex',
    height: '100%',
  },
  leftColumn: {
    backgroundColor: colors.main,
    width: '50%',
    border: '1px solid #ccc',
    [breakpoint(1200)]: {
      width: '100%',
    },
  },
  rightColumn: {
    backgroundColor: colors.mainBg,
    width: '50%',
    border: '1px solid #ccc',
    [breakpoint(1200)]: {
      width: '0%',
    },
  },
  centeredDiv: {
    position: 'absolute',
  
    borderRadius: '40px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: '1',
   
  },
};
export const useBackgroundStyles = createUseStyles(styles);
