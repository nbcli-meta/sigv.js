
// Generate Patch
var rcoda = this.patcher.newdefault(99,165.5,'r','coda');
var jsrt = this.patcher.newdefault(99,194.5,'route','js');
this.patcher.connect(rcoda,0,jsrt,0);
this.patcher.connect(jsrt,0,this.box,0)
var jstrig = this.patcher.newdefault(99,257.5,'t','l');
var scoda = this.patcher.newdefault(99,304.5,'s','coda');
this.patcher.connect(this.box,0,jstrig,0);
this.patcher.connect(jstrig,0,scoda,0);

var cmd = this.patcher.newdefault(27.5,83,'textedit','@hidden',1,'@presentation',1,'@lines',1,'@keymode',1,'@tabmode',0,'@wordwrap',0,'@patching_rect',27.5,83.,248.,24.,'@presentation_rect',6.,8.,248.,24.,'@bordercolor',0,0,0,0);
var trig = this.patcher.newdefault(160.5,27,'trigger','select','clear');
this.patcher.connect(cmd,0,trig,0);

var txtrt = this.patcher.newdefault(208,164.,'route','text');
var bangrt = this.patcher.newdefault(208,194.5,'route','bang');
this.patcher.connect(bangrt,0,cmd,0);
this.patcher.connect(cmd,0,txtrt,0);
this.patcher.connect(txtrt,0,bangrt,0);
this.patcher.connect(bangrt,1,trig,0);
this.patcher.connect(bangrt,1,scoda,0);

// var saudio = this.patcher.newdefault(208,116,'receive~','audio','@patching_rect',208.,116.,100.,23.);
// After updating Max to 8.3 receive~ error on load ' patching_rect is not a valid attribute argument'

var saudio = this.patcher.newdefault(208,116,'receive~','audio');
var meter = this.patcher.newdefault(185.5,113.,'live.meter~','@presentation',1,'@orientation',1,'@presentation_rect',150.,37.,100.,5.,'@patching_rect',185.5,113.,90.,5.);

this.patcher.connect(saudio,0,meter,0);


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
  var aio = this.patcher.newdefault(99,369,'aio');
}

function lfo() {
  var lfo = this.patcher.newdefault(0,0,'lfo');
}

function synth() {
  var synth = this.patcher.newdefault(0,0,'synth');
}

function geo() {
  var geo = this.patcher.newdefault(204,344,'geo');
  geo.varname = "geo";
}

function plato() {
  var plato = this.patcher.newdefault(99,454.5,'plato');
  plato.varname = "plato";
}

function model() {
  var model = this.patcher.newdefault(204,394,'model');
  model.varname = "model";
}

function tex0() {
  var tex0 = this.patcher.newdefault(0,0,'tex0');
  tex0.varname = "tex0";
}

function proc() {
  var proc = this.patcher.newdefault(204,419,'proc');
  proc.varname = "proc";
}

function terra() {
  var terra = this.patcher.newdefault(0,0,'terra');
  terra.varname = "terra";
}

function sky() {
  var sky = this.patcher.newdefault(0,0,'sky');
  sky.varname = "sky";
}

function nurbs() {
  var nurbs = this.patcher.newdefault(0,0,'nurbs');
}

function graph() {
  var graph = this.patcher.newdefault(0,0,'graph');
  graph.varname = "graph";
}

function sketch() {
  var sketch = this.patcher.newdefault(0,0,'sketch');
  sketch.varname = "sketch";
}

// init dynamics
function lorenz() {
  var lorenz = this.patcher.newdefault(0,0,'lorenz-system');
  lorenz.varname = "lorenz";
}

function burkeshaw() {
  var burkeshaw = this.patcher.newdefault(0,0,'burke-shaw-system');
  burkeshaw.varname = "burkeshaw";
}

// init systems environment
function light() {
  var light = this.patcher.newdefault(204,444,'light');
  light.varname = "light";
}

function tilde() {
  var tilde = this.patcher.newdefault(99,394,'tilde');
  tilde.varname = "tilde";
}

function bfg() {
  var bfg = this.patcher.newdefault(204,369,'bfg');
  bfg.varname = "bfg";
}

function grain() {
  var grain = this.patcher.newdefault(0,0,'grain');
  grain.varname = "grain";
}

function midi() {
  var midi = this.patcher.newdefault(0,0,'midi');
  midi.varname = "midi";
}

function osc() {
  var osc = this.patcher.newdefault(99,344,'osc');
  osc.varname = "osc";
}

function specs() {
  var specs = this.patcher.newdefault(99,444,'specs');
  specs.varname = "specs";
}

function som() {
  var som = this.patcher.newdefault(0,0,'som');
  som.varname = "som";
}

function terminal() {
  var terminal = this.patcher.newdefault(99,419,'terminal');
  terminal.varname = "terminal";
}

function orca() {
  var orca = this.patcher.newdefault(0,0,'orca');
  orca.varname = "orca";
}

function markov() {
  var markov = this.patcher.newdefault(0,0,'markov');
  markov.varname = "markov";
}

