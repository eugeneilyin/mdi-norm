import { createThemedIcon } from './utils/createThemedIcon';
import { FilledAddToHomeScreen } from './FilledAddToHomeScreen';
import { OutlineAddToHomeScreen } from './OutlineAddToHomeScreen';
import { RoundAddToHomeScreen } from './RoundAddToHomeScreen';
import { SharpAddToHomeScreen } from './SharpAddToHomeScreen';
import { TwoToneAddToHomeScreen } from './TwoToneAddToHomeScreen';
export var AddToHomeScreen =
/*#__PURE__*/
function AddToHomeScreen(props) {
  return createThemedIcon(props, FilledAddToHomeScreen, OutlineAddToHomeScreen, RoundAddToHomeScreen, SharpAddToHomeScreen, TwoToneAddToHomeScreen);
};