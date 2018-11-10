import { createThemedIcon } from './utils/createThemedIcon';
import { IconGradeFilled } from './IconGradeFilled';
import { IconGradeOutlined } from './IconGradeOutlined';
import { IconGradeRounded } from './IconGradeRounded';
import { IconGradeSharp } from './IconGradeSharp';
import { IconGradeTwoTone } from './IconGradeTwoTone';
export var IconGrade =
/*#__PURE__*/
function IconGrade(props) {
  return createThemedIcon(props, IconGradeFilled, IconGradeOutlined, IconGradeRounded, IconGradeSharp, IconGradeTwoTone);
};