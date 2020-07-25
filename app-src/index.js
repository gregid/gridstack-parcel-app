// import 'gridstack/dist/gridstack.all.js';
// import 'jquery';
// import 'jquery-ui';
import 'gridstack/dist/jquery';
import 'gridstack/dist/jquery-ui';
import 'gridstack/dist/gridstack';
import 'gridstack/dist/gridstack.jQueryUI';
import 'gridstack/dist/gridstack-poly.min.js';

import 'gridstack/dist/gridstack.css';

import './demo.css';

var grid = GridStack.init();
    
const serializedData = [
  {x: 0, y: 0, width: 2, height: 2},
  {x: 3, y: 1, width: 1, height: 2},
  {x: 4, y: 1, width: 1, height: 1},
  {x: 2, y: 3, width: 3, height: 1},
  {x: 1, y: 3, width: 1, height: 1}
];

const loadGrid = function() {
  grid.removeAll();
  var items = GridStack.Utils.sort(serializedData);
  grid.batchUpdate();
  items.forEach(function (node) {
	grid.addWidget('<div><div class="grid-stack-item-content"></div></div>', node);
  });
  grid.commit();
};

loadGrid();