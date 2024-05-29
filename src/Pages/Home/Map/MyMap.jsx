import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  return (
    <div className="mx-auto my-7">
    <Map height={300} defaultCenter={[23.8103, 90.4125]} defaultZoom={11}>
      <Marker
        width={50}
        anchor={[23.8103, 90.4125]}
        color={color}
        onClick={() => setHue(hue + 20)}
      />
    </Map>
    </div>
  );
}

export default MyMap;
