export const refreshFrequency = 300000;

export const render = ({ output }) => {
    let icon = output.icon
    let summary = output.summary
    let temp = output.temperature
    return (
    <div>
      <div>
      <span>
        {(() => {
          switch (icon) {
              case "clear-day":           return '􀆭';
              case "clear-night":         return '􀇀';
              case "cloudy":              return '􀇂';
              case "fog":                 return '􀇊';
              case "partly-cloudy-day":   return '􀇔';
              case "partly-cloudy-night": return '􀇚';
              case "rain":                return '􀇆';
              case "sleet":               return '􀇐';
              case "snow":                return '􀇎';
              case "wind":                return '􀇤';
              default:                    return "􀇬";
          }
        })()} {temp}ºC</span>
      </div>
    </div>
  );
};

export default render;
