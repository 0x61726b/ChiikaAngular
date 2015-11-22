/*global chiika,angular */
angular
  .module('menuDemoPosition', ['ngMaterial'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet("hamburger", 'assets/svg/hamburger.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('/assets/svg/hamburger.svg', 24);
  })
  .controller('PositionDemoCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    this.announceClick = function(index) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('You clicked!')
          .content('You clicked the menu item at index ' + index)
          .ok('Nice')
          .targetEvent(originatorEv)
      );
      originatorEv = null;
    };
  });