const keystone = require('keystone');
const Types = keystone.Field.Types;

const Item = new keystone.List('item');

Item.add({
  name: { type: Types.Text, initial: true, required: true, index: true },
  title: { type: Types.Text, initial: true, required: true, index: true },
  titleRU: { type: Types.Text, initial: true, required: true, index: true },
  test: { type: Types.Text, initial: false, required: false, index: true }
});

Item.register();