import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShowChart } from './FilledShowChart';
import { OutlineShowChart } from './OutlineShowChart';
import { RoundShowChart } from './RoundShowChart';
import { SharpShowChart } from './SharpShowChart';
import { TwoToneShowChart } from './TwoToneShowChart';
export var ShowChart =
/*#__PURE__*/
function ShowChart(props) {
  return createThemedIcon(props, FilledShowChart, OutlineShowChart, RoundShowChart, SharpShowChart, TwoToneShowChart);
};