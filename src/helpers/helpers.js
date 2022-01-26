export const helpers = {
    getIds: (characters) => {
        let ids = [];
        for (const character of characters) {
            let id = character.split('/');
            ids.push(id[id.length - 1])
        }
        return `[${ids}]`
    }
}