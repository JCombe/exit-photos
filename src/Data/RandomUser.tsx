import axios from 'axios';

export const RandomUserData = new Promise((resolve, reject) => {
  const data = axios.get('https://randomuser.me/api/?results=5');

  data.then((object: any) => {
    const userData = object.data.results;
    resolve(userData);
  });
});
