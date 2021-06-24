import { useEffect } from "react";

export const useScrollToBottom = (trigger, className) => {

 useEffect(() => {
  if (!!trigger) {
   Promise.all(
    Array.from(document.images)
     .filter(img => !img.complete)
     .map(img => new Promise(resolve => {
      img.onload = img.onerror = resolve;
     }))
   )
    .then(() => {
     document.getElementsByClassName(className)[0].scrollTop = document.getElementsByClassName(className)[0].scrollHeight;
    });
  }
 }, [trigger, className]);
};