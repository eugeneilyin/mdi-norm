import { createThemedIcon } from './utils/createThemedIcon';
import { FilledToc } from './FilledToc';
import { OutlineToc } from './OutlineToc';
import { RoundToc } from './RoundToc';
import { SharpToc } from './SharpToc';
import { TwoToneToc } from './TwoToneToc';
export var Toc =
/*#__PURE__*/
function Toc(props) {
  return createThemedIcon(props, FilledToc, OutlineToc, RoundToc, SharpToc, TwoToneToc);
};