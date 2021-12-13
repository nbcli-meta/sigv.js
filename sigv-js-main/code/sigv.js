
// Generate Patch
var rcoda = this.patcher.newdefault(99,165.5,'r','coda');
var jsrt = this.patcher.newdefault(99,194.5,'route','js');
this.patcher.connect(rcoda,0,jsrt,0);
this.patcher.connect(jsrt,0,this.box,0)
var jstrig = this.patcher.newdefault(99,257.5,'t','l');
var scoda = this.patcher.newdefault(99,304.5,'s','coda');
this.patcher.connect(this.box,0,jstrig,0);
this.patcher.connect(jstrig,0,scoda,0);

var cmd = this.patcher.newdefault(27.5,83,'textedit','@presentation',1,'@lines',1,'@keymode',1,'@tabmode',0,'@wordwrap',0,'@patching_rect',27.5,83.,248.,24.,'@presentation_rect',6.,8.,248.,24.,'@bordercolor',0,0,0,0);
var trig = this.patcher.newdefault(160.5,27,'trigger','select','clear');
this.patcher.connect(cmd,0,trig,0);

var txtrt = this.patcher.newdefault(208,164.,'route','text');
var bangrt = this.patcher.newdefault(208,194.5,'route','bang');
this.patcher.connect(bangrt,0,cmd,0);
this.patcher.connect(cmd,0,txtrt,0);
this.patcher.connect(txtrt,0,bangrt,0);
this.patcher.connect(bangrt,1,trig,0);
this.patcher.connect(bangrt,1,scoda,0);

var saudio = this.patcher.newdefault(208,116,'receive~','audio','@patching_rect',208.,116.,100.,23.);
var meter = this.patcher.newdefault(185.5,113.,'live.meter~','@presentation',1,'@orientation',1,'@presentation_rect',150.,37.,100.,5.,'@patching_rect',185.5,113.,90.,5.);

this.patcher.connect(saudio,0,meter,0);

