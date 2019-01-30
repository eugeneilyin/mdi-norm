import { createThemedIcon } from './utils/createThemedIcon';
import { FilledExtension } from './FilledExtension';
import { OutlineExtension } from './OutlineExtension';
import { RoundExtension } from './RoundExtension';
import { SharpExtension } from './SharpExtension';
import { TwoToneExtension } from './TwoToneExtension';
export var Extension =
/*#__PURE__*/
function Extension(props) {
  return createThemedIcon(props, FilledExtension, OutlineExtension, RoundExtension, SharpExtension, TwoToneExtension);
};