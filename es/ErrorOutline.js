import { createThemedIcon } from './utils/createThemedIcon';
import { FilledErrorOutline } from './FilledErrorOutline';
import { OutlineErrorOutline } from './OutlineErrorOutline';
import { RoundErrorOutline } from './RoundErrorOutline';
import { SharpErrorOutline } from './SharpErrorOutline';
import { TwoToneErrorOutline } from './TwoToneErrorOutline';
export var ErrorOutline =
/*#__PURE__*/
function ErrorOutline(props) {
  return createThemedIcon(props, FilledErrorOutline, OutlineErrorOutline, RoundErrorOutline, SharpErrorOutline, TwoToneErrorOutline);
};