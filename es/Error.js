import { createThemedIcon } from './utils/createThemedIcon';
import { FilledError } from './FilledError';
import { OutlineError } from './OutlineError';
import { RoundError } from './RoundError';
import { SharpError } from './SharpError';
import { TwoToneError } from './TwoToneError';
export var Error =
/*#__PURE__*/
function Error(props) {
  return createThemedIcon(props, FilledError, OutlineError, RoundError, SharpError, TwoToneError);
};