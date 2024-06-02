function toListIfOnly({ data }) {
    if (!Array.isArray(data)) {
        return [data];
    } else {
        return data;
    }
}

export { toListIfOnly }