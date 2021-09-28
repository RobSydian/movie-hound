const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage }) => {
  const r = 25;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={160}
      cy={40}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
      strokeWidth={'1rem'}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="53%"
      y="53%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={'1em'}
    >
      {percentage.toFixed(0)}
    </text>
  );
};

export default ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={75} height={75}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} percentage={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};
