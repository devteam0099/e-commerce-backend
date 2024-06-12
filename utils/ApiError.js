class ApiError extends Error{
    constructor(
        message = "something went wrong",
        statuscode,
        success = false
    ){
        super(message)
       this.message = message
       this.statuscode = statuscode
       this.success = success
    }
}
export default ApiError