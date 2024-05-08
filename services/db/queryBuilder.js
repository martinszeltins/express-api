const connection = require('./connectionManager');

const executeQuery = (sql, params) => new Promise(resolve => {
    connection.query(sql, params, (_, results) => {
        resolve(results);
    });
});

module.exports = { executeQuery };
