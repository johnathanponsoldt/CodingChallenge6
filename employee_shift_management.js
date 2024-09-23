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

// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name === employeeName);
    if (!employee) {
        console.log(`Employee ${employeeName} not found`);
        return;
    }
    const existingShift = employee.shifts.find(shift => shift.day === day);
    if (existingShift) {
        console.log(`Error: ${employeeName} already has a shift on ${day}.`);
  } else {
   employee.shifts.push({day, hours });
   console.log(`Assigned ${hours} hours on ${day} to ${employeeName}`);
  }
}
