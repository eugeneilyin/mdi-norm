import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLastPage } from './FilledLastPage';
import { OutlineLastPage } from './OutlineLastPage';
import { RoundLastPage } from './RoundLastPage';
import { SharpLastPage } from './SharpLastPage';
import { TwoToneLastPage } from './TwoToneLastPage';
export var LastPage =
/*#__PURE__*/
function LastPage(props) {
  return createThemedIcon(props, FilledLastPage, OutlineLastPage, RoundLastPage, SharpLastPage, TwoToneLastPage);
};