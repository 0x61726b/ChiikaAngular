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
angular.module('mangaList', [])
        .controller('MangaListCtrl', ['$scope',
            function ($scope) {
                $scope.card = {
                    name: 'MangaList'
                };
                //Default values
                this.readingList = [{
                        title: 'Sakurasou no Pet na Kanojo',
                        progress: '7/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Shigatsu wa Kimi no Uso',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Horimiya',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Chikan Otoko',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }];
                this.completedList = [{
                        title: 'Watashitachi no Shiawase na Jikan',
                        progress: '25/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Nisekoi',
                        progress: '12/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Last Game',
                        progress: '12/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Akagami no Shirayuki-hime',
                        progress: '12/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Tsurezure Children',
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
                    } ];
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
                        title: 'Tonari no Kaibutsu-kun',
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
                        title: 'Sakamichi no Apollon',
                        progress: '7/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Shishunki Bitter Change',
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
                        title: 'Yamada-kun to 7-nin no Majo',
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
                this.plantoreadList = [{
                        title: 'So Ra No Wo To',
                        progress: '7/25',
                        type: 'Tv',
                        score: '10',
                        season: 'Fall 2015'
                    }, {
                        title: 'Kanokon',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Octave',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }, {
                        title: 'Come Come Vanilla!',
                        progress: '7/12',
                        type: 'Tv',
                        score: '-',
                        season: 'Fall 2015'
                    }];
            }
        ])
        .directive('mangaListDir', function () {
            return {
                scope: {},
                restrict: 'E',
                templateUrl: 'mangaList.html',
                controller: 'MangaListCtrl',
                controllerAs: 'ctrl',
                replace: true
            };
        });

angular.module('mangaTable', [])
        .controller('MangaTableCtrl', ['$scope',
            function ($scope) {
                this.mangaList = $scope.mangaList;
            }
        ])
        .directive('mangaTableDir', function () {
            return {
                scope: {
                    mangaList: '=mangaList'
                },
                restrict: 'E',
                templateUrl: 'mangaListTable.html',
                replace: true,
                controller: 'MangaTableCtrl',
                controllerAs: 'ctrl'
            };
        });