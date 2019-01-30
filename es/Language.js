import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLanguage } from './FilledLanguage';
import { OutlineLanguage } from './OutlineLanguage';
import { RoundLanguage } from './RoundLanguage';
import { SharpLanguage } from './SharpLanguage';
import { TwoToneLanguage } from './TwoToneLanguage';
export var Language =
/*#__PURE__*/
function Language(props) {
  return createThemedIcon(props, FilledLanguage, OutlineLanguage, RoundLanguage, SharpLanguage, TwoToneLanguage);
};