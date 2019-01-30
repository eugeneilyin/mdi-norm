import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCategory } from './FilledCategory';
import { OutlineCategory } from './OutlineCategory';
import { RoundCategory } from './RoundCategory';
import { SharpCategory } from './SharpCategory';
import { TwoToneCategory } from './TwoToneCategory';
export var Category =
/*#__PURE__*/
function Category(props) {
  return createThemedIcon(props, FilledCategory, OutlineCategory, RoundCategory, SharpCategory, TwoToneCategory);
};