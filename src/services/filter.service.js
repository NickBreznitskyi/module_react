const setFilter = (users, name, username, email) => {
    return users.filter(value => (value.name.includes(name) && value.username.includes(username) && value.email.includes(email)))
}

export const filterService = {
    setFilter,
}