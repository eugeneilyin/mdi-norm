import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFindInPage } from './FilledFindInPage';
import { OutlineFindInPage } from './OutlineFindInPage';
import { RoundFindInPage } from './RoundFindInPage';
import { SharpFindInPage } from './SharpFindInPage';
import { TwoToneFindInPage } from './TwoToneFindInPage';
export var FindInPage =
/*#__PURE__*/
function FindInPage(props) {
  return createThemedIcon(props, FilledFindInPage, OutlineFindInPage, RoundFindInPage, SharpFindInPage, TwoToneFindInPage);
};