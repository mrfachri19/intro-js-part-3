// program 1
let dataLoad = true;
 const loadingData = new Promise ((resolve) =>{
   if (dataLoad) {
     setTimeout(() =>{
       resolve(' loading selesai');
     }, 2000);
   } else {
     setTimeout(() => {
       resolve('tidak loading');
     }, 2000);
   }
 });
console.log('mulai');
loadingData
  
  .then(response => console.log(response))
  .catch(response => console.log( response))
  .finally(() => console.log('selesai menunggu'));
  console.log('selesai');

//   // program2
//   let makan = "kenyang"

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (makan === "kenyang") {
//             resolve("kamu sudah makan")
//         }  else {
//             reject("kamu belum makan")
//         }
//     }, 2000)
// })

// p.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })
