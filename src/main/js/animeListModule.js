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
angular.module('animeList', [])
        .controller('AnimeListCtrl', ['$scope', '$q', '$timeout',
            function ($scope, $q, $timeout) {
                $scope.selected = [];

                $scope.query = {
                    order: 'title',
                    limit: 5,
                    page: 1
                };
                //Default values
                $scope.watchingList = {
                    "count": 4,
                    "data":
                            [{
                                    "title": 'Owarimonogatari',
                                    "progress": {"value":0.4},
                                    "progressString": "7/25",
                                    "type": 'Tv',
                                    "score": {"value":8},
                                    "season": 'Fall 2015'
                                }, {
                                    "title": 'Rakudai Kishi no Cavalary',
                                    "progress": {"value":0.2},
                                    "progressString": "2/25",
                                    "type": 'Tv',
                                    "score": '-',
                                    "season": 'Fall 2015'
                                }, {
                                    "title": 'Noragami Aragoto',
                                    "progress": {"value":0.75},
                                    "progressString": "20/25",
                                    "type": 'Tv',
                                    "score": '-',
                                    "season": 'Fall 2015'
                                }, {
                                    "title": 'Gakusen Asterisk',
                                    "progress": {"value":0.9},
                                    "progressString": "24/25",
                                    "type": 'Tv',
                                    "score": '-',
                                    "season": 'Fall 2015'
                                }]
                };

                $scope.getTypes = function () {
                    return ['Tv'];
                };
                $scope.onpagechange = function (page, limit) {
                    var deferred = $q.defer();

                    $timeout(function () {
                        deferred.resolve();
                    }, 2000);

                    return deferred.promise;
                };

                $scope.onorderchange = function (order) {
                    var deferred = $q.defer();

                    $timeout(function () {
                        deferred.resolve();
                    }, 2000);

                    return deferred.promise;
                };

            }]);

angular.module('animeTable', [])
        .controller('AnimeTableCtrl', ['$scope',
            function ($scope) {
                this.animeList = $scope.animeList;
            }
        ])
        .directive('animeTableDir', function () {
            return {
                scope: {
                    animeList: '=animeList'
                },
                restrict: 'E',
                templateUrl: 'animeListTable.html',
                replace: true,
                controller: 'AnimeTableCtrl',
                controllerAs: 'ctrl'
            };
        });