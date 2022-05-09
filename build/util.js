export const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((item) => {
        return parseInt(item);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
