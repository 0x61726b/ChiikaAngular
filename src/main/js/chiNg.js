/*global chiika,angular */
/**
 *
 *Finally register modules
 *
 *
 * @name settings
 * @namespace
 *
 * @memberOf chiika
 *
 * @version @{chiika.ng.version}
 */
       angular
           .module('chiika', ['ngMaterial', 'md.data.table','homePage','animeList','animeTable','menuDemoPosition'])
           .config(function($mdThemingProvider) {

               $mdThemingProvider.theme('default')
                   .primaryPalette('teal')
                   .accentPalette('indigo');

           })
           .controller('AppCtrl', function($scope, $mdSidenav) {
               $scope.openLeftMenu = function() {
                   $mdSidenav('left').toggle();
               };
           });