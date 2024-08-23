// getting data from JSON file
import {users} from "./data/reader.js";

// this is the data you can use
// console.log(users);


//1. Display Users Data
function displaydata(data) {
    for(let d of data){
        console.log(`User ID  ${d.id}`);
        console.log(`-Full Name ${d.first_name + "" + d.last_name}`);
        console.log(`-Age ${d.age}`);
        console.log(`-Salary ${d.balance}`);
    }
}
displaydata(users.slice(0,19));


//  2. Write a function to find the `oldest` user from the list.
function oldestuser(data) {
    let oldestUser = data[0];
    for (let i of data){
        if (i.age > oldestUser.age) {
            oldestUser = i;
            }
        }
        return oldestUser;
     }
     console.log("The oldest user is: ");
     console.log(oldestuser(users.slice(0,4)));

//3. Write a function to calculate the `average salary` of user from the list.
function averagesalary(data) {
    let sum = 0;
    for (let i of data) {
        sum += i.balance;
        }
        let average = sum / data.length;
        return average;
        }
        console.log("Average Salary is: "+ averagesalary(users.slice(0,4)));
            


