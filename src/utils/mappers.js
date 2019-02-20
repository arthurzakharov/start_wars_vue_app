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
		console.log(mappedResult);
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
		console.log(mappedResult);
		return mappedResult;
	}, []);
};
