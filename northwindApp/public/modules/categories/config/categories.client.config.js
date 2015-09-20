'use strict';

// Use application configuration module to register a new module
angular.module('categories').run(['Menus',
  function(Menus) {
    //Set top bar menu items
    Menus.addMenuItem('topbar', 'Categories', 'categories', 'dropdown', '/categories(/create)?');
    Menus.addSubMenuItem('topbar', 'categories', 'List Categories', 'categories');
    Menus.addSubMenuItem('topbar', 'categories', 'New Category', 'categories/create');
  }]);
