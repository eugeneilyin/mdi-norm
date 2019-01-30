import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSimCard } from './FilledSimCard';
import { OutlineSimCard } from './OutlineSimCard';
import { RoundSimCard } from './RoundSimCard';
import { SharpSimCard } from './SharpSimCard';
import { TwoToneSimCard } from './TwoToneSimCard';
export var SimCard =
/*#__PURE__*/
function SimCard(props) {
  return createThemedIcon(props, FilledSimCard, OutlineSimCard, RoundSimCard, SharpSimCard, TwoToneSimCard);
};