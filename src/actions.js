export default dateRangePickerActions;

function dateRangePickerActions (at, { prefix } = {}) {
	return {
		[prefix ? `${prefix}ToggleDropdown` : 'toggleDropdown']: toggleDropdown,
		[prefix ? `${prefix}OpenDropdown` : 'openDropdown']: openDropdown,
		[prefix ? `${prefix}CloseDropdown` : 'closeDropdown']: closeDropdown,
		[prefix ? `${prefix}ShiftCurrentMonth` : 'shiftCurrentMonth']: shiftCurrentMonth,
		[prefix ? `${prefix}SelectDate` : 'selectDate']: selectDate
	};

	function toggleDropdown () {
		return { type: at.DATE_FILTER_TOGGLE_DROPDOWN };
	}
	function openDropdown () {
		return { type: at.DATE_FILTER_OPEN_DROPDOWN };
	}
	function closeDropdown () {
		return { type: at.DATE_FILTER_CLOSE_DROPDOWN };
	}
	function shiftCurrentMonth (shiftSize) {
		return { type: at.DATE_FILTER_SHIFT_CURRENT_MONTH, shiftSize };
	}
	function selectDate (date) {
		return { type: at.DATE_FILTER_SELECT_DATE, date };
	}
}
