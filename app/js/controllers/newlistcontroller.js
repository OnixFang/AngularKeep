(function newListControllerIife() {
    const app = angular.module('angularkeep');

    function newListController($scope) {
        $scope.list = {
            title: '',
            items: ['Hello 1', 'Hello 2'],
        };

        $scope.addItem = function addItem() {
            $scope.list.items.push($scope.newItem);
            $scope.newItem = '';
        };

        $scope.deleteItem = function deleteItem(index) {
            $scope.list.items.splice(index, 1);
        };
    }

    app.controller('newListController', newListController);
}());
