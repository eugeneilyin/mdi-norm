import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTransform } from './FilledTransform';
import { OutlineTransform } from './OutlineTransform';
import { RoundTransform } from './RoundTransform';
import { SharpTransform } from './SharpTransform';
import { TwoToneTransform } from './TwoToneTransform';
export var Transform =
/*#__PURE__*/
function Transform(props) {
  return createThemedIcon(props, FilledTransform, OutlineTransform, RoundTransform, SharpTransform, TwoToneTransform);
};