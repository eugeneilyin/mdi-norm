import { createThemedIcon } from './utils/createThemedIcon';
import { FilledSettings } from './FilledSettings';
import { OutlineSettings } from './OutlineSettings';
import { RoundSettings } from './RoundSettings';
import { SharpSettings } from './SharpSettings';
import { TwoToneSettings } from './TwoToneSettings';
export var Settings =
/*#__PURE__*/
function Settings(props) {
  return createThemedIcon(props, FilledSettings, OutlineSettings, RoundSettings, SharpSettings, TwoToneSettings);
};