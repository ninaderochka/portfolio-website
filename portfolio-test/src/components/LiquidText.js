import React from 'react';
import { Blotter, LiquidDistort } from 'react-blotter';
import { LiquidDistortMaterial } from 'blotter';

const LiquidText = () => {
  return (
    <Blotter
      className="liquid-text"
      width={600}
      height={200}
    >
      <LiquidDistort
        text="Hello, React!"
        material={LiquidDistortMaterial}
        uniforms={{
          uSpeed: 0.2,
          uVolatility: 0.05,
        }}
      />
    </Blotter>
  );
};

export default LiquidText;
