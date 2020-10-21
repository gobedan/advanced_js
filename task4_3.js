function Human() {
   this.name = "John";
   this.lastName = "Smith";
   this.location = "Russia";
   this.phoneNumber = "+1234567890";
   this.eat = function() {};
   this.sleep = function() {};
   this.callFriend = function() {};
};

function Employee() {
   this.__proto__ = new Human();
   this.position = "Senior engineer";
   this.startDate = "10.10.1990";
   this.department = "IT";
};

function ActiveEmployee() {
   this.__proto__ = new Employee();
   this.baseSalary = "10000";
   this.salaryCurrency = "$";
   this.writeReport = function() {};
   this.organizeMeeting = function () {};
   this.retire = function () {};
   this.startVacation = function () {};
};

function FormerEmployee() {
   this.__proto__ = new Employee();
   this.endDate = "10.10.2000";
};
