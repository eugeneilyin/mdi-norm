import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSpellcheck } from './FilledSpellcheck';
import { OutlineSpellcheck } from './OutlineSpellcheck';
import { RoundSpellcheck } from './RoundSpellcheck';
import { SharpSpellcheck } from './SharpSpellcheck';
import { TwoToneSpellcheck } from './TwoToneSpellcheck';
export var Spellcheck =
/*#__PURE__*/
function Spellcheck(props) {
  return createThemedIcon(props, FilledSpellcheck, OutlineSpellcheck, RoundSpellcheck, SharpSpellcheck, TwoToneSpellcheck);
};