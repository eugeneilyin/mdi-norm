import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPartyMode } from './FilledPartyMode';
import { OutlinePartyMode } from './OutlinePartyMode';
import { RoundPartyMode } from './RoundPartyMode';
import { SharpPartyMode } from './SharpPartyMode';
import { TwoTonePartyMode } from './TwoTonePartyMode';
export var PartyMode =
/*#__PURE__*/
function PartyMode(props) {
  return createThemedIcon(props, FilledPartyMode, OutlinePartyMode, RoundPartyMode, SharpPartyMode, TwoTonePartyMode);
};