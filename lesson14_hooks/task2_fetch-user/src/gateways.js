const baseUrl = 'https://api.github.com/users';

const fetchUser = userName => fetch(`${baseUrl}/${userName}`).then(response => response.json());

export default fetchUser;
