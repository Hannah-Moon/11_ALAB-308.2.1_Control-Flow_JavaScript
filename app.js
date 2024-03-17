// ALAB 308.2.1: Control Flow

///////////////////////////
//------- Object --------//
///////////////////////////

// Implement control flow using conditionals and control flow keywords.
// Create a program that executes based on conditional logic.


/* ------- Question no.1 -------- */

// Define condition //
const PI = 3.1415;
const r = 5;
const area = PI * r * r;
const areaPerPlant = 0.8    // Each plant requires a minimum space of 0.8 square meters.
const maxPlants = Math.floor((PI * r * r) / areaPerPlant);
console.log(maxPlants.toFixed(2))

// function 
function calculatePlantCount(weeks) {
    let plantCount = 20 * Math.pow(2, weeks);
    return plantCount;
}

function determineAction(weeks) {
    const plantCount = calculatePlantCount(weeks);
    const capacityThreshold = 0.8 * maxPlants;
    const monitoringThreshold = 0.5 * maxPlants;

    if (plantCount > capacityThreshold) {
        return "Prune";
    } else if (plantCount > monitoringThreshold) {
        return "Monitor";
    } else {
        return "Plant";
    }
}

// Results for 1 week //
const weeks1 = 1;
const action1 = determineAction(weeks1);
const plantCount1 = calculatePlantCount(weeks1);

console.log(`After ${weeks1} week, there are ${plantCount1} plants.`);
console.log(`Action to take: ${action1}`);

// Results for 2 weeks //
const weeks2 = 2;
const action2 = determineAction(weeks2);
const plantCount2 = calculatePlantCount(weeks2);

console.log(`After ${weeks2} weeks, there are ${plantCount2} plants.`);
console.log(`Action to take: ${action2}`);

// Results for 3 weeks //
const weeks3 = 3;
const action3 = determineAction(weeks3);
const plantCount3 = calculatePlantCount(weeks3);

console.log(`After ${weeks3} weeks, there are ${plantCount3} plants.`);
console.log(`Action to take: ${action3}`);

console.log("------------------------------------")
console.log("\n")

/* ------- Question no.2 -------- */

function calculatePlantCount(weeks, initialPlants) {
    return initialPlants * Math.pow(2, weeks);
}

function calculateTotalArea(plantCount) {
    return plantCount * areaPerPlant;
}

function calculateRadius(totalArea) {
    return Math.sqrt(totalArea / PI);
}

// Initial parameters
const initialPlants = 100;
const weeks = 10;

// Calculate plant count after 10 weeks without pruning
const plantCount = calculatePlantCount(weeks, initialPlants);

// Calculate total area required for these plants
const totalArea = calculateTotalArea(plantCount);

// Find the radius of the expanded circular garden
const radius = calculateRadius(totalArea);

// Calculate additional space required
const additionalSpace = totalArea - (PI * r * r); // Subtracting the original area

console.log(`After ${weeks} weeks without pruning, there would be ${plantCount} plants.`);
console.log(`The total area required would be ${totalArea} square meters.`);
console.log(`The radius of the expanded garden would be approximately ${radius.toFixed(2)} meters.`);
console.log(`The additional space required would be approximately ${additionalSpace.toFixed(2)} square meters.`);

console.log("------------------------------------")
console.log("\n")

/* ------- Question no.3 -------- */


try {
    // Initial parameters
    const initialPlants = 100;
    const weeks = 10;

    // Calculate plant count after 10 weeks without pruning
    const plantCount = calculatePlantCount(weeks, initialPlants);

    // Calculate total area required for these plants
    const totalArea = calculateTotalArea(plantCount);

    // Check if the total area required exceeds the maximum area available
    if (totalArea > area) {
        throw new Error("Insufficient space in the garden to accommodate all plants.");
    }

    // Find the radius of the expanded circular garden
    const radius = calculateRadius(totalArea);

    // Calculate additional space required
    const additionalSpace = totalArea - area; // Subtracting the original area

    console.log(`After ${weeks} weeks without pruning, there would be ${plantCount} plants.`);
    console.log(`The total area required would be ${totalArea} square meters.`);
    console.log(`The radius of the expanded garden would be approximately ${radius.toFixed(2)} meters.`);
    console.log(`The additional space required would be approximately ${additionalSpace.toFixed(2)} square meters.`);
} catch (error) {
    console.error("Error:", error.message);
}