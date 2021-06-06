import "./ChartBar.css";

const ChartBar = ({ label, value, max }) => {
  let heightPercentage = 0;
  if (max > 0) {
    heightPercentage = Math.round((value / max) * 100);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: heightPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
