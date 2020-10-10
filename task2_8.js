const human = Object.create({}, {
    fullName: {
        get: function() {
            return this.firstName + ' ' + this.lastName
        },
        
        set: function(value) {
            this.firstName = value.trim().split(' ')[0];
            this.lastName = value.trim().split(' ')[1];
        }
    },
    dateOfBirth: {
        set: function(value) {
            today = new Date();
            incompleteYears = today.getFullYear() - value.getFullYear();
            hadBirthdayThisYear = today.getMonth() > value.getMonth() || 
                                 (today.getMonth() == value.getMonth() && today.getDate() >= value.getDate());
            hadBirthdayThisYear ? this.age = incompleteYears : this.age = incompleteYears - 1;
        }
    }
});

