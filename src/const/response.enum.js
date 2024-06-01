const ResCode = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}
// export default ResCode;

const ResMessage = {
    SUCCESS: 'Success',
    ERROR: 'Error',
    TOKEN_EXPIRED: 'Token Expired',
    CREATED: 'Created',
    NO_CONTENT: 'No Content',
    BAD_REQUEST: 'Bad Request'
}
const ResStatus = {
    SUCCESS: 'success',
    ERROR: 'error',
    TOKEN_EXPIRED: 'token_expired',
}
export default { ResMessage, ResCode, ResStatus };