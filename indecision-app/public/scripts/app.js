'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreting',
        value: function getGreting() {
            return 'Hi, ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return 'name: ' + this.name + '\nage: ' + this.age;
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, score) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.score = score;
        return _this;
    }

    _createClass(Student, [{
        key: 'getScore',
        value: function getScore() {
            return this.score;
        }
    }, {
        key: 'hasScore',
        value: function hasScore() {
            return !!this.score;
        }
        // override

    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
            var scoreMsg = this.hasScore() ? this.score : 'N/A';
            return description + '\nscore: ' + scoreMsg;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, location) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.location = location;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getDescription', this).call(this);
            // when to use !!
            var locMsg = this.location || 'N/A';
            return description + '\nlocation: ' + locMsg;
        }
    }]);

    return Traveler;
}(Person);

var me = new Person('ZZ', 27);
// console.log(me.getGreting());
// console.log(me.getDescription());

var student1 = new Student('ZZ', 27, 90);
console.log(student1.getDescription());
console.log(student1.hasScore());

var traveler = new Traveler('ZZ', 27, 'Beijing');
console.log(traveler.getDescription());
