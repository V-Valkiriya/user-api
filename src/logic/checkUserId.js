function checkUserId (id) {

    const userId = Number(id);
    if (Number.isNaN(userId) || userId <= 0) {
        return false;
    } else {
        return true;
    }
}

export default checkUserId;