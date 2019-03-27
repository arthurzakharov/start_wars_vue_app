const IMG_BASE_URL = 'https://starwars-visualguide.com/assets/img';

// TODO: maybe remove name field from listed fields

export const peopleMapper = (apiCallResult) => {
	console.log('apiCall mapper: ', apiCallResult);
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			name: {
				field: 'Name',
				value: item['name'],
			},
			height: {
				field: 'Height',
				value: item['height']
			},
			mass: {
				field: 'Mass',
				value: item['mass']
			},
			date: {
				field: 'Birth year',
				value: item['birth_year']
			},
			gender: {
				field: 'Gender',
				value: item['gender']
			},
			hair: {
				field: 'Hair',
				value: item['hair_color']
			},
			eye: {
				field: 'Eye',
				value: item['eye_color']
			},
			skin: {
				field: 'Skin',
				value: item['skin_color']
			},
			url: item['url'],
			image: getImagePath('characters', item['url'])
		});
		return mappedResult;
	}, []);
};

export const speciesMapper = (apiCallResult) => {
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			name: {
				field: 'Name',
				value: item['name']
			},
			classification: {
				field: 'Classification',
				value: item['classification']
			},
			designation: {
				field: 'Designation',
				value: item['designation']
			},
			height: {
				field: 'Average height',
				value: item['average_height']
			},
			skin: {
				field: 'Skin',
				value: item['skin_colors']
			},
			hair: {
				field: 'Hair',
				value: item['hair_colors']
			},
			eye: {
				field: 'Eye',
				value: item['eye_colors']
			},
			lifespan: {
				field: 'average_lifespan',
				value: item['average_lifespan']
			},
			language: {
				field: 'Language',
				value: item['language']
			},
			url: item['url'],
			image: getImagePath('species', item['url'])
		});
		return mappedResult;
	}, []);
};

export const filmMapper = (apiCallResult) => {
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			name: {
				field: 'Title',
				value: item['title']
			},
			id: {
				field: 'Episode №',
				value: item['episode_id']
			},
			director: {
				field: 'Director',
				value: item['director'],
			},
			release: {
				field: 'Release date',
				value: item['release_date']
			},
			url: item['url'],
			image: getImagePath('films', item['url'])
		});
		return mappedResult;
	}, []);
};

export const starshipMapper = (apiCallResult) => {
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			mglt: {
				field: 'MGLT',
				value: item['MGLT']
			},
			cargo: {
				field: 'Cargo capacity',
				value: item['cargo_capacity']
			},
			consumables: {
				field: 'Consumables',
				value: item['consumables'],
			},
			cost: {
				field: 'Cost',
				value: item['cost_in_credits']
			},
			crew: {
				field: 'Crew',
				value: item['crew']
			},
			hyperdrive: {
				field: 'Hyperdrive rating',
				value: item['hyperdrive_rating']
			},
			length: {
				field: 'Length',
				value: item['length']
			},
			name: {
				field: 'Name',
				value: item['name']
			},
			passengers: {
				field: 'Passengers',
				value: item['passengers']
			},
			url: item['url'],
			image: getImagePath('starships', item['url'])
		});
		return mappedResult;
	}, []);
};

export const planetMapper = (apiCallResult) => {
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			climate: {
				field: 'Climate',
				value: item['climate']
			},
			diameter: {
				field: 'Diameter',
				value: item['diameter']
			},
			gravity: {
				field: 'Gravity',
				value: item['gravity'],
			},
			name: {
				field: 'Name',
				value: item['name']
			},
			orbital_period: {
				field: 'Orbital period',
				value: item['orbital_period']
			},
			population: {
				field: 'Population',
				value: item['population']
			},
			rotation_period: {
				field: 'Rotation period',
				value: item['rotation_period']
			},
			surface_water: {
				field: 'Surface water',
				value: item['surface_water']
			},
			terrain: {
				field: 'Terrain',
				value: item['terrain']
			},
			url: item['url'],
			image: getImagePath('planets', item['url'])
		});
		return mappedResult;
	}, []);
};

export const vehiclesMapper = (apiCallResult) => {
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			cargo: {
				field: 'Cargo capacity',
				value: item['cargo_capacity']
			},
			consumables: {
				field: 'Consumables',
				value: item['consumables']
			},
			cost: {
				field: 'cost',
				value: item['cost_in_credits'],
			},
			crew: {
				field: 'Crew',
				value: item['crew']
			},
			length: {
				field: 'Length',
				value: item['length']
			},
			atmosphering_speed: {
				field: 'Atmosphering speed',
				value: item['max_atmosphering_speed']
			},
			model: {
				field: 'Model',
				value: item['model']
			},
			name: {
				field: 'Name',
				value: item['name']
			},
			passengers: {
				field: 'Passengers',
				value: item['passengers']
			},
			vehicle_class: {
				field: 'Vehicle class',
				value: item['vehicle_class']
			},
			url: item['url'],
			image: getImagePath('vehicles', item['url'])
		});
		return mappedResult;
	}, []);
};

function parseIdFromUrl(url) {
	return url.replace(/[^0-9]/g, '');
}

function getImagePath(type, url) {
	return `${IMG_BASE_URL}/${type}/${parseIdFromUrl(url)}.jpg`;
}
