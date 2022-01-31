const Cube = require('../models/Cube');

const cubeDb = [
    {
        name: 'mirror Cube',
        description: 'Some mirror strange cube',
        imageUrl: 'https://cdn.tabletphonecase.com/media/-/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/i/m/image_31-5udkp42l._sl500_aa300_.jpg?sig=d9c879484a7f1a7d91646ebb354f7de7&p=dz02NTAmcmE9MCZycz0xJndzPSZ3cD1zdHJldGNoJndvPSZwPTcxNSZxPTkwJmNvPTEmYXI9MSZrZj0w',
        difficulty: '4'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
}

const cubeService = {
    getAll,
    create
}

module.exports = cubeService;