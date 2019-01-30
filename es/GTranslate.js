import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGTranslate } from './FilledGTranslate';
import { OutlineGTranslate } from './OutlineGTranslate';
import { RoundGTranslate } from './RoundGTranslate';
import { SharpGTranslate } from './SharpGTranslate';
import { TwoToneGTranslate } from './TwoToneGTranslate';
export var GTranslate =
/*#__PURE__*/
function GTranslate(props) {
  return createThemedIcon(props, FilledGTranslate, OutlineGTranslate, RoundGTranslate, SharpGTranslate, TwoToneGTranslate);
};