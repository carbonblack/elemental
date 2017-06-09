'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function Form(_ref) {
	var className = _ref.className;
	var component = _ref.component;
	var type = _ref.type;

	var props = _objectWithoutProperties(_ref, ['className', 'component', 'type']);

	var Component = component;
	props.className = (0, _classnames2['default'])('Form', 'Form--' + type, className);

	return _react2['default'].createElement(Component, props);
};

Form.propTypes = {
	component: _react.PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.func]),
	type: _react.PropTypes.oneOf(['basic', 'horizontal', 'inline'])
};
Form.defaultProps = {
	component: 'form',
	type: 'basic'
};

module.exports = Form;