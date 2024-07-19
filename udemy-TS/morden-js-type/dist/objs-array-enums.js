"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person1 = {
    name: 'Dong',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person1.role === Role.AUTHOR) {
    console.log('is admin');
}
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person1.name);
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
//# sourceMappingURL=objs-array-enums.js.map