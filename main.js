const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
wardrobe.material = "Cedar";
//console.log(`Wardrobe's material is ${wardrobe.material}`);
//console.log(wardrobe);



const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


const location = "address";
const moneySpent = "cost";
const yearBuilt = "constructionDate";
const companyOwner = "owner";
const buildingCompany = "architect";

const buildingLocation = empireStateBuilding[location];
const costOfBuilding = empireStateBuilding[moneySpent];
const buildYear = empireStateBuilding[yearBuilt];
const companyName = empireStateBuilding[companyOwner];
const constructionCompany = empireStateBuilding[buildingCompany];

//console.log(empireStateBuilding.stories);
//console.log(empireStateBuilding.height);
//console.log(empireStateBuilding.eastWestLength);
//console.log(empireStateBuilding.northSouthLength);

//console.log(buildingLocation);
//console.log(costOfBuilding);
//console.log(buildYear);
//console.log(companyName);
//console.log(constructionCompany);


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

// first real trip up for me here

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime;

for (let i = 0; i < partTimeInstructors.length; i++){
    console.log(partTimeInstructors[i])
};
//when writing out the for loop I would use the original name of the array nested in
//nashvilleSoftwareSchool, instead of using the new ones I just created (partTimeInstructors)
const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;

for (let i = 0; i < fullTimeInstructors.length; i++){
    console.log(fullTimeInstructors[i])
};

//this works now thanks to gabby coming to a similar error and showing me what she did
console.log(fullTimeInstructors[4]);
console.log(partTimeInstructors[0]);