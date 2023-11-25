import { Web5 } from '@web5/api';

const { web5, did: dawsonDid } = await Web5.connect();

console.log(dawsonDid);