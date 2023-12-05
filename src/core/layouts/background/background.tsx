import { useBackgroundStyles } from './background.style';
import LeftColumn from './leftcolumn/leftcolumn';
import RightColumns from './rightcolumn/rightcolumn';

const BackgroundComponent = ({
  children,
  isLogoVis,
  isLeftVecVis,
  isRightVecVis,

}: any) => {
  const { body, container, centeredDiv } = useBackgroundStyles();
  return (
    <div className={body}>
      <div className={container}>
        <LeftColumn logoVisible={isLogoVis} vectorVisible={isLeftVecVis} />

        <RightColumns vectorVisible={isRightVecVis} />
      </div>

      <div className={centeredDiv}>{children}</div>
    </div>
  );
};

export default BackgroundComponent;
