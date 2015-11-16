/*global chiika,angular */
/**
 *
 *
 *
 *
 * @name settings
 * @namespace
 *
 * @memberOf chiika
 *
 * @version @{chiika.ng.version}
 */
angular.module('homePage', [])
	.controller('HomePageCtrl', ['$scope',
		function($scope) {
			$scope.card = {
				name: 'Episodes Watched'
			};
		}
	])
	.directive('homePageDir', function() {
		return {
			restrict: 'E',
			templateUrl: 'homepage.html'
		};
	});