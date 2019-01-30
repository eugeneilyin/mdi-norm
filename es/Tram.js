import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTram } from './FilledTram';
import { OutlineTram } from './OutlineTram';
import { RoundTram } from './RoundTram';
import { SharpTram } from './SharpTram';
import { TwoToneTram } from './TwoToneTram';
export var Tram =
/*#__PURE__*/
function Tram(props) {
  return createThemedIcon(props, FilledTram, OutlineTram, RoundTram, SharpTram, TwoToneTram);
};