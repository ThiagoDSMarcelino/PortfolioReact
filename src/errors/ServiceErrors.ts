export enum ServiceErrorType {
	Connection = 'connection',
}

class ServiceError extends Error {
	constructor(errorType: ServiceErrorType, message?: string) {
		super(message);
		this.name = `Service ${errorType.toString()} error`;
	}
}

export default ServiceError;
