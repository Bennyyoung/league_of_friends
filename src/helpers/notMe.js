export const notMe = (chatConfig, selectedChat) => {
  return selectedChat.people.find(particular => particular.person.username !== chatConfig.userName)?.person?.username
 };