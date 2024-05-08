const { executeQuery } = require('../services/db/queryBuilder');

const getAllUsers = () => {
    return executeQuery('SELECT * FROM users', []);
};

module.exports = { getAllUsers };
