import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAcUnit } from './FilledAcUnit';
import { OutlineAcUnit } from './OutlineAcUnit';
import { RoundAcUnit } from './RoundAcUnit';
import { SharpAcUnit } from './SharpAcUnit';
import { TwoToneAcUnit } from './TwoToneAcUnit';
export var AcUnit =
/*#__PURE__*/
function AcUnit(props) {
  return createThemedIcon(props, FilledAcUnit, OutlineAcUnit, RoundAcUnit, SharpAcUnit, TwoToneAcUnit);
};