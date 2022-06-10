// HomeWork 05.06.22
// Task 1
// /**
//  * @param {object} userLocation
//  * @param {number} userLocation.lat
//  * @param {number} userLocation.lng
//  * @param {number} [userLocation.elevation]
//  */
// const getLatLngElevation = userLocation => {
// 	const {lat, lng, elevation} = userLocation
// 	return `The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`
// }

// // Sample usage - do not modify
// const userLocation = {
//   lat: 24.235235,
//   lng: 2.5734,
// };

// console.log(getLatLngElevation(userLocation)); 
// // The latitude is 24.235235, the longitude is 2.5734 and the elevation is 0 meters

// // Task 2
// /**
//  * @param {object} user
//  * @param {object} [user.info]
//  * @param {last} [user.info.name]
//  */
// const getFullName = user => {
// 	return user.info?.name.toLowerCase();
// }

// // Sample usage - do not modify
// console.log(getFullName({info: {name: "ALEX"}})); // "alex"
// console.log(getFullName({info: null})); // undefined
// console.log(getFullName({})); // undefined

// // Task 3
// /**
//  * @param {object} user
//  * @param {string} [user.fullName]
//  */
// const getWelcomeMessage = user => {
// 	return `Welcome ${user?.fullName ?? 'user'}`
// }

// // Sample usage - do not modify
// console.log(getWelcomeMessage({fullName: "Sam Green"})); // "Welcome Sam Green"
// console.log(getWelcomeMessage({})); // "Welcome user"

// // Task 4
// /**
//  * @param {string} host
//  * @param {string} user
//  * @param {Object} booking
//  * @param {string} booking[].status
//  */
// const getStatus = (host, user, booking) => {
// 	// if (booking.status === "pending") {
// 	//   return `Hey ${user}, we're awaiting confirmation from ${host}.`;
// 	// } else if (booking.status === "confirmed") {
// 	//   return `Hey ${user}, ${host} is excited to be hosting you.`;
// 	// } else if (booking.status === "canceled") {
// 	//   return `Unfortunately ${user}, ${host} has canceled your booking request.`;
// 	// } else if (booking.status === "done") {
// 	//   return `${host} hopes you had a great stay.`;
// 	// } else {
// 	//   return "Unknown booking status."
// 	// }

// 	// ?
// 	const messages = {
// 		pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
// 		confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
// 		canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
// 		done: `${host} hopes you had a great stay.`
// 	};

// 	return messages[host, user, booking] ?? "Unknown booking status.";
// }
  
  
// // Sample usage - do not modify
// const booking1 = {
// 	status: "pending"
// };
// console.log(getStatus("Sam", "Alex", booking1)); // "Hey Alex, we're awaiting confirmation from Sam."
  
// const booking2 = {
// 	status: "confirmed"
// }
// console.log(getStatus("Charlie", "Blake", booking2)); // "Hey Blake, Charlie is excited to be hosting you."