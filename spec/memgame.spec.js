let jsdom = require('jsdom');
let MemoryGame = require('./../game');



describe('memoryCard', () => {
    let memoryCard;
    beforeEach(() => {
        memoryCard;
    })
    it('should define the memory card variable', () => {
        expect(memoryCard).not.toBeDefined();
    })
});

describe('frontCard', () => {
    let frontCard;
    beforeEach(() => {
        frontCard;
    })
    it('should define the memory card variable', () => {
        expect(frontCard).not.toBeDefined();
    })
});

describe('backCard', () => {
    let backCard;
    beforeEach(() => {
        backCard;
    })
    it('should define the memory card variable', () => {
        expect(backCard).not.toBeDefined();
    })
});

describe('cardHasFlipped', () => {
    let cardHasFlipped;
    beforeEach(() => {
        cardHasFlipped = false;
    })
    it('should define the memory card variable', () => {
        expect(cardHasFlipped).toBeFalsy();
    })
});

describe('setBoard', () => {
    let setBoard;
    beforeEach(() => {
        setBoard = false;
    })
    it('should define the memory card variable', () => {
        expect(setBoard).toBeFalsy();
    })
});

describe('memoryCard', () => {
    let memoryCard;
    beforeEach(() => {
        memoryCard;
    })
    it('should define the memory card variable', () => {
        expect(memoryCard).not.toBeDefined();
    })
});

describe('shuffleCards()', function () {
    let array;
    let game;
    let card;
    beforeEach(() => {
        array = ['a', 'b', 'c', 'd', 'e', 'f']
        game = new MemoryGame();
        card = game.shuffleCards(array)
    })
    it('should return a new array ', function () {
        expect(card).not.toBe(['a', 'b', 'c', 'd', 'e', 'f'])
    })
});

describe('index.html', () => {
    let dom;
    beforeEach(() => {
        dom = new JSDOM('<div class="memoryCard" data-name="afro">');
    })
    it('the div element should have the class memory card', () => {
        expect(dom).toHaveClass()
    })
});

describe('index.html', () => {
    //   let game = require
    beforeEach(() => {
        
        const dom = new jsdom.JSDOM('<section class="memoryGame">');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
        // game = global.document.querySelectorAll('.memoryCard')
    })
    it('the section element should have the class memory game', () => {
         expect(global.document.querySelector('.memoryCard').class).toBe('memoryCard');
});

describe('index.html', () => {
    let dom;
    beforeEach(() => {
        dom = new jsdom.JSDOM('<img class="front-face" src="images/back/afro.png" alt="afro-silhouette">');
    })
    it('the image element should have the class front-face', () => {
        expect(dom).toHaveClass()
    })
});

describe('index.html', () => {
    let dom;
    beforeEach(() => {
        dom = new jsdom.JSDOM('<img class="back-face" src="images/back/afro.png" alt="afro-silhouette">');
    })
    it('the image element should have the class back-face', () => {
        expect(dom).toHaveClass();
    })
});