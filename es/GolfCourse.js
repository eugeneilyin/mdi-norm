import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGolfCourse } from './FilledGolfCourse';
import { OutlineGolfCourse } from './OutlineGolfCourse';
import { RoundGolfCourse } from './RoundGolfCourse';
import { SharpGolfCourse } from './SharpGolfCourse';
import { TwoToneGolfCourse } from './TwoToneGolfCourse';
export var GolfCourse =
/*#__PURE__*/
function GolfCourse(props) {
  return createThemedIcon(props, FilledGolfCourse, OutlineGolfCourse, RoundGolfCourse, SharpGolfCourse, TwoToneGolfCourse);
};