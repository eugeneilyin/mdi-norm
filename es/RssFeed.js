import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRssFeed } from './FilledRssFeed';
import { OutlineRssFeed } from './OutlineRssFeed';
import { RoundRssFeed } from './RoundRssFeed';
import { SharpRssFeed } from './SharpRssFeed';
import { TwoToneRssFeed } from './TwoToneRssFeed';
export var RssFeed =
/*#__PURE__*/
function RssFeed(props) {
  return createThemedIcon(props, FilledRssFeed, OutlineRssFeed, RoundRssFeed, SharpRssFeed, TwoToneRssFeed);
};