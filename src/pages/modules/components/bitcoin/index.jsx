import React from 'react';
import Spline from '@splinetool/react-spline';

export const Bitcoin = () => {
    return (
        <Spline 
          scene="https://prod.spline.design/pb3tqkTKTxaEVzXU/scene.splinecode" 
          width={400}
          height={400}
          position={{ x: 0.5, y: 0.5 }}
        />
      );
}