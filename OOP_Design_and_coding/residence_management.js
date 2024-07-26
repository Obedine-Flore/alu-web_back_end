// Class to represent a student
class Student {
  constructor(id, name, residence = null) {
      this.id = id;
      this.name = name;
      this.residence = residence; // Link to Residence object
  }

  assignResidence(residence) {
      this.residence = residence;
  }
}

// Class to represent a residence
class Residence {
  constructor(id, name, capacity) {
      this.id = id;
      this.name = name;
      this.capacity = capacity;
      this.occupants = []; // Array of Student objects
  }

  addStudent(student) {
      if (this.occupants.length < this.capacity) {
          this.occupants.push(student);
          student.assignResidence(this);
      } else {
          console.log("No room available in this residence.");
      }
  }

  removeStudent(student) {
      this.occupants = this.occupants.filter(occupant => occupant.id !== student.id);
      student.assignResidence(null);
  }
}

// Class to represent a maintenance request
class MaintenanceRequest {
  constructor(id, residence, description) {
      this.id = id;
      this.residence = residence; // Link to Residence object
      this.description = description;
      this.status = "Pending";
  }

  resolve() {
      this.status = "Resolved";
  }
}

// Class to manage the residences and requests
class ResidenceManager {
  constructor() {
      this.residences = [];
      this.requests = [];
  }

  addResidence(residence) {
      this.residences.push(residence);
  }

  createMaintenanceRequest(residence, description) {
      const requestId = this.requests.length + 1;
      const request = new MaintenanceRequest(requestId, residence, description);
      this.requests.push(request);
      return request;
  }

  resolveRequest(requestId) {
      const request = this.requests.find(req => req.id === requestId);
      if (request) {
          request.resolve();
      } else {
          console.log("Request not found.");
      }
  }
}
