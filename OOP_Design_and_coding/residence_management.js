// residence-management.js

class Residence {
  constructor(name, address, isOccupied) {
    this.name = name;
    this.address = address;
    this.isOccupied = isOccupied;
  }
}

class DormRoom extends Residence {
  constructor(name, address, isOccupied, size) {
    super(name, address, isOccupied);
    this.size = size; // size in square footage
  }
  
  calculateRent() {
    return this.size * 1.5; // Example calculation, can be adjusted
  }
}

class Apartment extends Residence {
  constructor(name, address, isOccupied, numBedrooms) {
    super(name, address, isOccupied);
    this.numBedrooms = numBedrooms;
  }
  
  calculateRent() {
    return this.numBedrooms * 500; // Example calculation, can be adjusted
  }
}

class Student {
  constructor(name, studentID, gender, residence = null) {
    this.name = name;
    this.studentID = studentID;
    this.gender = gender;
    this.residence = residence; // Reference to Residence
  }

  assignResidence(residence) {
    this.residence = residence;
    residence.isOccupied = true;
  }
}

class MaintenanceRequest {
  constructor(description, status, student, employee = null) {
    this.description = description;
    this.status = status; // e.g., "submitted", "in progress", "completed"
    this.student = student; // Reference to Student
    this.employee = employee; // Reference to Employee (if assigned)
  }
  
  assignEmployee(employee) {
    this.employee = employee;
  }
  
  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// Create a new dorm room and apartment
const dormRoom = new DormRoom('Dorm A', '123 College St', false, 250);
const apartment = new Apartment('Apt 1', '456 University Ave', false, 3);

// Create a new student
const student = new Student('Jane Doe', 'S12345', 'Female');

// Assign residence to the student
student.assignResidence(dormRoom);

// Create a new maintenance request
const maintenanceRequest = new MaintenanceRequest('Leaky faucet', 'submitted', student);

// Display some information
console.log('Welcome to the Residence Management System!')
console.log(`Student ${student.name} is assigned to ${student.residence.name}`);
console.log(`Rent for the dorm room is $${dormRoom.calculateRent()}`);
console.log(`Maintenance request status: ${maintenanceRequest.status}`);