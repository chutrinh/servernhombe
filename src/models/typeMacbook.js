// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const macBookSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   type: [
//     {
//       color: {
//         type: String,
//         required: true,
//       },
//       img: {
//         type: [],
//         required: true,
//       },
//     },
//   ],
//   thumb: {
//     type: String,
//     required: true,
//   },
//   Product_specifications: {
//     processor: {
//       CPU: { type: String, required: true },
//       CPU_cores: { type: String, required: true },
//       threads: { type: String, required: true },
//       speed_CPU: { type: String, required: true },
//       max_speed_CPU: { type: String, required: true },
//       cache: { type: String, required: true },
//     },
//     memory: {
//       RAM: { type: String, required: true },
//       type_RAM: { type: String, required: true },
//       speed_bus_RAM: { type: String, required: true },
//       suppost_RAM: { type: String, required: true },
//       ROM: { type: String, required: true },
//     },
//     screen: {
//       size: { type: String, required: true },
//       resolution: { type: String, required: true },
//       frequency: { type: String, required: true },
//       suppost_RAM: { type: String, required: true },
//       Screen_Technology: { type: [], required: true },
//     },
//     Graphics_and_Audio: {
//       video_card: { type: String, required: true },
//       Audio_Technology: { type: [], required: true },
//     },
//     Connectivity_and_Expansion_Ports: {
//       port: { type: [], required: true },
//       Wireless_Connection: { type: String, required: true },
//       Webcam: { type: String, required: true },
//       feature_orther: { type: [], required: true },
//       Keyboard_Backlight: { type: String, required: true },
//     },
//     Dimensions_and_Weight: {
//       length: { type: String, required: true },
//       width: { type: String, required: true },
//       depth: { type: String, required: true },
//       Weight: { type: String, required: true },
//       Material: { type: String, required: true },
//     },
//     information_orther: {
//       Battery_Information: { type: String, required: true },
//       Operating_System: { type: String, required: true },
//       Release_Date: { type: String, required: true },
//     },
//   },
//   price: { type: String, required: true },
//   title: { type: String, required: true },
//   des_long: { type: String, required: true },
// });
// module.exports = mongoose.model("type_macbook", macBookSchema);
