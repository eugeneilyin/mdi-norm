import { createThemedIcon } from './utils/createThemedIcon';
import { FilledLocalConvenienceStore } from './FilledLocalConvenienceStore';
import { OutlineLocalConvenienceStore } from './OutlineLocalConvenienceStore';
import { RoundLocalConvenienceStore } from './RoundLocalConvenienceStore';
import { SharpLocalConvenienceStore } from './SharpLocalConvenienceStore';
import { TwoToneLocalConvenienceStore } from './TwoToneLocalConvenienceStore';
export var LocalConvenienceStore =
/*#__PURE__*/
function LocalConvenienceStore(props) {
  return createThemedIcon(props, FilledLocalConvenienceStore, OutlineLocalConvenienceStore, RoundLocalConvenienceStore, SharpLocalConvenienceStore, TwoToneLocalConvenienceStore);
};