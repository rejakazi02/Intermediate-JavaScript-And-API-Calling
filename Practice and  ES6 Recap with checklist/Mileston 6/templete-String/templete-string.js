
const mobile = {
  name: 'Xiaomi',
  color: "black",
  weight: "178.8 grams",
  Performance: {
    pro: "octa core",
    RAM: "4 GB",
    OS: "Android 11 (MIUI 12)",
    price: 50000,
    Sensors: ["Accelerometer", "Fingerprint", "Gyroscope", "Proximity"],
  },
};

const SensorsValue = mobile.Performance.Sensors.map((value) => value);

const SensorsIndexValue = SensorsValue[1];

const { name, color, weight } = mobile;
const { pro, RAM, OS, price } = mobile.Performance;

const tempeleVariable = `Redmi Note 10 Full Specifications. Brand name ${name}, Color ${color}, Processor ${pro}, RAM ${RAM} and Weight ${weight}. This Mobile have ${SensorsIndexValue} Sensors.`;
console.log(tempeleVariable);


