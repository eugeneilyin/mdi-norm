import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFeaturedVideo } from './FilledFeaturedVideo'
import { OutlineFeaturedVideo } from './OutlineFeaturedVideo'
import { RoundFeaturedVideo } from './RoundFeaturedVideo'
import { SharpFeaturedVideo } from './SharpFeaturedVideo'
import { TwoToneFeaturedVideo } from './TwoToneFeaturedVideo'

export const FeaturedVideo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFeaturedVideo, OutlineFeaturedVideo, RoundFeaturedVideo, SharpFeaturedVideo, TwoToneFeaturedVideo)
