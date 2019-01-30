import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFindReplace } from './FilledFindReplace';
import { OutlineFindReplace } from './OutlineFindReplace';
import { RoundFindReplace } from './RoundFindReplace';
import { SharpFindReplace } from './SharpFindReplace';
import { TwoToneFindReplace } from './TwoToneFindReplace';
export var FindReplace =
/*#__PURE__*/
function FindReplace(props) {
  return createThemedIcon(props, FilledFindReplace, OutlineFindReplace, RoundFindReplace, SharpFindReplace, TwoToneFindReplace);
};