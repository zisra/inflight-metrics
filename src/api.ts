import { readFileSync } from 'fs';

import type {
	FlightInfoV1,
	FlightInfoV2,
	Status,
	Weather,
	AirportInfo,
} from './types';

const BASE_URL = `http://services.inflightpanasonic.aero/inflight/services`;

const fetchUrl = async ({
	url,
	mockendPath,
	useMockBackend,
}: {
	url: string;
	mockendPath: string;
	useMockBackend: boolean;
}) => {
	if (useMockBackend) {
		const fileContents = readFileSync(`./data/${mockendPath}`, 'utf8');
		return Promise.resolve(JSON.parse(fileContents));
	} else {
		const serverResponse = await fetch(url);
		return await serverResponse.json();
	}
};

export class PanasonicClient {
	useMockBackend: boolean;
	constructor({ useMockBackend }: { useMockBackend?: boolean }) {
		this.useMockBackend = Boolean(useMockBackend);
	}

	getFlightInfoV1 = async (): Promise<FlightInfoV1> => {
		return await fetchUrl({
			url: `${BASE_URL}/flightdata/v1/flightdata`,
			mockendPath: 'flight_info_v1.json',
			useMockBackend: this.useMockBackend,
		});
	};

	getFlightInfoV2 = async (): Promise<FlightInfoV2> => {
		return await fetchUrl({
			url: `${BASE_URL}/flightdata/v2/flightdata`,
			mockendPath: 'flight_info_v2.json',
			useMockBackend: this.useMockBackend,
		});
	};

	getWeatherForecast = async (destination: string): Promise<Weather> => {
		return await fetchUrl({
			url: `${BASE_URL}/livetextnews/v1/forecast_weather?icao_code=${destination}&days=1`,
			mockendPath: 'weather_forecast.json',
			useMockBackend: this.useMockBackend,
		});
	};

	getStatus = async (): Promise<Status> => {
		return await fetchUrl({
			url: `${BASE_URL}/exconnect/v1/status`,
			mockendPath: 'status.json',
			useMockBackend: this.useMockBackend,
		});
	};

	getAirportInfo = async (destination: string): Promise<AirportInfo> => {
		return await fetchUrl({
			url: `${BASE_URL}/airport_info/v1/multi_airport_info?icao_codes=${destination}`,
			mockendPath: 'airport_info.json',
			useMockBackend: this.useMockBackend,
		});
	};
}
