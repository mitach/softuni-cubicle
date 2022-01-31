const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'asdjdasfafsdasd',
            name: 'mirror Cube',
            description: 'Some mirror strange cube',
            imageUrl: 'https://cdn.tabletphonecase.com/media/-/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/i/m/image_31-5udkp42l._sl500_aa300_.jpg?sig=d9c879484a7f1a7d91646ebb354f7de7&p=dz02NTAmcmE9MCZycz0xJndzPSZ3cD1zdHJldGNoJndvPSZwPTcxNSZxPTkwJmNvPTEmYXI9MSZrZj0w',
            difficulty: '4'
        },
        {
            id: '1t8z10skz2o2ag1',
            name: 'ice cube',
            description: 'A really old singer',
            imageUrl: 'https://api.time.com/wp-content/uploads/2015/08/ice-cube-straight-outta-compton1.jpg?quality=85&w=1024&h=512&crop=1',
            difficulty: '1'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube)
    }
}

module.exports = Cube;