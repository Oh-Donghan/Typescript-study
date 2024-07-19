"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person1 = {
    name: 'Dong',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person1.role === Role.AUTHOR) {
    console.log('is admin');
}
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person1.name);
for (const hobby of person1.hobbies) {
    console.log(hobby);
}
//# sourceMappingURL=objs-array-enums.js.map