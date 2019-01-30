import { createThemedIcon } from './utils/createThemedIcon';
import { FilledControlPointDuplicate } from './FilledControlPointDuplicate';
import { OutlineControlPointDuplicate } from './OutlineControlPointDuplicate';
import { RoundControlPointDuplicate } from './RoundControlPointDuplicate';
import { SharpControlPointDuplicate } from './SharpControlPointDuplicate';
import { TwoToneControlPointDuplicate } from './TwoToneControlPointDuplicate';
export var ControlPointDuplicate =
/*#__PURE__*/
function ControlPointDuplicate(props) {
  return createThemedIcon(props, FilledControlPointDuplicate, OutlineControlPointDuplicate, RoundControlPointDuplicate, SharpControlPointDuplicate, TwoToneControlPointDuplicate);
};