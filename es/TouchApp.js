import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTouchApp } from './FilledTouchApp';
import { OutlineTouchApp } from './OutlineTouchApp';
import { RoundTouchApp } from './RoundTouchApp';
import { SharpTouchApp } from './SharpTouchApp';
import { TwoToneTouchApp } from './TwoToneTouchApp';
export var TouchApp =
/*#__PURE__*/
function TouchApp(props) {
  return createThemedIcon(props, FilledTouchApp, OutlineTouchApp, RoundTouchApp, SharpTouchApp, TwoToneTouchApp);
};