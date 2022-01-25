export default function getNextLunchtime (hours, minutes) {
	var lunchtime = new Date();

	lunchtime.setHours(hours);
	lunchtime.setMinutes(minutes);
	lunchtime.setSeconds(0);
	lunchtime.setMilliseconds(0);

	console.log('lunchtime', lunchtime)

	// if we've already had lunch today, start planning
	// tomorrow's lunch
	// @ts-ignore
	if (lunchtime < Date.now()) lunchtime.setDate(lunchtime.getDate() + 1);

	return lunchtime;
}
