import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMarkunreadMailbox } from './FilledMarkunreadMailbox';
import { OutlineMarkunreadMailbox } from './OutlineMarkunreadMailbox';
import { RoundMarkunreadMailbox } from './RoundMarkunreadMailbox';
import { SharpMarkunreadMailbox } from './SharpMarkunreadMailbox';
import { TwoToneMarkunreadMailbox } from './TwoToneMarkunreadMailbox';
export var MarkunreadMailbox =
/*#__PURE__*/
function MarkunreadMailbox(props) {
  return createThemedIcon(props, FilledMarkunreadMailbox, OutlineMarkunreadMailbox, RoundMarkunreadMailbox, SharpMarkunreadMailbox, TwoToneMarkunreadMailbox);
};