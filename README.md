# redux-date-range-picker-utils

Builders for redux actions, action-types and reducers for date-range-picker.
All developer need – is to create a component 
## Installation

`npm install --save redux-date-range-picker-utils`

## Examples

### Action-types

```javascript
import { createActionTypes } from 'redux-date-range-picker-utils';
const DATE_PICKER = createActionTypes('MY_DATE_PICKER');
// =>
// {
//   DATE_FILTER_TOGGLE_DROPDOWN: 'MY_DATE_PICKER_DATE_FILTER_TOGGLE_DROPDOWN',
//   DATE_FILTER_OPEN_DROPDOWN: 'MY_DATE_PICKER_DATE_FILTER_OPEN_DROPDOWN',
//   DATE_FILTER_CLOSE_DROPDOWN: 'MY_DATE_PICKER_DATE_FILTER_CLOSE_DROPDOWN',
//   DATE_FILTER_SHIFT_CURRENT_MONTH: 'MY_DATE_PICKER_DATE_FILTER_SHIFT_CURRENT_MONTH',
//   DATE_FILTER_SELECT_DATE: 'MY_DATE_PICKER_DATE_FILTER_SELECT_DATE',
// }
export { DATE_PICKER };
```

### Actions

```javascript
import { createActions } from 'redux-date-range-picker-utils';
import { DATE_PICKER } from './action-types';
const actions = createActions(DATE_FILTER, { prefix: 'myCustomPrefix' } /* optional */);
// =>
//{
//  myCustomPrefixToggleDropdown, or toggleDropdown
//  myCustomPrefixOpenDropdown, or openDropdown
//  myCustomPrefixCloseDropdown, or closeDropdown
//  myCustomPrefixShiftCurrentMonth, or shiftCurrentMonth
//  myCustomPrefixSelectDate or selectDate
//}
export default actions;
```

### Reducer

```javascript
import { createReducer } from 'redux-date-range-picker-utils';
import { DATE_PICKER, CUSTOM_ACTION_TYPE } from './action-types';
const reducer = createReducer(DATE_FILTER, { 
	[CUSTOM_ACTION_TYPE]: customHandler /* optional */
	[DATE_PICKER.TOGGLE_DROPDOWN]: customToggleDropdownHandler /* optional (overrides default one) */
});
export default reducer;
```

### State methods

```javascript
get('prop'); // Get prop => prop value
set({ propName: 'propValue' }); // BatchUpdate props with object => current chainable interface
toggle(); // Toggle dropdown => current chainable interface
open(); // Open dropdown => current chainable interface
close(); // Close dropdown => current chainable interface
shiftCurrentMonth(shiftSize); // Shift current month by +-shiftSize (year will change also) => current chainable interface
selectDate(date); // Date, moment or string. Select a date => current chainable interface
```

### State props
```
{
	// Actual selected date
	from: 'YYYY-MM-DD', // or null
	to: 'YYYY-MM-DD', // or null
	// Clicked, but not selected yet
	selectedFrom: 'YYYY-MM-DD', // or null
	selectedTo: 'YYYY-MM-DD', // or null
	isDropdownOpen: Boolean,
	currentMonth: +'M', // Index of current month
	currentYear: +'YYYY' // Current year
}
```

### Component

```javascript
import actions from './actions';
import Component from './component';
// ... Somewhere in high level component that connects to store .render() method 
	<Component {...actions} {...state.path.to.state} />

```

```javascript
import InputBlock from './input-block';
import Calendar from './calendar';
function Component (props) {
	return (
		<InputBlock onClick={() => props.myCustomPrefixToggleDropdown()}/>
		<Calendar
			isVisible={props.get('isDropdownOpen')}
			currentMonth={props.get('currentMonth')}
			onDateClick={(date) => props.myCustomPrefixSelectDate(date)}
		/>
	);
}
export default Component;
```
