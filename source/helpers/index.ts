export const checkRequiredParams = (...reqParams: string[]) => {
	for (var param of reqParams) {
		if (typeof param == "undefined") return true;
	}
	return false;
}