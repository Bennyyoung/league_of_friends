export const groupMessages = messages => {
//  export const isFirstMessageByUser = !lastMessage || lastMessage.username !== message.sender.username
 
    const finalArr = [];

 let currentArr = [];
 let currentAuthor = '';
 messages.forEach(message => {

  if (message.sender.username !== currentAuthor) {
   if (currentAuthor) {
    finalArr.push([...currentArr]);
   }
   currentArr.splice(0, currentArr.length);
   currentArr.push(message);
   currentAuthor = message.sender.username;
  } else {
   currentArr.push(message)
  }
 });

 finalArr.push([...currentArr]);

 return finalArr;
}