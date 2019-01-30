import { createThemedIcon } from './utils/createThemedIcon';
import { FilledEuroSymbol } from './FilledEuroSymbol';
import { OutlineEuroSymbol } from './OutlineEuroSymbol';
import { RoundEuroSymbol } from './RoundEuroSymbol';
import { SharpEuroSymbol } from './SharpEuroSymbol';
import { TwoToneEuroSymbol } from './TwoToneEuroSymbol';
export var EuroSymbol =
/*#__PURE__*/
function EuroSymbol(props) {
  return createThemedIcon(props, FilledEuroSymbol, OutlineEuroSymbol, RoundEuroSymbol, SharpEuroSymbol, TwoToneEuroSymbol);
};