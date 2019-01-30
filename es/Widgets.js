import { createThemedIcon } from './utils/createThemedIcon';
import { FilledWidgets } from './FilledWidgets';
import { OutlineWidgets } from './OutlineWidgets';
import { RoundWidgets } from './RoundWidgets';
import { SharpWidgets } from './SharpWidgets';
import { TwoToneWidgets } from './TwoToneWidgets';
export var Widgets =
/*#__PURE__*/
function Widgets(props) {
  return createThemedIcon(props, FilledWidgets, OutlineWidgets, RoundWidgets, SharpWidgets, TwoToneWidgets);
};