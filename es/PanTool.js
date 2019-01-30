import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPanTool } from './FilledPanTool';
import { OutlinePanTool } from './OutlinePanTool';
import { RoundPanTool } from './RoundPanTool';
import { SharpPanTool } from './SharpPanTool';
import { TwoTonePanTool } from './TwoTonePanTool';
export var PanTool =
/*#__PURE__*/
function PanTool(props) {
  return createThemedIcon(props, FilledPanTool, OutlinePanTool, RoundPanTool, SharpPanTool, TwoTonePanTool);
};