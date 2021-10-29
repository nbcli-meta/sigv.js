
// sigv composition modes
function auto() {
  wrld(2);
  gridObject();
  outlet(0,'light','gs','enable',1);
  outlet(0,'light','gs','enable',1);
  outlet(0,'light','gs','enable',1);
}

function tvstart() {
  wrld(2);
  bgObject();
  outlet(0,'bg','fpic','read','colorbars.png');
  outlet(0,'bg','fpic','bang');
  outlet(0,'bg','material','emission_texture','pic');
  outlet(0,'bg','material','diffuse_texture','pic');
}

function spinny() {
  wrld(2);
  outlet(0,'grid','enable',1);
  outlet(0,'grid','gs2','shape','sphere');
  outlet(0,'grid','anim','turn',0,1,0);
  outlet(0,'grid','^',1,10000);
}

function krypton() {
  wrld(2);
  gridObject();
  outlet(0,'grid','draw_mode','polygon');
  outlet(0,'grid','gs2','shape','opencylinder');
  outlet(0,'grid','gs1','shape','opencube');
  outlet(0,'grid','^',1,3000);
  outlet(0,'grid','gs1','shape','cone');
  bfgObject();
  materialObject();
  outlet(0,'bfg','basis','noise.voronoi');
  outlet(0,'bfg','origin',4.,2.,0.);
  outlet(0,'bfg','offset',0.1,0.1,0.1);
  outlet(0,'bfg','scale',100.);
  outlet(0,'bfg','weight',0.12);
  outlet(0,'grid','anim','turn',0,1,0);
  outlet(0,'grid','^',1,10000);
}

// sigv objects

function gridObject() {
  outlet(0,'grid','enable',1);
  outlet(0,'grid','anim','turn',0,-1,0);
  outlet(0,'grid','material','mat_emission',.1,.1,.1);
}

function bfgObject() {
  outlet(0,'bfg','basis','noise.simplex');
  outlet(0,'bfg','origin',0.,0.,0.);
  outlet(0,'bfg','offset',0.1,0.1,0.1);
  outlet(0,'bfg','scale',0.75);
  outlet(0,'bfg','weight',0.32);
}

function materialObject() {
  outlet(0,'grid','material','heightmap_texture','tex0');
  outlet(0,'grid','material','emission_texture','tex0');
  outlet(0,'grid','material','diffuse_texture','tex0');
  outlet(0,'grid','material','normals_texture','tex0');
}

function bgObject() {
  outlet(0,'bg','enable',1);
  outlet(0,'bg','scale',3.25,2.25,1,'position',0,0,0);
  outlet(0,'bg','material','mat_diffuse',.5,.5,.5,1.);
  outlet(0,'bg','material','mat_emission',.1,.1,.1);
}

// sigv utils
function del(o) {
  var del = this.patcher.remove(o);
}


// init monde
function wrld(param) {

  if (param == 2) {
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
    var grid = this.patcher.newdefault(0,0,'grid');
    var bg = this.patcher.newdefault(0,0,'bg');
    var wave = this.patcher.newdefault(0,0,'wave');
    var model = this.patcher.newdefault(0,0,'model');
    var proc = this.patcher.newdefault(0,0,'proc');
    var light = this.patcher.newdefault(0,0,'light');
    var tilde = this.patcher.newdefault(0,0,'tilde');
    var bfg = this.patcher.newdefault(0,0,'bfg');
    var terminal = this.patcher.newdefault(0,0,'terminal');
  }

  if (param == 1) {
    var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',1,'@enable',1,'@size',1024,550,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(monde,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var bg = this.patcher.newdefault(0,0,'bg');
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

function bg() {
  var bg = this.patcher.newdefault(0,0,'bg');
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

function grain() {
  var grain = this.patcher.newdefault(0,0,'grain');
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

function terminal() {
  var terminal = this.patcher.newdefault(0,0,'terminal');
}
