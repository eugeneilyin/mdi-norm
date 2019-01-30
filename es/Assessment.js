import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAssessment } from './FilledAssessment';
import { OutlineAssessment } from './OutlineAssessment';
import { RoundAssessment } from './RoundAssessment';
import { SharpAssessment } from './SharpAssessment';
import { TwoToneAssessment } from './TwoToneAssessment';
export var Assessment =
/*#__PURE__*/
function Assessment(props) {
  return createThemedIcon(props, FilledAssessment, OutlineAssessment, RoundAssessment, SharpAssessment, TwoToneAssessment);
};