"use strict";angular.module("sbAdminApp").directive("sidebarSearch",function(){return{templateUrl:"scripts/directives/sidebar/sidebar-search/sidebar-search.html",restrict:"E",replace:!0,scope:{},controller:function($scope,$rootScope){$scope.enter=function(){var query=$scope.query;$rootScope.$broadcast("search_query",query)}}}}).directive("ngEnter",function(){return function(scope,element,attrs){element.bind("keydown keypress",function(event){13===event.which&&(scope.$apply(function(){scope.$eval(attrs.ngEnter)}),event.preventDefault())})}});