import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFormatShapes } from './FilledFormatShapes';
import { OutlineFormatShapes } from './OutlineFormatShapes';
import { RoundFormatShapes } from './RoundFormatShapes';
import { SharpFormatShapes } from './SharpFormatShapes';
import { TwoToneFormatShapes } from './TwoToneFormatShapes';
export var FormatShapes =
/*#__PURE__*/
function FormatShapes(props) {
  return createThemedIcon(props, FilledFormatShapes, OutlineFormatShapes, RoundFormatShapes, SharpFormatShapes, TwoToneFormatShapes);
};