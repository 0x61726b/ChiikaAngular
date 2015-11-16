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
        .controller('AnimeListCtrl', ['$scope',
            function ($scope) {
                $scope.card = {
                    name: 'AnimeList'
                };
                //Default values
                this.watchingList = [{
                        title: 'Owarimonogatari',
                        progress: '7/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Rakudai Kishi no Cavalary',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Noragami Aragoto',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Gakusen Asterisk',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }];
                this.completedList = [{
                        title: 'Suzumiya Haruhi no Yuuutsu',
                        progress: '25/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Code Geass: Hangyaku no Lelouch',
                        progress: '12/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Noragami',
                        progress: '12/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Byousoku 5 Centimeter',
                        progress: '12/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Toki wo Kakeru Shoujo',
                        progress: '12/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'To LOVE-Ru',
                        progress: '3/3',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, ];
                this.droppedList = [{
                        title: 'Clannad',
                        progress: '7/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Toradora',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Ga-Rei: Zero',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Kiss x Sis',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }];
                this.onholdList = [{
                        title: 'Higashi no Eden',
                        progress: '7/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Sora no Otoshimono',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Asobi ni Iku yo!',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Toaru Kagaku no Railgun',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    },
                    {
                        title: 'Chuu Bra!!',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    },
                    {
                        title: 'Durarara!!',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }];
                this.plantowatchList = [{
                        title: 'So Ra No Wo To',
                        progress: '7/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Working!!!!!!!!!!!!!!!!!',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Aki-Sora',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Suzumiya Haruhi no Shoushitsu',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }];
            }
        ])
        .directive('animeListDir', function () {
            return {
                scope: {},
                restrict: 'E',
                templateUrl: 'animeList.html',
                controller: 'AnimeListCtrl',
                controllerAs: 'ctrl',
                replace: true
            };
        });

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