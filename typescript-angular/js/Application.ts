import * as angular from 'angular';
import {TodoCtrl} from './controllers/TodoCtrl';
import {todoBlur} from './directives/TodoBlur';
import {todoFocus}from './directives/TodoFocus';
import {todoEscape}from './directives/TodoEscape';
import {TodoStorage} from './services/TodoStorage';

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */

    var todomvc = angular.module('todomvc', [])
            .controller('todoCtrl', TodoCtrl)
            .directive('todoBlur', todoBlur)
            .directive('todoFocus', todoFocus)
            .directive('todoEscape', todoEscape)
            .service('todoStorage', TodoStorage);
