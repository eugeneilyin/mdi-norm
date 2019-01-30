import { createThemedIcon } from './utils/createThemedIcon';
import { FilledBeachAccess } from './FilledBeachAccess';
import { OutlineBeachAccess } from './OutlineBeachAccess';
import { RoundBeachAccess } from './RoundBeachAccess';
import { SharpBeachAccess } from './SharpBeachAccess';
import { TwoToneBeachAccess } from './TwoToneBeachAccess';
export var BeachAccess =
/*#__PURE__*/
function BeachAccess(props) {
  return createThemedIcon(props, FilledBeachAccess, OutlineBeachAccess, RoundBeachAccess, SharpBeachAccess, TwoToneBeachAccess);
};