import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTrain } from './FilledTrain';
import { OutlineTrain } from './OutlineTrain';
import { RoundTrain } from './RoundTrain';
import { SharpTrain } from './SharpTrain';
import { TwoToneTrain } from './TwoToneTrain';
export var Train =
/*#__PURE__*/
function Train(props) {
  return createThemedIcon(props, FilledTrain, OutlineTrain, RoundTrain, SharpTrain, TwoToneTrain);
};