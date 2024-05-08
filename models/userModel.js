function createUser({ id, name, username, email }) {
    return {
        id,
        name,
        username,
        email,

        displayName() {
            return `${this.name} (@${this.username})`;
        },

        validate() {
            const errors = [];
            if (!this.name) errors.push('Name is required.');
            if (!this.email.includes('@')) errors.push('A valid email is required.');
            return errors;
        }
    };
}

module.exports = { createUser };
