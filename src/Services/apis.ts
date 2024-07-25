import { get } from 'aws-amplify/api';

async function getRestaurants() {
  try {
    const restOperation = get({ 
      apiName: 'restaurants',
      path: '/restaurants' 
    });
    const response = await restOperation.response;
    console.log('GET call succeeded: ', response.body.json());
    return response.body.json();
  } catch (e) {
    console.log('GET call failed: ', JSON.parse(e.response.body));
    return e
  }
}

export {
    getRestaurants
}