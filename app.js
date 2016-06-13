"use strict";

var _counter = require("./out/counter.js");

var _counterView = require("./out/counterView.js");

/**
 * Created by alexanderbol on 11/06/2016.
 */


var counter = new _counter.Counter(10);
var view = new _counterView.CounterView(counter);

view.render();