import { createThemedIcon } from './utils/createThemedIcon';
import { FilledShop } from './FilledShop';
import { OutlineShop } from './OutlineShop';
import { RoundShop } from './RoundShop';
import { SharpShop } from './SharpShop';
import { TwoToneShop } from './TwoToneShop';
export var Shop =
/*#__PURE__*/
function Shop(props) {
  return createThemedIcon(props, FilledShop, OutlineShop, RoundShop, SharpShop, TwoToneShop);
};