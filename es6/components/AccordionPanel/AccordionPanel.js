function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { normalizeColor } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Collapsible } from '../Collapsible';
import { Heading } from '../Heading';
import { AccordionContext } from '../Accordion/AccordionContext';
var AccordionPanel = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      header = _ref.header,
      label = _ref.label,
      onClick = _ref.onClick,
      _onMouseOut = _ref.onMouseOut,
      _onMouseOver = _ref.onMouseOver,
      _onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "header", "label", "onClick", "onMouseOut", "onMouseOver", "onFocus", "onBlur"]);

  var theme = useContext(ThemeContext) || defaultProps.theme;

  var _useContext = useContext(AccordionContext),
      active = _useContext.active,
      animate = _useContext.animate,
      onPanelChange = _useContext.onPanelChange;

  var _useState = useState(undefined),
      hover = _useState[0],
      setHover = _useState[1];

  var iconColor = useMemo(function () {
    return normalizeColor(theme.accordion.icons.color || 'control', theme);
  }, [theme]);
  var AccordionIcon = useMemo(function () {
    return active ? theme.accordion.icons.collapse : theme.accordion.icons.expand;
  }, [active, theme.accordion.icons]);
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref,
    flex: false,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Button, {
    role: "tab",
    "aria-selected": active,
    "aria-expanded": active,
    onClick: onPanelChange,
    onMouseOver: function onMouseOver(event) {
      setHover(theme.accordion.hover && theme.accordion.hover.color || undefined);
      if (_onMouseOver) _onMouseOver(event);
    },
    onMouseOut: function onMouseOut(event) {
      setHover(undefined);
      if (_onMouseOut) _onMouseOut(event);
    },
    onFocus: function onFocus(event) {
      setHover(theme.accordion.hover && theme.accordion.hover.color || undefined);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setHover(undefined);
      if (_onBlur) _onBlur(event);
    }
  }, header || /*#__PURE__*/React.createElement(Box, _extends({
    align: "center",
    direction: "row",
    justify: "between"
  }, rest), typeof label === 'string' ? /*#__PURE__*/React.createElement(Box, {
    pad: {
      horizontal: 'xsmall'
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    level: theme.accordion.heading && theme.accordion.heading.level || 4,
    margin: theme.accordion.heading && theme.accordion.heading.margin || undefined,
    color: hover
  }, label)) : label, AccordionIcon && /*#__PURE__*/React.createElement(Box, {
    pad: {
      horizontal: 'small'
    }
  }, /*#__PURE__*/React.createElement(AccordionIcon, {
    color: iconColor
  })))), /*#__PURE__*/React.createElement(Box, {
    border: theme.accordion.border
  }, animate ? /*#__PURE__*/React.createElement(Collapsible, {
    open: active
  }, children) : active && children));
});
AccordionPanel.displayName = 'AccordionPanel';
var AccordionPanelDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  AccordionPanelDoc = require('./doc').doc(AccordionPanel);
}

var AccordionPanelWrapper = AccordionPanelDoc || AccordionPanel;
export { AccordionPanelWrapper as AccordionPanel };