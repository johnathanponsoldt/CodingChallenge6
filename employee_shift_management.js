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

// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    const employee = employees.find(emp => emp.name === employeeName);
    if (!employee) {
      console.log(`Employee ${employeeName} not found`);
      return 0;
    }
    const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
    console.log(`${employeeName} has worked a total of ${totalHours} hours this week`);
    return totalHours;
}

// Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    const availableEmployees = employees.filter(emp => !emp.shifts.some(shift => shift.day === day));
    console.log(`Employees available on ${day}:`);
    availableEmployees.forEach(emp => console.log(` -${emp.name}`));

}
