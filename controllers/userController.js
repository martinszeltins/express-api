const { fetchAllUsers } = require('../services/userService');

const findAllUsers = async (_, response) => {
    const users = await fetchAllUsers();

    response.json(users);
};

module.exports = { findAllUsers };
