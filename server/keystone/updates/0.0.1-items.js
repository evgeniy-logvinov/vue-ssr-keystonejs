const keystone = require('keystone');
const Item = keystone.list('item');

module.exports = done => {
  Promise.all([
    new Promise(resolve => {
      new Item.model({
        name: 'Item 1',
        title: 'title 1',
        titleRU: 'заголовок 1'
      }).save(() => resolve());
    }),

    new Promise(resolve => {
      new Item.model({
        name: 'Item 2',
        title: 'title 2',
        titleRU: 'заголовок 2'
      }).save(() => resolve());
    })
  ]).then(() => done());
};