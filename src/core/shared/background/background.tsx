// BackgroundComponent.tsx

import React from 'react';
import { useBackgroundStyles } from './background.style';

const BackgroundComponent = ({ children }: any) => {
  const { container, rightBg, leftBg } = useBackgroundStyles();
  return (
    <div className={container}>
      <div className={leftBg}>
        <img src='/src/assets/images/Saly-Lefr.svg' alt='' />
      </div>
      <div className={rightBg}>
        <img src='/src/assets/images/Saly-Right.svg' alt='' />
        {children}

      </div>
    </div>
  );
};

export default BackgroundComponent;
