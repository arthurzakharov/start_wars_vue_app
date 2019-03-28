export const networkErrorHandler = (errorMessage) => {
	if(errorMessage.includes('timeout')) {
		const timeoutTime = errorMessage.match(/\d+/g);
		console.log(errorMessage, timeoutTime);
		return `Network seems to be low... ${timeoutTime}ms timeout is out!`;
	}
	if(errorMessage.includes('Network Error')) {
		return `Network Error occurred. Something goes wrong!`;
	}
	return 'Something goes wrong! Please, reload the page...';
};