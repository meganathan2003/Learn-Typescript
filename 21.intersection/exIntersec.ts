/**
 * In ts intersection is used for 
 * we join the both interface and print
 * the common needs in math we do like
 * two circle and return the match number
 * Here the example
 * 
 * @author meganathan
 */

interface Employee {
    id: number,
    name: string
}

interface Admin {
    isAdmin: boolean,
    accessLevel: number
}

type AdminEmployee = Employee & Admin; // Here we intersected the both interfaces using & 

let adminEmployee: AdminEmployee = {
    id: 1,
    name: 'dinesh',
    isAdmin: true,
    accessLevel: 1
}

console.log(adminEmployee); // print as obj { id: 1, name: 'dinesh', isAdmin: true, accessLevel: 1 }