// init monde
function wrld(param) {

  if (param == 2) {
    var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',1,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(monde,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var movie = this.patcher.newdefault(0,0,'jit.movie','@output_texture',0);
    this.patcher.connect(movie,0,monde,0);
    var movie_route = this.patcher.newdefault(0,0,'route','movie');
    this.patcher.connect(movie_route,0,movie,0);
    var rcoda = this.patcher.newdefault(0,0,'r','coda');
    this.patcher.connect(rcoda,0,movie_route,0);
    var grid = this.patcher.newdefault(0,0,'grid');
    var bg = this.patcher.newdefault(0,0,'bg');
    var aio = this.patcher.newdefault(0,0,'aio');
    var wave = this.patcher.newdefault(0,0,'wave');
    var model = this.patcher.newdefault(0,0,'model');
    var proc = this.patcher.newdefault(0,0,'proc');
    var light = this.patcher.newdefault(0,0,'light');
    var tilde = this.patcher.newdefault(0,0,'tilde');
    var bfg = this.patcher.newdefault(0,0,'bfg');
    var terminal = this.patcher.newdefault(0,0,'terminal');
  }

  if (param == 1) {
    var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',1,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(monde,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var rcoda = this.patcher.newdefault(0,0,'r','coda');
    this.patcher.connect()
  }

  if (param == 0) {
    var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',0,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(monde,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
  }

  if (param == 3) {
    var monde = this.patcher.newdefault(0,0,'jit.world','monde','@visible',1,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(monde,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var camera_route = this.patcher.newdefault(0,0,'route','camera');
    this.patcher.connect(camera_route,0,camera,0);
    var rcoda = this.patcher.newdefault(0,0,'r','coda');
    this.patcher.connect(rcoda,0,camera_route,0);
    var movie = this.patcher.newdefault(0,0,'jit.movie','@output_texture',0);
    this.patcher.connect(movie,0,monde,0);
    var movie_route = this.patcher.newdefault(0,0,'route','movie');
    this.patcher.connect(movie_route,0,movie,0);
    this.patcher.connect(rcoda,0,movie_route,0);
    var grid = this.patcher.newdefault(0,0,'grid');
    var bg = this.patcher.newdefault(0,0,'bg');
    var aio = this.patcher.newdefault(0,0,'aio');
    var wave = this.patcher.newdefault(0,0,'wave');
    var model = this.patcher.newdefault(0,0,'model');
    var proc = this.patcher.newdefault(0,0,'proc');
    var light = this.patcher.newdefault(0,0,'light');
    var tilde = this.patcher.newdefault(0,0,'tilde');
    var bfg = this.patcher.newdefault(0,0,'bfg');
    var terminal = this.patcher.newdefault(0,0,'terminal');

    var gw = this.patcher.newdefault(0,0,'gibberwocky','@signals',1);
    var gwrt = this.patcher.newdefault(0,0,'route','gibwo');
    var scoda = this.patcher.newdefault(0,0,'s','coda');
    this.patcher.connect(rcoda,0,gwrt,0);
    this.patcher.connect(gwrt,0,gw,1);
    this.patcher.connect(gw,0,scoda,0);
    outlet(0,'gibwo',1);
  }
}

function gibwo() {
  var gw = this.patcher.newdefault(0,0,'gibberwocky','@signals',1);
  var gwrt = this.patcher.newdefault(0,0,'route','gibwo');
  var scoda = this.patcher.newdefault(0,0,'s','coda');
  this.patcher.connect(rcoda,0,gwrt,0);
  this.patcher.connect(gwrt,0,gw,1);
  this.patcher.connect(gw,0,scoda,0);
  outlet(0,'gibwo',1);
}

// init primitives
function aio() {
  var aio = this.patcher.newdefault(0,0,'aio');
}

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

function nurbs() {
  var nurbs = this.patcher.newdefault(0,0,'nurbs');
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

function burkeshaw() {
  var burkeshaw = this.patcher.newdefault(0,0,'burke-shaw-system');
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

function lttp() {
  var lttp = this.patcher.newdefault(0,0,'lttp');
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

function orca() {
  var orca = this.patcher.newdefault(0,0,'orca');
}

function markov() {
  var markov = this.patcher.newdefault(0,0,'markov');
}

function cv() {
  var cv = this.patcher.newdefault(0,0,'cv');
  var pco = this.patcher.newdefault(0,0,'pcontrol');
  this.patcher.connect(pco,0,cv,0);
  var rcoda = this.patcher.newdefault(0,0,'r','coda');
  var ctrl1 = this.patcher.newdefault(0,0,'route','ctrl');
  this.patcher.connect(rcoda,0,ctrl1,0);
  this.patcher.connect(ctrl1,0,pco,0);
}

function count() {
  var count = this.patcher.newdefault(0,0,'count');
}

// sigv composition modes
function auto() {
  wrld(2);
  gridObject();
  light();
  light();
}

function demo() {
  wrld(2);
  gridObject();
  light();
  light();
  outlet(0,'light','enable',0);
  outlet(0,'grid','gs1','shape','opencylinder');
  outlet(0,'grid','gs2','shape','sphere');
  outlet(0,'grid','^',.7,10000);
  bfgObject();
  outlet(0,'grid','material','diffuse_texture','grid');
  outlet(0,'grid','material','normals_texture');
  outlet(0,'grid','material','emission_texture','grid');
  outlet(0,'grid','material','heightmap_texture','bfg');
  outlet(0,'grid','mesh','scale',0.45);
  // specs();
  outlet(0,'aio','peak',0.32);
  outlet(0,'aio','peak','line',2);
  outlet(0,'grid','fpic','bang');
  outlet(0,'grid','mesh','scale',9);
  outlet(0,'grid','anim','turn',0,0,-.1);
  outlet(0,'grid','mesh','rotatexyz',90,0,0);
}

function osm() {
  gridObject();
  outlet(0,'light','enable',0);
  outlet(0,'grid','gs1','shape','opencylinder');
  outlet(0,'grid','gs2','shape','sphere');
  outlet(0,'grid','^',.7,10000);
  bfgObject();
  outlet(0,'grid','mesh','poly_mode',0,0);
  outlet(0,'grid','material','diffuse_texture','grid');
  outlet(0,'grid','material','normals_texture');
  outlet(0,'grid','material','emission_texture','grid');
  outlet(0,'grid','material','heightmap_texture','bfg');
  outlet(0,'grid','mesh','scale',0.45);
  // specs();
  outlet(0,'aio','peak',0.32);
  outlet(0,'aio','peak','line',2);
  outlet(0,'grid','fpic','read','/Users/magfoto/Desktop/[ M ] Studio/material/osmosis material/IMG_4892.JPG');
  outlet(0,'grid','fpic','bang');
  outlet(0,'grid','mesh','scale',9);
  outlet(0,'grid','anim','turn',0,0,-.025);
  outlet(0,'grid','mesh','rotatexyz',90,144.46,0);
}

function third() {
  wrld(2);
  outlet(0,'model','enable',0);
  outlet(0,'model','^','enable',1);
  outlet(0,'model','^','draw_mode','tri_strip');
  outlet(0,'model','^','material','emission_texture','mtex');
  outlet(0,'model','^','read');
}

function tvstart() {
  wrld(2);
  bgObject();
  outlet(0,'bg','fpic','read','colorbars.png');
  outlet(0,'bg','fpic','bang');
  outlet(0,'bg','material','emission_texture','bg');
  outlet(0,'bg','material','diffuse_texture','bg');
}

function spinny() {
  wrld(2);
  outlet(0,'grid','enable',1);
  outlet(0,'grid','gs2','shape','sphere');
  outlet(0,'grid','anim','turn',0,1,0);
  outlet(0,'grid','^',1,10000);
  outlet(0,'js','light');
}

function krypton() {
  // wrld(2);
  gridObject();
  outlet(0,'grid','mesh','draw_mode','polygon');
  outlet(0,'grid','gs2','shape','opencylinder');
  outlet(0,'grid','gs1','shape','opencube');
  outlet(0,'grid','^',1,3000);
  outlet(0,'grid','gs1','shape','cone');
  outlet(0,'grid','material','diffuse_texture','bfg');
  outlet(0,'bfg','basis','noise.simplex');
  outlet(0,'bfg','origin',4.,2.,0.);
  outlet(0,'bfg','offset',0.1,0.1,0.1);
  outlet(0,'bfg','scale',100.);
  outlet(0,'bfg','weight',0.12);
  outlet(0,'grid','anim','turn',0,1,0);
  outlet(0,'grid','^',1,10000);
}

function lorenz1() {
  var lorenz = this.patcher.newdefault(0,0,'lorenz-system');
  wrld(2);
  lorenzObject();
}

function burke1() {
  var burkeshaw = this.patcher.newdefault(0,0,'burke-shaw-system');
  wrld(2);
  burkeObject();
}

function osci() {
  wrld(2);
  light();
  light();
  light();
  quadrant();
}

function quadrant() {
  outlet(0,'grid','material','mat_emission',.1,.1,.1);
  outlet(0,'grid','material','mat_diffuse',.2,.2,.2, .5);
  outlet(0,'grid','mesh','enable',1);
  outlet(0,'grid','mesh','draw_mode','quad_grid');
  outlet(0,'grid','mesh','poly_mode',1,1);
  outlet(0,'aio','activate',2);
  outlet(0,'aio','sig',1);
  outlet(0,'aio','sigx',1);
  outlet(0,'aio','sigy',1);
  outlet(0,'wave','mesh','enable',1);
  outlet(0,'wave','para','sphere');
  outlet(0,'wave','para','^',.4,2000);
  outlet(0,'wave','mesh','scale',0.1);
  outlet(0,'wave','material','mat_emission',.35,.35,.35);

}

// sigv objects

function gridObject() {
  outlet(0,'grid','mesh','enable',1);
  outlet(0,'grid','anim','turn',0,-1,0);
  outlet(0,'grid','material','mat_emission',.2,.2,.2);
}

function bfgObject() {
  outlet(0,'bfg','basis','noise.simplex');
  outlet(0,'bfg','origin',0.,0.,0.);
  outlet(0,'bfg','offset',0.1,0.1,0.1);
  outlet(0,'bfg','scale',0.75);
  outlet(0,'bfg','weight',0.32);
}

function bgObject() {
  outlet(0,'bg','mesh','enable',1);
  outlet(0,'bg','mesh','scale',3.25,2.25,1,'position',0,0,0);
  outlet(0,'bg','material','mat_diffuse',.5,.5,.5,1.);
  outlet(0,'bg','material','mat_emission',.1,.1,.1);
}

function lorenzObject() {
  outlet(0,'lorenz','sample',1);
  outlet(0,'lorenz','mesh','scale',0.5);
  outlet(0,'lorenz','mesh','rotatexyz',0,0,-57);
  outlet(0,'lorenz','^',10.,28.,2.667,0.007);
}

function burkeObject() {
  outlet(0,'burkeshaw','sample',1);
  outlet(0,'burkeshaw','mesh','scale',0.5);
  outlet(0,'burkeshaw','mesh','rotatexyz',0,0,-57);
  outlet(0,'burkeshaw','^',10.,4.272,0.01);
}

// sigv utils
function del(o) {
  this.patcher.remove(o);
}
