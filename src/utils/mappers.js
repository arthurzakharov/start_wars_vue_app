export const peopleMapper = (apiCallResult) => {
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
		});
		return mappedResult;
	}, []);
};

export const filmMapper = (apiCallResult) => {
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			title: {
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
		});
		return mappedResult;
	}, []);
};
