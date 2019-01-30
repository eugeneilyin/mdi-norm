import { createThemedIcon } from './utils/createThemedIcon';
import { FilledMap } from './FilledMap';
import { OutlineMap } from './OutlineMap';
import { RoundMap } from './RoundMap';
import { SharpMap } from './SharpMap';
import { TwoToneMap } from './TwoToneMap';
export var Map =
/*#__PURE__*/
function Map(props) {
  return createThemedIcon(props, FilledMap, OutlineMap, RoundMap, SharpMap, TwoToneMap);
};