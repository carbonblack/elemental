'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function SegmentedControl(_ref) {
	var className = _ref.className;
	var equalWidthSegments = _ref.equalWidthSegments;
	var onChange = _ref.onChange;
	var options = _ref.options;
	var type = _ref.type;
	var value = _ref.value;

	var props = _objectWithoutProperties(_ref, ['className', 'equalWidthSegments', 'onChange', 'options', 'type', 'value']);

	props.className = (0, _classnames2['default'])('SegmentedControl', 'SegmentedControl--' + type, {
		'SegmentedControl--equal-widths': equalWidthSegments
	}, className);

	return _react2['default'].createElement(
		'div',
		props,
		options.map(function (op) {

			var buttonClassName = (0, _classnames2['default'])('SegmentedControl__button', {
				'is-selected': op.value === value
			});

			return _react2['default'].createElement(
				'span',
				{ key: 'option-' + op.value, className: 'SegmentedControl__item' },
				_react2['default'].createElement(
					'button',
					{ type: 'button', onClick: function () {
							return onChange(op.value);
						}, className: buttonClassName },
					op.label
				)
			);
		})
	);
};

SegmentedControl.propTypes = {
	className: _react.PropTypes.string,
	equalWidthSegments: _react.PropTypes.bool,
	onChange: _react.PropTypes.func.isRequired,
	options: _react.PropTypes.array.isRequired,
	type: _react.PropTypes.oneOf(['default', 'muted', 'danger', 'info', 'primary', 'success', 'warning']),
	value: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.string])
};
SegmentedControl.defaultProps = {
	type: 'default'
};

module.exports = SegmentedControl;