import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  fontSize: '11px',
  pointerEvents: 'none',
  userSelect: 'none',
};

const SvgText = ({
  textAnchor = 'start',
  alignmentBaseline = 'middle',
  dominantBaseline = 'middle', // firefox
  x = '0',
  y = '0',
  style = defaultStyle,
  fill = 'black',
  children,
}) => (
  <text
    textAnchor={textAnchor}
    alignmentBaseline={alignmentBaseline}
    dominantBaseline={dominantBaseline}
    x={x}
    y={y}
    style={style}
    fill={fill}
  >
    {children}
  </text>
);

SvgText.propTypes = {
  textAnchor: PropTypes.string,
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  textValue: PropTypes.string,
  fill: PropTypes.object,
};

export default SvgText;
