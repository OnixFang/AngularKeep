(function filtersIife() {
    const app = angular.module('angularkeep');

    function noteFilter(notes) {
        const note = [];
        for (let i = 0; i < notes.length; i += 1) {
            if (notes[i].type === 'note') {
                note.push(notes[i]);
            }
        }
        return note;
    }

    function listFilter(notes) {
        const list = [];

        for (let i = 0; i < notes.length; i += 1) {
            if (notes[i].type === 'list') {
                list.push(notes[i]);
            }
        }

        return list;
    }

    app.filter('noteFilter', () => noteFilter);
    app.filter('listFilter', () => listFilter);
}());
