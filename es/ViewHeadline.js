import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewHeadline } from './FilledViewHeadline';
import { OutlineViewHeadline } from './OutlineViewHeadline';
import { RoundViewHeadline } from './RoundViewHeadline';
import { SharpViewHeadline } from './SharpViewHeadline';
import { TwoToneViewHeadline } from './TwoToneViewHeadline';
export var ViewHeadline =
/*#__PURE__*/
function ViewHeadline(props) {
  return createThemedIcon(props, FilledViewHeadline, OutlineViewHeadline, RoundViewHeadline, SharpViewHeadline, TwoToneViewHeadline);
};