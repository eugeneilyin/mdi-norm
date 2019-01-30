import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTextsms } from './FilledTextsms';
import { OutlineTextsms } from './OutlineTextsms';
import { RoundTextsms } from './RoundTextsms';
import { SharpTextsms } from './SharpTextsms';
import { TwoToneTextsms } from './TwoToneTextsms';
export var Textsms =
/*#__PURE__*/
function Textsms(props) {
  return createThemedIcon(props, FilledTextsms, OutlineTextsms, RoundTextsms, SharpTextsms, TwoToneTextsms);
};