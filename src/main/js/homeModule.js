/*global chiika,angular,console */
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
function handleSuccess(args)
{
    console.log("Success arguments");
    console.log(args);
}
function handleError(args)
{
    console.log("Error");
    console.log(args);
}
angular.module('homePage', [])
        .controller('HomePageCtrl', ['$scope',
            function ($scope) {
                $scope.card = {
                    name: 'Episodes Watched'
                };
                $scope.selectedIndex = 1;

                $scope.menuActions = [{
                        name: 'Verify User',
                        apiIndex: 0
                    },
                    {
                        name: 'Get Animelist From MAL',
                        apiIndex: 1
                    },
                    {
                        name: 'Get Animelist',
                        apiIndex: 1
                    }];
                $scope.onMenuClick = function (index)
                {
                    if (index === 0)
                    {
                        chiika.callApi(0, {user: "arkenthera", pass: "123asd456"}, handleSuccess, handleError);
                    }
                    if (index === 1)
                    {
                        chiika.callApi(1, "", handleSuccess, handleError);
                    }
                    if (index === 2)
                    {
                        chiika.callApi(2, "", handleSuccess, handleError);
                    }

                };
            }
        ])
        .directive('homePageDir', function () {
            return {
                restrict: 'E',
                templateUrl: 'homepage.html'
            };
        });