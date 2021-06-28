

// init monde
function wrld() {
  var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',1,'@enable',1,'@size',1024,550,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
  var metro = this.patcher.newdefault(0,0,'send','metro');
  this.patcher.connect(monde,1,metro,0);
  var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
  var wave = this.patcher.newdefault(0,0,'wave');
}

// init primitives
function grid() {
  var grid = this.patcher.newdefault(0,0,'grid');
}

function model() {
  var model = this.patcher.newdefault(0,0,'model');
}

function proc() {
  var proc = this.patcher.newdefault(0,0,'proc');
}

function terra() {
  var terra = this.patcher.newdefault(0,0,'terra');
}

function graph() {
  var graph = this.patcher.newdefault(0,0,'graph');
}

function sketch() {
  var sketch = this.patcher.newdefault(0,0,'sketch');
}

// init dynamics
function lorenz() {
  var lorenz = this.patcher.newdefault(0,0,'lorenz');
}

function rossler() {
  var rossler = this.patcher.newdefault(0,0,'rossler');
}

function chua() {
  var chua = this.patcher.newdefault(0,0,'chua');
}

function qi() {
  var qi = this.patcher.newdefault(0,0,'qi');
}

// init systems environment
function light() {
  var light = this.patcher.newdefault(0,0,'light');
}

function bfg() {
  var bfg = this.patcher.newdefault(0,0,'bfg');
}

function grain() {
  var grain = this.patcher.newdefault(0,0,'grain');
}

function opz() {
  var opz = this.patcher.newdefault(0,0,'opz');
}

function osc() {
  var osc = this.patcher.newdefault(0,0,'osc');
}

function model15() {
  var model15 = this.patcher.newdefault(0,0,'model15');
}

function specs() {
  var specs = this.patcher.newdefault(0,0,'specs');
}

function som1() {
  var som1 = this.patcher.newdefault(0,0,'som1');
}

function shell() {
  var shell = this.patcher.newdefault(0,0,'shell');
}
