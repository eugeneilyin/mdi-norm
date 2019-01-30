import { createThemedIcon } from './utils/createThemedIcon';
import { FilledControlPoint } from './FilledControlPoint';
import { OutlineControlPoint } from './OutlineControlPoint';
import { RoundControlPoint } from './RoundControlPoint';
import { SharpControlPoint } from './SharpControlPoint';
import { TwoToneControlPoint } from './TwoToneControlPoint';
export var ControlPoint =
/*#__PURE__*/
function ControlPoint(props) {
  return createThemedIcon(props, FilledControlPoint, OutlineControlPoint, RoundControlPoint, SharpControlPoint, TwoToneControlPoint);
};