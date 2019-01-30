import { createThemedIcon } from './utils/createThemedIcon';
import { FilledScatterPlot } from './FilledScatterPlot';
import { OutlineScatterPlot } from './OutlineScatterPlot';
import { RoundScatterPlot } from './RoundScatterPlot';
import { SharpScatterPlot } from './SharpScatterPlot';
import { TwoToneScatterPlot } from './TwoToneScatterPlot';
export var ScatterPlot =
/*#__PURE__*/
function ScatterPlot(props) {
  return createThemedIcon(props, FilledScatterPlot, OutlineScatterPlot, RoundScatterPlot, SharpScatterPlot, TwoToneScatterPlot);
};