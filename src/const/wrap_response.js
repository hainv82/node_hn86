function getSimpResData({status, message, data}) {
    return {
        "status": status,
        "message": message,
        "data": data
    }
}

function getSimpRes({ status, message }) {
    return { "status": status, "message": message };
}

export { getSimpRes , getSimpResData};