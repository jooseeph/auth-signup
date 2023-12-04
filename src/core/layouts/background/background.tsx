
import React from 'react';
import { useBackgroundStyles } from './background.style';

import LeftColumn from './leftcolumn/leftcolumn';
import RightColumns from './rightcolumn/rightcolumn';

const BackgroundComponent = ({ children }: any) => {
  const { body, container, centeredDiv } = useBackgroundStyles();
  return (
    <div className={body}>

      <div className={container}>
        <LeftColumn
          logoVisible={true}
          vectorVisible={true} />

        <RightColumns
          vectorVisible={true} />
      </div>

      <div className={centeredDiv}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundComponent;