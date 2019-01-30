import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTranslate } from './FilledTranslate';
import { OutlineTranslate } from './OutlineTranslate';
import { RoundTranslate } from './RoundTranslate';
import { SharpTranslate } from './SharpTranslate';
import { TwoToneTranslate } from './TwoToneTranslate';
export var Translate =
/*#__PURE__*/
function Translate(props) {
  return createThemedIcon(props, FilledTranslate, OutlineTranslate, RoundTranslate, SharpTranslate, TwoToneTranslate);
};