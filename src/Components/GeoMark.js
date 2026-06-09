import React from 'react';

const INK = '#2d2d31';
const FAINT = '#a6a49c';
const LINE2 = '#d2cfc4';

// A small kinetic geometry "system": nested rings, a hexagon and square counter-rotating,
// and dots orbiting — each at a different speed. Minimalist, gentle, a little hypnotic.
const GeoMark = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      {/* static outer ring */}
      <circle cx="60" cy="60" r="55" stroke={LINE2} strokeWidth="1" />

      {/* dashed ring, slow clockwise */}
      <g>
        <circle cx="60" cy="60" r="47" stroke={FAINT} strokeWidth="1" strokeDasharray="1.5 7" />
        <animateTransform attributeName="transform" type="rotate"
          from="0 60 60" to="360 60 60" dur="34s" repeatCount="indefinite" />
      </g>

      {/* hexagon, medium counter-clockwise */}
      <g>
        <polygon points="60,28 87.7,44 87.7,76 60,92 32.3,76 32.3,44"
          stroke={INK} strokeWidth="1.25" strokeLinejoin="round" />
        <animateTransform attributeName="transform" type="rotate"
          from="360 60 60" to="0 60 60" dur="26s" repeatCount="indefinite" />
      </g>

      {/* square, faster clockwise */}
      <g>
        <rect x="43" y="43" width="34" height="34" stroke={INK} strokeWidth="1.25" />
        <animateTransform attributeName="transform" type="rotate"
          from="0 60 60" to="360 60 60" dur="17s" repeatCount="indefinite" />
      </g>

      {/* orbiting dots, slow counter-clockwise */}
      <g fill={INK} stroke="none">
        <circle cx="60" cy="13" r="2.1" />
        <circle cx="99.8" cy="83" r="2.1" />
        <circle cx="20.2" cy="83" r="2.1" />
        <animateTransform attributeName="transform" type="rotate"
          from="360 60 60" to="0 60 60" dur="22s" repeatCount="indefinite" />
      </g>

      {/* core */}
      <circle cx="60" cy="60" r="3.4" fill={INK} />
    </svg>
  );
};

export default GeoMark;
