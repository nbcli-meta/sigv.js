{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 1,
			"revision" : 11,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 734.0, 118.0, 594.0, 209.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Lato",
		"gridonopen" : 1,
		"gridsize" : [ 10.0, 10.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 2,
		"toptoolbarpinned" : 2,
		"righttoolbarpinned" : 2,
		"bottomtoolbarpinned" : 2,
		"toolbars_unpinned_last_save" : 15,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "midnight",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"bgcolor" : [ 0.305882352941176, 0.337254901960784, 0.345098039215686, 1.0 ],
					"color" : [ 0.305882352941176, 0.337254901960784, 0.345098039215686, 1.0 ],
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 52.0, 162.0, 47.0, 23.0 ],
					"text" : "pattern"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 261.5, 86.0, 59.0, 21.0 ],
					"text" : "analysis"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 388.5, 86.0, 73.5, 21.0 ],
					"text" : "Synthesis B."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 114.5, 86.0, 79.0, 21.0 ],
					"text" : "Synthesis A."
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.305882352941176, 0.317647058823529, 0.333333333333333, 1.0 ],
					"color" : [ 0.305882352941176, 0.317647058823529, 0.333333333333333, 1.0 ],
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 505.0, 162.0, 52.0, 23.0 ],
					"text" : "modular"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 216.0, 17.0, 150.0, 21.0 ],
					"text" : "modalities",
					"textjustification" : 1
				}

			}
, 			{
				"box" : 				{
					"comment" : "pcontrol",
					"id" : "obj-4",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 276.0, 162.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.215686274509804, 0.666666666666667, 0.866666666666667, 1.0 ],
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 255.5, 129.0, 71.0, 23.0 ],
					"text" : "atmosphere",
					"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 377.0, 46.0, 98.0, 23.0 ],
					"text" : "shape.succession"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 238.0, 46.0, 106.0, 23.0 ],
					"text" : "sensorial.envelope"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 114.0, 46.0, 76.0, 23.0 ],
					"text" : "amplification"
				}

			}
 ],
		"lines" : [  ],
		"dependency_cache" : [ 			{
				"name" : "amplification.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "sensorial.envelope.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "shape.succession.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "atmosphere.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/atmosphere",
				"patcherrelativepath" : "./atmosphere",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "troposhere.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/atmosphere",
				"patcherrelativepath" : "./atmosphere",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "stratosphere.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/atmosphere",
				"patcherrelativepath" : "./atmosphere",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mesosphere.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/atmosphere",
				"patcherrelativepath" : "./atmosphere",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "thermosphere.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/atmosphere",
				"patcherrelativepath" : "./atmosphere",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "exosphere.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/atmosphere",
				"patcherrelativepath" : "./atmosphere",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "modular.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/modular",
				"patcherrelativepath" : "./modular",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "source.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/modular",
				"patcherrelativepath" : "./modular",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "processor.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/modular",
				"patcherrelativepath" : "./modular",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "compound.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/modular",
				"patcherrelativepath" : "./modular",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "pattern.maxpat",
				"bootpath" : "~/sigv.js/sigv-js-sys/material energies/pattern",
				"patcherrelativepath" : "./pattern",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "AudioStatus_Menu",
				"default" : 				{
					"bgfillcolor" : 					{
						"type" : "color",
						"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
						"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
						"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}

				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "Jamoma_highlighted_orange",
				"default" : 				{
					"accentcolor" : [ 1.0, 0.5, 0.0, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "dvnt2",
				"default" : 				{
					"elementcolor" : [ 0.681193, 0.750541, 0.758255, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "dvnt3",
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "jpatcher001",
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrDict",
				"default" : 				{
					"accentcolor" : [ 0.011765, 0.396078, 0.752941, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrInit",
				"default" : 				{
					"accentcolor" : [ 0.0, 1.0, 0.501961, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrLiveObject",
				"default" : 				{
					"accentcolor" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrPattr",
				"default" : 				{
					"accentcolor" : [ 0.945098, 0.913725, 0.407843, 1.0 ],
					"fontsize" : [ 12.0 ],
					"fontname" : [ "Arial" ],
					"fontface" : [ 0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrReceive",
				"default" : 				{
					"accentcolor" : [ 0.701961, 0.415686, 0.886275, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrSend",
				"default" : 				{
					"accentcolor" : [ 0.466667, 0.254902, 0.607843, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrSubpatch",
				"default" : 				{
					"accentcolor" : [ 0.082353, 0.431373, 0.411765, 1.0 ],
					"fontsize" : [ 12.0 ],
					"fontname" : [ "Arial" ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "myrValue",
				"default" : 				{
					"accentcolor" : [ 0.317647, 0.654902, 0.976471, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjBlue-1",
				"default" : 				{
					"accentcolor" : [ 0.317647, 0.654902, 0.976471, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjGreen-1",
				"default" : 				{
					"accentcolor" : [ 0.0, 0.533333, 0.168627, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "newobjYellow-1",
				"default" : 				{
					"accentcolor" : [ 0.82517, 0.78181, 0.059545, 1.0 ],
					"fontsize" : [ 12.059008 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ],
		"default_bgcolor" : [ 0.12156862745098, 0.125490196078431, 0.129411764705882, 1.0 ],
		"accentcolor" : [ 0.164705882352941, 0.172549019607843, 0.180392156862745, 1.0 ],
		"selectioncolor" : [ 0.215686274509804, 0.666666666666667, 0.866666666666667, 1.0 ],
		"textcolor" : [ 0.67843137254902, 0.713725490196078, 0.76078431372549, 1.0 ],
		"textcolor_inverse" : [ 0.67843137254902, 0.713725490196078, 0.76078431372549, 1.0 ],
		"patchlinecolor" : [ 0.215686274509804, 0.666666666666667, 0.866666666666667, 1.0 ],
		"bgcolor" : [ 0.164705882352941, 0.172549019607843, 0.180392156862745, 1.0 ],
		"editing_bgcolor" : [ 0.211764705882353, 0.219607843137255, 0.231372549019608, 1.0 ]
	}

}
