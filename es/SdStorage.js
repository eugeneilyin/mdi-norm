import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSdStorage } from './FilledSdStorage';
import { OutlineSdStorage } from './OutlineSdStorage';
import { RoundSdStorage } from './RoundSdStorage';
import { SharpSdStorage } from './SharpSdStorage';
import { TwoToneSdStorage } from './TwoToneSdStorage';
export var SdStorage =
/*#__PURE__*/
function SdStorage(props) {
  return createThemedIcon(props, FilledSdStorage, OutlineSdStorage, RoundSdStorage, SharpSdStorage, TwoToneSdStorage);
};