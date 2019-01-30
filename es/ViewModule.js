import { createThemedIcon } from './utils/createThemedIcon';
import { FilledViewModule } from './FilledViewModule';
import { OutlineViewModule } from './OutlineViewModule';
import { RoundViewModule } from './RoundViewModule';
import { SharpViewModule } from './SharpViewModule';
import { TwoToneViewModule } from './TwoToneViewModule';
export var ViewModule =
/*#__PURE__*/
function ViewModule(props) {
  return createThemedIcon(props, FilledViewModule, OutlineViewModule, RoundViewModule, SharpViewModule, TwoToneViewModule);
};