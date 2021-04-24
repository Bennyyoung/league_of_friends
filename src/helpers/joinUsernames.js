export const joinUsernames = (people, currentUsername) => {
 return '@' + people.map(particular => particular.person.username).filter(ourUsername => ourUsername !== currentUsername).join(', @');
};