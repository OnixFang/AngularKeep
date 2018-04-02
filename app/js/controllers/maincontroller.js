(function mainControllerIife() {
    const app = angular.module('angularkeep');

    function mainController($scope, noteData) {
        $scope.notes = noteData.getNotes;
        $scope.test = 'testfile.html';
    }

    app.controller('mainController', mainController);
}());
