import { createThemedIcon } from './utils/createThemedIcon';
import { FilledHome } from './FilledHome';
import { OutlineHome } from './OutlineHome';
import { RoundHome } from './RoundHome';
import { SharpHome } from './SharpHome';
import { TwoToneHome } from './TwoToneHome';
export var Home =
/*#__PURE__*/
function Home(props) {
  return createThemedIcon(props, FilledHome, OutlineHome, RoundHome, SharpHome, TwoToneHome);
};