function hydra() {
  var hydra = this.patcher.newdefault(0,0,'hydra');
  var hydrapco = this.patcher.newdefault(0,0,'pcontrol');
  this.patcher.connect(hydrapco,0,cv,0);
  var rcoda = this.patcher.newdefault(0,0,'r','coda');
  var hydractrl1 = this.patcher.newdefault(0,0,'route','hydractrl');
  this.patcher.connect(rcoda,0,hydractrl1,0);
  this.patcher.connect(hydractrl1,0,hydrapco,0);
  this.patcher.connect(hydrapco,0,hydra,0);
  hydra.varname = "hydra";
}

function cv() {
  var cv = this.patcher.newdefault(0,0,'cv');
  var pco = this.patcher.newdefault(0,0,'pcontrol');
  this.patcher.connect(pco,0,cv,0);
  var rcoda = this.patcher.newdefault(0,0,'r','coda');
  var ctrl1 = this.patcher.newdefault(0,0,'route','ctrl');
  this.patcher.connect(rcoda,0,ctrl1,0);
  this.patcher.connect(ctrl1,0,pco,0);
  cv.varname = "cv";
}

function count() {
  var count = this.patcher.newdefault(0,0,'count');
  count.varname = "count";
}

function asl() {
  var asl = this.patcher.newdefault(0,0,'asl');
  asl.varname = "asl";
}

function octet() {
  var octet = this.patcher.newdefault(0,0,'octet');
  octet.varname = "octet";
}

function perc() {
  var perc = this.patcher.newdefault(0,0,'perc');
  perc.varname = "perc";
}

// sigv composition modes
function auto() {
  wrld(2);
  geoObject();
  light();
  light();
}

function demo() {
  wrld(2);
  geoObject();
  light();
  light();
  outlet(0,'light','enable',1);
  outlet(0,'geo','gs1','shape','opencylinder');
  outlet(0,'geo','gs2','shape','sphere');
  outlet(0,'geo','^',.7,10000);
  bfgObject();
  outlet(0,'geo','material','diffuse_texture','bfg');
  outlet(0,'geo','material','normals_texture', 'bfg');
  outlet(0,'geo','material','emission_texture','bfg');
  outlet(0,'geo','material','heightmap_texture','bfg');
  outlet(0,'geo','mesh','scale',0.45);
  // specs();
  outlet(0,'aio','peak',0.32);
  outlet(0,'aio','peak','line',2);
  outlet(0,'geo','mesh','scale',9);
  outlet(0,'geo','anim','turn',0,0,-.1);
  outlet(0,'geo','mesh','rotatexyz',90,0,0);
}

function tvstart() {
  wrld(2);
  outlet(0,'geo','mesh','draw_mode','tri_grid');
  outlet(0,'geo','mesh','scale',3.5,2.25,0);
  outlet(0,'geo','mesh','poly_mode',0,0);
  outlet(0,'fpic','read','colorbars.png');
  outlet(0,'fpic','bang');
  outlet(0,'geo','material','emission_texture','tex0');
  outlet(0,'geo','material','diffuse_texture','tex0');
}

function tub1() {
  outlet(0,'model','enable',0);
  outlet(0,'model','^','enable',1);
  outlet(0,'model','^','material','emission_texture','mtex');
  outlet(0,'model','^','read','Bathtub.dae');
  outlet(0,'model','^','anim','turn',0,.075,0);
}

function tub2() {
  outlet(0,'model','^','anim','scaleto',0.25,0.25,0.25,10);
  outlet(0,'model','^','anim','springto',2.25,-1.15,0);
}

function strange1() {
  wrld(2);
  lorenz1();
}

function lorenz1() {
  var lorenz = this.patcher.newdefault(0,0,'lorenz-system');
  light();
  light();
  light();
  outlet(0,'light','activate',0);
  lorenzObject();
}

function lorenz2() {
  outlet(0,'lorenz','anim','scaleto',1.2,1.2,1.2,10);
  outlet(0,'lorenz','mesh','point_size',1.5);
  outlet(0,'lorenz','material','diffuse_texture','bfg');
  outlet(0,'lorenz','material','emission_texture','bfg');
  outlet(0,'lorenz','material','normals_texture','bfg');
  outlet(0,'lorenz','material','heightmap_texture','bfg');
  outlet(0,'lorenz','material','specular_model','toon');
  outlet(0,'lorenz','material','shininess',20);
  outlet(0,'lorenz','material','mat_specular',0.2,0,0.3);
}

function lorenz3() {
  outlet(0,'aio','activate',2);
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
  outlet(0,'geo','material','mat_emission',.5,.5,.5);
  outlet(0,'geo','mesh','enable',1);
  outlet(0,'geo','mesh','draw_mode','tri_grid');
  outlet(0,'geo','mesh','poly_mode',1,1);
  outlet(0,'aio','activate',2);
  outlet(0,'aio','sig',.1);
  // outlet(0,'aio','sigx',1);
  // outlet(0,'aio','sigy',1);
  outlet(0,'geo','gs1','shape','sphere');
  outlet(0,'geo','aio',1);
  outlet(0,'geo','aio','^',.1,2000);
  outlet(0,'geo','anim','scaleto',0.75,0.75,0.75,10);
  outlet(0,'geo','anim','turn',0,.5,0);
  // outlet(0,'light','enable',0);
}

