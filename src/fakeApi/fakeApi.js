import { mockData } from '../data/mockData';

const getData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 3);
  });

const fakeApi = {
  get: getData,
};

export default fakeApi;
