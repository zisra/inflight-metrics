import { PanasonicClient } from './api';

const apiClient = new PanasonicClient({
	useMockBackend: false,
});

const flightInfo = await apiClient.getFlightInfoV2();
const airportInfo = await apiClient.getAirportInfo(flightInfo.destination_icao);
const flightStatus = await apiClient.getStatus();

const addTrailingZero = (number: number) => {
	if (number < 10) {
		return `0${number}`;
	} else {
		return number.toString();
	}
};

const destinationCity = airportInfo[0].body.city.en.trim();
const connectivityStatus =
	flightStatus.internet_connectivity_status === true
		? 'Available'
		: 'Unavailable';

const minutesRemaining = flightInfo.time_to_destination_minutes;
let timeRemaining: string;
if (minutesRemaining < 60) {
	timeRemaining = `0:${minutesRemaining}`;
} else {
	timeRemaining = `${(minutesRemaining / 60).toFixed()}:${addTrailingZero(
		minutesRemaining % 60
	)}`;
}

console.log(`${destinationCity} (${airportInfo[0].body.iata})`);
console.log(`${flightInfo.time_at_destination} local time`);
console.log(`Estimated arrival time: ${flightInfo.estimated_arrival_time_utc}`);
console.log(`Flying time: ${timeRemaining}h remaining`);
console.log(`Connectivity on this flight: ${connectivityStatus}`);
