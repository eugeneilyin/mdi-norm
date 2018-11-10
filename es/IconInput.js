import { createThemedIcon } from './utils/createThemedIcon';
import { IconInputFilled } from './IconInputFilled';
import { IconInputOutlined } from './IconInputOutlined';
import { IconInputRounded } from './IconInputRounded';
import { IconInputSharp } from './IconInputSharp';
import { IconInputTwoTone } from './IconInputTwoTone';
export var IconInput =
/*#__PURE__*/
function IconInput(props) {
  return createThemedIcon(props, IconInputFilled, IconInputOutlined, IconInputRounded, IconInputSharp, IconInputTwoTone);
};