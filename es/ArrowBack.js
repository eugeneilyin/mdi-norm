import { createThemedIcon } from './utils/createThemedIcon';
import { FilledArrowBack } from './FilledArrowBack';
import { OutlineArrowBack } from './OutlineArrowBack';
import { RoundArrowBack } from './RoundArrowBack';
import { SharpArrowBack } from './SharpArrowBack';
import { TwoToneArrowBack } from './TwoToneArrowBack';
export var ArrowBack =
/*#__PURE__*/
function ArrowBack(props) {
  return createThemedIcon(props, FilledArrowBack, OutlineArrowBack, RoundArrowBack, SharpArrowBack, TwoToneArrowBack);
};