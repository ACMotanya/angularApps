'use strict';

//Setting up route
angular.module('categories').config(['$stateProvider',
    function($stateProvider) {
        // Categories state routing
        $stateProvider.
        state('categories', {
            url: '/categories',
            templateUrl: 'modules/categories/views/categories.client.view.html'
        }).
        state('createCategory', {
            url: '/categories/create',
            templateUrl: 'modules/categories/views/create-category.client.view.html'
        });
    }
]);
