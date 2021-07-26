
// init monde
function wrld(param) {

  if (param == 1) {
    var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',1,'@enable',1,'@size',1024,550,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(monde,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var movie = this.patcher.newdefault(0,0,'jit.movie','@output_texture',1);
    this.patcher.connect(movie,0,monde,0);
    var movie_route = this.patcher.newdefault(0,0,'route','movie');
    this.patcher.connect(movie_route,0,movie,0);
    var rcoda = this.patcher.newdefault(0,0,'r','coda');
    this.patcher.connect(rcoda,0,movie_route,0);
  }

  if (param == 0) {
    var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',0,'@enable',1,'@size',1024,550,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(monde,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
  }
}

// init primitives
function wave() {
  var wave = this.patcher.newdefault(0,0,'wave');
}

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
  var lorenz = this.patcher.newdefault(0,0,'lorenz-system');
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

function tilde() {
  var tilde = this.patcher.newdefault(0,0,'tilde');
}

function bfg() {
  var bfg = this.patcher.newdefault(0,0,'bfg');
}

function orca() {
  var orca = this.patcher.newdefault(0,0,'orca');
}

function seq() {
  var seq = this.patcher.newdefault(0,0,'seq');
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

function midi() {
  var midi = this.patcher.newdefault(0,0,'midi');
}

function specs() {
  var specs = this.patcher.newdefault(0,0,'specs');
}

function som() {
  var so = this.patcher.newdefault(0,0,'som');
}

function shell() {
  var shell = this.patcher.newdefault(0,0,'shell');
}

// Composites

function dotgrid() {
  var dotgrid = this.patcher.newdefault(0,0,'dot-grid');
}

// Frameworks

function material_energies() {
  var material_energies = this.patcher.newdefault(0,0,'material_energies');
  var pcontrol = this.patcher.newdefault(0,0,'pcontrol');
  this.patcher.connect(pcontrol,0,material_energies,0);
  pcontrol.open();
}
