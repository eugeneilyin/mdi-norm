import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPageview } from './FilledPageview';
import { OutlinePageview } from './OutlinePageview';
import { RoundPageview } from './RoundPageview';
import { SharpPageview } from './SharpPageview';
import { TwoTonePageview } from './TwoTonePageview';
export var Pageview =
/*#__PURE__*/
function Pageview(props) {
  return createThemedIcon(props, FilledPageview, OutlinePageview, RoundPageview, SharpPageview, TwoTonePageview);
};