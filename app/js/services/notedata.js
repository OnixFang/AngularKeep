(function noteDataIife() {
    const app = angular.module('angularkeep');

    function noteData() {
        const note1 = {
            type: 'note',
            title: 'Test Tile 1',
            text: 'This is a lot of text, a very very lot. 1',
            color: '#f0e66e',
        };

        const note2 = {
            type: 'list',
            title: 'Test Tile 2',
            items: ['Item 1', 'Item 2', 'Item 3'],
            color: '#ff8080',
        };

        const note3 = {
            type: 'note',
            title: 'Test Tile 3',
            text: 'This is a lot of text, a very very lot. 2',
            color: '#78c8dc',
        };

        const note4 = {
            type: 'list',
            title: 'Test Tile 4',
            items: ['Item 1', 'Item 2', 'Item 3'],
            color: '#78c8dc',
        };

        const notes = [note1, note2, note3, note4];

        return {
            getNotes: notes,
        };
    }

    app.factory('noteData', noteData);
}());
