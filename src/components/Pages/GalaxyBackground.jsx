import React, { memo } from "react";
import Galaxy from "../Pages/Galaxy";

const GalaxyBackground = memo(() => (
  <div className="absolute inset-0 z-0">
    <Galaxy
      mouseInteraction={true}
      mouseRepulsion={true}
      density={1}
      glowIntensity={0.3}
      saturation={0}
      hueShift={220}
      twinkleIntensity={0.1}
      rotationSpeed={0.15}
      repulsionStrength={0.5}
      autoCenterRepulsion={0}
      starSpeed={0.1}
      speed={1}
    />
  </div>
));

export default GalaxyBackground;
