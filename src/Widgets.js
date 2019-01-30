import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWidgets } from './FilledWidgets'
import { OutlineWidgets } from './OutlineWidgets'
import { RoundWidgets } from './RoundWidgets'
import { SharpWidgets } from './SharpWidgets'
import { TwoToneWidgets } from './TwoToneWidgets'

export const Widgets = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWidgets, OutlineWidgets, RoundWidgets, SharpWidgets, TwoToneWidgets)
