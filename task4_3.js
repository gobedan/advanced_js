/* const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function() {},
    sleep: function() {},
    callFriend: function() {},
    writeReport: function() {},
    organizeMeeting: function () {},
    retire: function () {},
    startVacation: function () {}
  };
 */

const human = {
   name: "John",
   lastName: "Smith",
   location: "Russia",
   phoneNumber: "+1234567890",
   eat: function() {},
   sleep: function() {},
   callFriend: function() {}
}

const employee = {
   __proto__: human,
   position: "Senior engineer",
   startDate: "10.10.1990",
   department: "IT"
}

const active_employee = {
   __proto__: employee,
   baseSalary: "10000",
   salaryCurrency: "$",
   writeReport: function() {},
   organizeMeeting: function () {},
   retire: function () {},
   startVacation: function () {}
}

const former_employee = {
    __proto__: employee,
    endDate: "10.10.2000"
}