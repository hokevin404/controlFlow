// Part 1: Growing Pains
// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
//
//  The area in which the plants are contained is circular, with a radius of 5 meters.
//  The formula for calculating the area of a circle is PI multiplied by the radius, squared:
//      const PI = 3.1415;
//      const area = PI * radius * radius;
//  Each plant requires a minimum space of 0.8 square meters.
//  The area is starting with 20 plants.
//  The plants double in number every week.
//
// Using this information, your objectives are to:
//  Predict the plant growth after a specific number of weeks.
//  Implement control flow to make decisions on whether the plants should be:
//  Pruned, to stop them from exceeding the capacity of the garden.
//      This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
//  Monitored, if they are growing at an acceptable rate.
//      This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
//  Planted, if there is room to plant more plants.
//      This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
//
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

// console.log(`Area: ${area}`);

let numWeeks = 3;

let plantAreaPerWeek = 0.8*((2**numWeeks)*10);
let capacity = plantAreaPerWeek / area;

console.log(`Week: ${numWeeks}`)
console.log(`Plant Area Per Week: ${plantAreaPerWeek}`);
console.log(`Capacity: ${capacity}`)

if(capacity >= 0.8)
    console.log(`Pruned`)
else if(capacity >= .5)
    console.log(`Monitored`)
else
    console.log(`Planted`)


// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
//  The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
//      If the space remained circular, what would be the radius of this expanded garden?

let newAreaOfPlants = 0.8*((2**(10-1)*100));
let newRadius = Math.sqrt(newAreaOfPlants / PI);
console.log(`\nNew Radius: ${newRadius} meters`);


// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

let numOfWeeks = 10;

let plantAreaOfWeek = 0.8*((2**(10-1)*100));
console.log(`\nPlant Area Of Week: ${plantAreaOfWeek}`);
let capacityOfWeek = plantAreaOfWeek / area;
console.log(`Capacity Of Week: ${capacityOfWeek}`)


try 
{
    if(capacityOfWeek >= 0.8 && capacityOfWeek <= 1)
        console.log(`Pruned`);
    else if(capacityOfWeek >= .5 && capacityOfWeek < .8)
        console.log(`Monitored`);
    else if(capacityOfWeek < .5)
        console.log(`Planted`);
} catch(err) {
    console.log(err);
    console.log(`Unsufficient space required for plants.`);
}