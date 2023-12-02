import { Web5 } from '@web5/api';

const { web5, did: aliceDid } = await Web5.connect();

console.log(aliceDid);
// The way the Web5 SDK works is that it works like an API with CRUD functionality

// CREATE
// const { record } = await web5.dwn.records.create({
//     data: 'Hello, Web5!, I am Vance The Conqueror, Hear ye me!',
//     message: {
//       dataFormat: 'text/plain',
//     },
//   });

//   console.log('writeResult', record);

// READ
// const readResult = await record.data.text();
// console.log('Data Stored in DWN Records:', readResult)

// UPDATE
// const updateResult = await record.update({
//     data: 'Bend the knee, Web5, before your Master',
//   });
//   console.log('Updated Result:', await record.data.text())

//   const deleteResult = await record.delete();
//   console.log('deleteResult:', deleteResult)