import { createThemedIcon } from './utils/createThemedIcon';
import { FilledRateReview } from './FilledRateReview';
import { OutlineRateReview } from './OutlineRateReview';
import { RoundRateReview } from './RoundRateReview';
import { SharpRateReview } from './SharpRateReview';
import { TwoToneRateReview } from './TwoToneRateReview';
export var RateReview =
/*#__PURE__*/
function RateReview(props) {
  return createThemedIcon(props, FilledRateReview, OutlineRateReview, RoundRateReview, SharpRateReview, TwoToneRateReview);
};