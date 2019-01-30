import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGrade } from './FilledGrade';
import { OutlineGrade } from './OutlineGrade';
import { RoundGrade } from './RoundGrade';
import { SharpGrade } from './SharpGrade';
import { TwoToneGrade } from './TwoToneGrade';
export var Grade =
/*#__PURE__*/
function Grade(props) {
  return createThemedIcon(props, FilledGrade, OutlineGrade, RoundGrade, SharpGrade, TwoToneGrade);
};