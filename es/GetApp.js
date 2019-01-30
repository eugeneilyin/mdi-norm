import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGetApp } from './FilledGetApp';
import { OutlineGetApp } from './OutlineGetApp';
import { RoundGetApp } from './RoundGetApp';
import { SharpGetApp } from './SharpGetApp';
import { TwoToneGetApp } from './TwoToneGetApp';
export var GetApp =
/*#__PURE__*/
function GetApp(props) {
  return createThemedIcon(props, FilledGetApp, OutlineGetApp, RoundGetApp, SharpGetApp, TwoToneGetApp);
};