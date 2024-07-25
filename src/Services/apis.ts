import { get } from 'aws-amplify/api';
import { } from '@aws-amplify/api-rest'

export type ApiResponse = {
  success: string
}

async function getRestaurants() {
  try {
    const restOperation = get({ 
      apiName: 'restaurants',
      path: '/restaurants' 
    });
    const response = await restOperation.response;
    console.log('GET call succeeded: ', response.body.json(), response);
    const result = await response.body.json() as ApiResponse;
    return result;
  } catch (e) {
    console.log('GET call failed: ');
  }
}

export {
    getRestaurants
}