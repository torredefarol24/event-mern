export class Context {
	public success: boolean
	public message: string
	public data: any

	constructor(msg: string) {
		this.data = {}
		this.success = false;
		this.message = msg
	}
}