function quadrant2() {
  outlet(0,'wave','fpic','bang');
  outlet(0,'wave','material','diffuse_texture','wave');
  outlet(0,'wave','material','emission_texture','wave');
  outlet(0,'wave','material','normals_texture','wave');
  outlet(0,'light','activate',0);
  outlet(0,'wave','material','mat_emission',.1,.1,.1);
  outlet(0,'geo','material','mat_diffuse',.2,.2,.2, .5);
  outlet(0,'geo','mesh','enable',1);
  outlet(0,'geo','mesh','draw_mode','quad_geo');
  outlet(0,'geo','mesh','poly_mode',1,1);
  outlet(0,'aio','activate',2);
  outlet(0,'wave','anim','turn',0,0,.5);
  outlet(0,'wave','mesh','enable',1);
  outlet(0,'wave','para','sphere');
  outlet(0,'wave','aio','^',.4,2000);
  outlet(0,'wave','mesh','scale',0.1);
  outlet(0,'wave','material','mat_emission',.35,.35,.35);

}

// sigv objects

function geoObject() {
  outlet(0,'geo','mesh','enable',1);
  outlet(0,'geo','anim','turn',0,-1,0);
  outlet(0,'geo','material','mat_emission',.2,.2,.2);
}

function bfgObject() {
  outlet(0,'bfg','basis','noise.simplex');
  outlet(0,'bfg','origin',0.,0.,0.);
  outlet(0,'bfg','offset',0.1,0.1,0.1);
  outlet(0,'bfg','scale',0.75);
  outlet(0,'bfg','weight',0.32);
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

osc();


// init sigv (world) and monde (sub-world)
function wrld(param) {

  if (param == 2) {
    var sigv = this.patcher.newdefault(372,239,'jit.world','sigv','@visible',1,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    sigv.patching_rect = 372.,239.,329.,52.;
    var metro = this.patcher.newdefault(527,304,'send','metro');
    this.patcher.connect(sigv,1,metro,0);
    var camera = this.patcher.newdefault(544,344,'jit.gl.camera','@position',0,0,4);
    var movie = this.patcher.newdefault(500,198,'jit.movie','@output_texture',0);
    this.patcher.connect(movie,0,sigv,0);
    var movie_route = this.patcher.newdefault(500,169,'route','movie');
    this.patcher.connect(movie_route,0,movie,0);
    var rcoda = this.patcher.newdefault(500,133,'r','coda');
    this.patcher.connect(rcoda,0,movie_route,0);
    var monde = this.patcher.newdefault(372.,344.,'jit.gl.node','sigv','@name','monde');
    this.geo();
    this.aio();
    this.model();
    this.proc();
    this.light();
    this.tilde();
    this.bfg();
    this.terminal();
    this.tex0();

    outlet(0,'light','enable',1);
    outlet(0,'light','activate',0);
    outlet(0,'geo','mesh','enable',0);
  }

  if (param == 1) {
    var sigv = this.patcher.newdefault(0,0,'jit.world','sigv','@visible',1,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(sigv,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var rcoda = this.patcher.newdefault(0,0,'r','coda');
    var monde = this.patcher.newdefault(275.,304.,'jit.gl.node','sigv','@name','monde');
  }

  if (param == 0) {
    var sigv = this.patcher.newdefault(0,0,'jit.world','sigv','@visible',0,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(sigv,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var monde = this.patcher.newdefault(275.,304.,'jit.gl.node','sigv','@name','monde');
  }

  if (param == 3) {
    var sigv = this.patcher.newdefault(0,0,'jit.world','sigv','@visible',1,'@enable',1,'@size',1024,575,'@dim',1920,1080,'@erase_color',0,0,0,1,'@fsaa',1);
    var metro = this.patcher.newdefault(0,0,'send','metro');
    this.patcher.connect(sigv,1,metro,0);
    var camera = this.patcher.newdefault(0,0,'jit.gl.camera','@position',0,0,4);
    var camera_route = this.patcher.newdefault(0,0,'route','camera');
    this.patcher.connect(camera_route,0,camera,0);
    var rcoda = this.patcher.newdefault(0,0,'r','coda');
    this.patcher.connect(rcoda,0,camera_route,0);
    var movie = this.patcher.newdefault(0,0,'jit.movie','@output_texture',0);
    this.patcher.connect(movie,0,sigv,0);
    var movie_route = this.patcher.newdefault(0,0,'route','movie');
    this.patcher.connect(movie_route,0,movie,0);
    this.patcher.connect(rcoda,0,movie_route,0);
    var monde = this.patcher.newdefault(275.,304.,'jit.gl.node','sigv','@name','monde');
    var geo = this.patcher.newdefault(99,404.5,'geo');
    var aio = this.patcher.newdefault(0,0,'aio');
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

