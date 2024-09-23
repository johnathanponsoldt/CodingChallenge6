// Task 1: Create an Employees Array of Employee Objects

const employees = [

{ name: 'Tyler', shifts: [{ day: 'Wedneday', hours: 8 }, { day: 'Friday', hours: 6 }] },
    
{ name: 'Ryan', shifts: [{ day: 'Friday', hours: 5 }, { day: 'Sunday', hours: 7 }] },
    
{ name: 'Pip', shifts: [{ day: 'Tuesday', hours: 8 }] },
    
{ name: 'Patrick', shifts: [{ day: 'Saturday', hours: 8 }] }
    
    ];

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Shifts for ${employee.name}:`);
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, hours: ${shift.hours}`);
 });
}
