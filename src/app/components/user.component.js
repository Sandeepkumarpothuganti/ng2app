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
var core_1 = require("@angular/core");
var Posts_service_1 = require("../services/Posts.service");
var UserComponent = (function () {
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.name = 'Angular';
        this.email = 'ng@app.com';
        this.address = {
            street: '12 Main street',
            city: 'boston',
            state: 'MA'
        };
        this.hobbies = ['music', 'games'],
            this.showHobbies = false,
            this.postsService.getPosts().subscribe(function (posts) {
                _this.posts = posts;
            });
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: 'user.component.html',
        providers: [Posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [Posts_service_1.PostsService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map