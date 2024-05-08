const { getAllUsers } = require('../repositories/userRepository');

const fetchAllUsers = () => {
    return getAllUsers();
};

module.exports = { fetchAllUsers };
