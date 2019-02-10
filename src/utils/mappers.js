export const peopleMapper = (apiCallResult) => {
	return apiCallResult.reduce((mappedResult, item) => {
		mappedResult.push({
			name: item['name'],
			height: item['height'],
			mass: item['mass'],
			date: item['birth_year'],
			gender: item['gender'],
			hair: item['hair_color'],
			eye: item['eye_color'],
			skin: item['skin_color'],
		});
		return mappedResult;
	}, []);
};