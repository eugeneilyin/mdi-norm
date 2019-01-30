import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatSize } from './FilledFormatSize';
import { OutlineFormatSize } from './OutlineFormatSize';
import { RoundFormatSize } from './RoundFormatSize';
import { SharpFormatSize } from './SharpFormatSize';
import { TwoToneFormatSize } from './TwoToneFormatSize';
export var FormatSize =
/*#__PURE__*/
function FormatSize(props) {
  return createThemedIcon(props, FilledFormatSize, OutlineFormatSize, RoundFormatSize, SharpFormatSize, TwoToneFormatSize);
};