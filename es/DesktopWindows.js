import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDesktopWindows } from './FilledDesktopWindows';
import { OutlineDesktopWindows } from './OutlineDesktopWindows';
import { RoundDesktopWindows } from './RoundDesktopWindows';
import { SharpDesktopWindows } from './SharpDesktopWindows';
import { TwoToneDesktopWindows } from './TwoToneDesktopWindows';
export var DesktopWindows =
/*#__PURE__*/
function DesktopWindows(props) {
  return createThemedIcon(props, FilledDesktopWindows, OutlineDesktopWindows, RoundDesktopWindows, SharpDesktopWindows, TwoToneDesktopWindows);
};