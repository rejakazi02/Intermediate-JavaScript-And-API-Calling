

const mobile = {
 id: 101,
 color: 'black',
 Performance: {
     pro: 'octa core',
     RAM: '4 GB',
     OS: 'Android 11 (MIUI 12)',
     price: 50000,
 },
 
 Sensors: ['Fingerprint', 'Accelerometer', 'Gyroscope', 'Proximity'] ,

 specifications: function () {

    console.log('Performance = ', this.Performance );
     
 }



}


const mobiles = Object.entries(mobile);
const {id, color, Sensors} = mobile;

console.log('Xiaomi Redmi Note 10 Full Specifications');
console.log('id = ', id);
console.log('color = ', color);
console.log('Sensors = ', Sensors);

mobile.specifications();



