import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFirstPage } from './FilledFirstPage';
import { OutlineFirstPage } from './OutlineFirstPage';
import { RoundFirstPage } from './RoundFirstPage';
import { SharpFirstPage } from './SharpFirstPage';
import { TwoToneFirstPage } from './TwoToneFirstPage';
export var FirstPage =
/*#__PURE__*/
function FirstPage(props) {
  return createThemedIcon(props, FilledFirstPage, OutlineFirstPage, RoundFirstPage, SharpFirstPage, TwoToneFirstPage);
};