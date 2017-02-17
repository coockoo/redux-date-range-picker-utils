import model from './model';

export default dateRangePickerReducer;

function dateRangePickerReducer (at, customHandlers = {}) {
	return (state = model(), action) => {
		if (customHandlers[action.type]) {
			return customHandlers[action.type](state, action);
		}
		if (action.type === at.DATE_FILTER_TOGGLE_DROPDOWN) {
			return state.toggle();
		}
		if (action.type === at.DATE_FILTER_OPEN_DROPDOWN) {
			return state.open();
		}
		if (action.type === at.DATE_FILTER_CLOSE_DROPDOWN) {
			return state.close();
		}
		if (action.type === at.DATE_FILTER_SHIFT_CURRENT_MONTH) {
			return state.shiftCurrentMonth(action.shiftSize);
		}
		if (action.type === at.DATE_FILTER_SELECT_DATE) {
			return state.selectDate(action.date);
		}
		return state;
	};
}
