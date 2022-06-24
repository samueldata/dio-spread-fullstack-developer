function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Edgar', 'ADMIN');
users.set('Gabriela', 'ADMIN');
users.set('Samuel', 'ADMIN');
users.set('Rafaela', 'CUSTOMER');
users.set('Gustavo', 'ITIL');
users.set('Rafaela', 'CUSTOMER');

console.log(getAdmins(users))