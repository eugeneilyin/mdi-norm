import { createThemedIcon } from './utils/createThemedIcon';
import { FilledDataUsage } from './FilledDataUsage';
import { OutlineDataUsage } from './OutlineDataUsage';
import { RoundDataUsage } from './RoundDataUsage';
import { SharpDataUsage } from './SharpDataUsage';
import { TwoToneDataUsage } from './TwoToneDataUsage';
export var DataUsage =
/*#__PURE__*/
function DataUsage(props) {
  return createThemedIcon(props, FilledDataUsage, OutlineDataUsage, RoundDataUsage, SharpDataUsage, TwoToneDataUsage);
};