import { createThemedIcon } from './utils/createThemedIcon';
import { FilledFeaturedVideo } from './FilledFeaturedVideo';
import { OutlineFeaturedVideo } from './OutlineFeaturedVideo';
import { RoundFeaturedVideo } from './RoundFeaturedVideo';
import { SharpFeaturedVideo } from './SharpFeaturedVideo';
import { TwoToneFeaturedVideo } from './TwoToneFeaturedVideo';
export var FeaturedVideo =
/*#__PURE__*/
function FeaturedVideo(props) {
  return createThemedIcon(props, FilledFeaturedVideo, OutlineFeaturedVideo, RoundFeaturedVideo, SharpFeaturedVideo, TwoToneFeaturedVideo);
};