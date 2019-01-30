import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSdCard } from './FilledSdCard';
import { OutlineSdCard } from './OutlineSdCard';
import { RoundSdCard } from './RoundSdCard';
import { SharpSdCard } from './SharpSdCard';
import { TwoToneSdCard } from './TwoToneSdCard';
export var SdCard =
/*#__PURE__*/
function SdCard(props) {
  return createThemedIcon(props, FilledSdCard, OutlineSdCard, RoundSdCard, SharpSdCard, TwoToneSdCard);
};