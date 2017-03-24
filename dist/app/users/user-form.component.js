"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true;
    }
    UserFormComponent.prototype.onSubmit = function () {
        this.userCreated.emit({ user: this.newUser });
        this.clearForm();
    };
    UserFormComponent.prototype.clearForm = function () {
        var _this = this;
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return UserFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserFormComponent.prototype, "userCreated", void 0);
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        styles: [
            "\n    form {\n      padding:10px;\n      background-color: #ECF0F1;\n      border-radius: 3px\n    }\n\n    "
        ],
        template: "\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error' : name.invalid && name.touched}\">\n        <input type=\"text\" name=\"name\" id=\"\" class=\"form-control\" required=\"required\" [(ngModel)]=\"newUser.name\" #name=\"ngModel\" placeholder=\"Name\"/>\n        <span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Name is required</span>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error' : username.invalid && username.touched}\">\n        <input type=\"text\" name=\"username\" id=\"\" class=\"form-control\" required=\"required\" [(ngModel)]=\"newUser.username\" #username=\"ngModel\" placeholder=\"Username\"/>\n        <span class=\"help-block\" *ngIf=\"username.invalid && username.touched\">Username is required</span>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"form.invalid\">Create User</button>\n    </form>\n\n  "
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map