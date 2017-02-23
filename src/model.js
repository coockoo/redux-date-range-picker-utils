import moment from 'moment';

export default model;

function model (preloadedState) {
	let state = Object.assign({
		from: null,
		to: null,
		selectedFrom: null,
		selectedTo: null,
		isDropdownOpen: false,
		currentMonth: moment().subtract(1, 'days').month(),
		currentYear: moment().subtract(1, 'days').year()
	}, preloadedState);

	const methods = {
		get, set,
		toggle, open, close,
		shiftCurrentMonth,
		selectDate
	};

	return methods;

	function get (field) {
		return state[field];
	}
	function set (update) {
		state = Object.assign({}, state, update);
		return Object.assign({}, methods);
	}
	function toggle () {
		return set({ isDropdownOpen: !state.isDropdownOpen });
	}
	function open () {
		return set({ isDropdownOpen: true });
	}
	function close () {
		return set({ isDropdownOpen: false });
	}
	function shiftCurrentMonth (shiftSize) {
		const newMonth = state.currentMonth + (shiftSize || 0);
		const newYear = newMonth >= 12 ? state.currentYear + 1 : newMonth < 0 ? state.currentYear - 1 : state.currentYear;
		return set({ currentMonth: (newMonth + 12) % 12, currentYear: newYear });
	}
	function selectDate (date) {
		if (
			(!state.selectedFrom && !state.selectedTo) ||
			(state.selectedFrom && state.selectedTo)
		) {
			return set({ selectedFrom: moment(date).format('YYYY-MM-DD'), selectedTo: null });
		}
		let newTo = moment(date).format('YYYY-MM-DD');
		let newFrom = state.selectedFrom;
		if (moment(newFrom).isAfter(moment(newTo))) {
			const temp = newFrom;
			newFrom = newTo;
			newTo = temp;
		}
		return set({
			selectedFrom: newFrom,
			selectedTo: newTo,
			from: newFrom,
			to: newTo,
			isDropdownOpen: false
		});
	}
}
