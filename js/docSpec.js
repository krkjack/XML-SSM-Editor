function docSpecInit(editorDivId) {
    var docSpec = {
        allowModeSwitching: true,
        allowLayby: false,
        laybyMessage: "This is your temporary lay-by for document fragments. You can drag and drop any XML elements here.",
        onchange: function () {
            console.log("I been changed now!")
        },
        validate: function (obj) {
            console.log("I be validatin' now!")
        },
        elements: {
            "ssm": {
                menu: [
					{
                        caption: "Append an <Api>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<Api/>"
                    },
					{
                        caption: "Append an <SystemElement>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<SystemElement/>"
					}			
                ],
				attributes: {
                    "xmlns": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @xmlns",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    }
                }
            },
			"Api": {
                menu: [{
                        caption: "Add @label=\"base-url\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "base-url",
                            value: "http://192.168.1.100:8080"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("base-url");
                        }
                    }, {
                        caption: "Delete this <Api>",
                        action: Xonomy.deleteElement
				}
                ],
                canDropTo: ["ssm"],
                attributes: {
                    "base-url": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @base-url",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    }
                }
            },
            "SystemElement": {
                backgroundColour: "#ccffff",
                menu: [{
                        caption: "Add @space_sys_obj_name=\"obj_name\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "space_sys_obj_name",
                            value: "obj_name"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("space_sys_obj_name");
                        }
                    },
                    {
                        caption:"Add @sys_elmt_absolute_name=\"absolute_name\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "sys_elmt_absolute_name",
                            value: "absolute_name"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("sys_elmt_absolute_name");
                        }
                    },
					{
                        caption: "Append an <Activity>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<Activity/>"
					},
					{
                        caption: "Append a <ReportingData>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<ReportingData/>"
					},	
					{
                        caption: "Append an <Event>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<Event/>"
					},					
					   {
                        caption: "New <SystemElement> before this",
                        action: Xonomy.newElementBefore,
                        actionParameter: "<SystemElement/>"
                    }, {
                        caption: "New <SystemElement> after this",
                        action: Xonomy.newElementAfter,
                        actionParameter: "<SystemElement/>"
                    },
                    {
                        caption: "Delete this <SystemElement>",
                        action: Xonomy.deleteElement
                    }
                ],
                canDropTo: ["ssm", "SystemElement"],
                attributes: {
                    "space_sys_obj_name": {
                        asker: Xonomy.askString,
                        required: true
                    },
                    "sys_elmt_absolute_name": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @sys_elmt_absolute_name",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    }
                }
            },
            "Activity": {
                backgroundColour: "#f3f5a3",
                menu: [{
                        caption: "Add @space_sys_obj_name=\"obj_name\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "space_sys_obj_name",
                            value: "name"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("space_sys_obj_name");
                        }
                    },
                    {
                        caption: "Add @act_descr=\"descr\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "act_descr",
                            value: "descr"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("act_descr");
                        }
                    },
                    {
                        caption: "Add @act_version=\"1\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "act_version",
                            value: "1"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("act_version");
                        }
                    },
                    {
                        caption: "Append an <act_arg>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<act_arg/>"
                    },
                    {
                        caption: "Delete this <Activity>",
                        action: Xonomy.deleteElement
                    }
                ],
                    canDropTo: ["SystemElement"],
                    attributes: {
                        "space_sys_obj_name": {
                            asker: Xonomy.askString,
                            menu: [{
                                    caption: "Delete this @space_sys_obj_name",
                                    action: Xonomy.deleteAttribute
                                }
                            ]
                        },
                        "act_descr": {
                            asker: Xonomy.askString,
                            menu: [{
                                    caption: "Delete this @act_descr",
                                    action: Xonomy.deleteAttribute
                                }
                            ]
                        },
                        "act_version": {
                            asker: Xonomy.askInt,
                            menu: [{
                                    caption: "Delete this @act_version",
                                    action: Xonomy.deleteAttribute
                                }
                            ]
                        }
                    }
                },
                "act_arg": {
                    menu: [{
                            caption: "Add @space_sys_obj_name=\"obj_name\"",
                            action: Xonomy.newAttribute,
                            actionParameter: {
                                name: "space_sys_obj_name",
                                value: "name"
                            },
                            hideIf: function (jsElement) {
                                return jsElement.hasAttribute("space_sys_obj_name");
                            }
                        },
                        {
                            caption: "Add @act_arg_descr=\"descr\"",
                            action: Xonomy.newAttribute,
                            actionParameter: {
                                name: "act_arg_descr",
                                value: "descr"
                            },
                            hideIf: function (jsElement) {
                                return jsElement.hasAttribute("act_arg_descr");
                            },

                        },
                        {
                            caption: "Delete this <act_arg>",
                            action: Xonomy.deleteElement
                        } 
                    ],
                        canDropTo: ["Activity"],
                        attributes: {
                            "space_sys_obj_name": {
                                asker: Xonomy.askString,
                                menu: [{
                                        caption: "Delete this @space_sys_obj_name",
                                        action: Xonomy.deleteAttribute
                                    }
                                ]
                            },
                            "act_arg_descr": {
                                asker: Xonomy.askString,
                                menu: [{
                                        caption: "Delete this @act_descr",
                                        action: Xonomy.deleteAttribute
                                    }
                                ]
                            },
                            "act_arg_dataType": {
                                asker: Xonomy.askPicklist,
                                askerParameter: [
                                    { value: "SignedInteger", caption: "Signed Integer" },
                                    { value: "Boolean", caption: "Boolean" },
                                    { value: "EnumeratedSet", caption: "Enumerated Set" },
                                    { value: "UnsignedInteger", caption: "Unsigned Integer" },
                                    { value: "Real", caption: "Real" },
                                    { value: "String", caption: "String" },
                                    { value: "AbsoluteTime", caption: "Absolute Time" },
                                    { value: "RelativeTime", caption: "Relative Time" }
                                ],
                                menu: [{
                                        caption: "Delete this @act_arg_dataType",
                                        action: Xonomy.deleteAttribute
                                    }
                                ]
                            }
                        }
                    },
            "ReportingData": {
                backgroundColour: "#ccffcc",
                menu: [{
                        caption: "Add @space_sys_obj_name=\"obj_name\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "space_sys_obj_name",
                            value: "name"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("space_sys_obj_name");
                        }
                    },
                    {
                        caption: "Add @rd_descr=\"descr_name\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "rd_descr",
                            value: "descr_name"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("rd_descr");
                        }
                    },
                    {
                        caption: "Add @rd_units=\"units\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "rd_units",
                            value: "units"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("rd_units");
                        }
                    },
                    {
                        caption: "Add @rd_dataType=\"Real\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "rd_dataType",
                            value: "Real"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("rd_dataType");
                        }
                    },
                    {
                        caption: "Delete this <ReportingData>",
                        action: Xonomy.deleteElement
                    }
                ],
                canDropTo: ["SystemElement"],
                attributes: {
                    "space_sys_obj_name": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @space_sys_obj_name",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    },
                    "rd_descr": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @rd_descr",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    },
                    "rd_dataType": {
                        asker: Xonomy.askPicklist,
                        askerParameter: [
                            { value: "SignedInteger", caption: "Signed Integer" },
                            { value: "Boolean", caption: "Boolean" },
                            { value: "EnumeratedSet", caption: "Enumerated Set" },
                            { value: "UnsignedInteger", caption: "Unsigned Integer" },
                            { value: "Real", caption: "Real" },
                            { value: "String", caption: "String" },
                            { value: "AbsoluteTime", caption: "Absolute Time" },
                            { value: "RelativeTime", caption: "Relative Time" }
                        ],
                        menu: [{
                                caption: "Delete this @dataType",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    },
                    "rd_units": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @rd_units",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    }
                }
				
            },
            "Event": {
                backgroundColour: "#d8d8ff",
                menu: [{
                        caption: "Add @space_sys_obj_name=\"name\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "space_sys_obj_name",
                            value: "name"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("space_sys_obj_name");
                        }
                    }, 
                    {
                        caption: "Add @event_descr=\"description\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "event_descr",
                            value: "description"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("event_descr");
                        }
                    },
                    {
                        caption: "Delete this <Event>",
                        action: Xonomy.deleteElement
                    }
                ],
                canDropTo: ["SystemElement"],
                attributes: {
                    "space_sys_obj_name": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @space_sys_obj_name",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    },
                    "event_descr": {
                        asker: Xonomy.askLongString,
                        menu: [{
                                caption: "Delete this @event_descr",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    }
                }
				
            }
        }
    }
    //var xmlTemplate = "<ssm><Api base-url='http://192.168.1.214:8080'/><SystemElement label='one'/><SystemElement label='two'/></ssm>";
    var xmlTemplate = "<ssm xmlns='ase5_SSM'><Api base-url='http://192.168.1.214:8080'/><SystemElement space_sys_obj_name='sut-robot' sys_elmt_absolute_name='sut-robot'><Activity  space_sys_obj_name='moveForward' act_descr='moveForward'><act_arg space_sys_obj_name='distance' act_arg_descr='distance' act_arg_dataType='Real'/></Activity><Activity space_sys_obj_name='moveBackwards' act_descr='moveBackwards'><act_arg space_sys_obj_name='distance' act_arg_descr='distance' act_arg_dataType='Real'/></Activity><Activity space_sys_obj_name='rotateClockwise' act_descr='rotateClockwise'><act_arg space_sys_obj_name='degrees' act_arg_descr='degrees' act_arg_dataType='SignedInteger'/></Activity><Activity space_sys_obj_name='rotateCounterclockwise' act_descr='rotateCounterclockwise'><act_arg space_sys_obj_name='degrees' act_arg_descr='degrees' act_arg_dataType='SignedInteger'/></Activity><Activity space_sys_obj_name='reset' act_descr='reset'/><Activity space_sys_obj_name='stop' act_descr='stop'/><ReportingData space_sys_obj_name='distanceFront' rd_descr='distanceFront' rd_dataType='Real'/><ReportingData space_sys_obj_name='distanceDriven' rd_descr='distanceDriven' rd_dataType='Real'/><ReportingData space_sys_obj_name='movementStatus' rd_descr='movementStatus' rd_dataType='Boolean'/><ReportingData space_sys_obj_name='gyroscopeX' rd_descr='gyroscopeX' rd_dataType='Real'/><ReportingData space_sys_obj_name='gyroscopeY' rd_descr='gyroscopeY' rd_dataType='Real'/><ReportingData space_sys_obj_name='gyroscopeZ' rd_descr='gyroscopeZ' rd_dataType='Real'/><Event space_sys_obj_name='noAnswer' event_descr='The connection to the SUT has been lost.'/><Event space_sys_obj_name='obstacleFound' event_descr='An obstacle has been detected on the defined path.'/><Event space_sys_obj_name='noPathLimit' event_descr='The location of the robot cant be defined. No objects in sight.'/></SystemElement></ssm>"
    //var xmlTemplate ="<ssm xmlns='ase5_SSM'><Api base-url='http://192.168.1.214:8080'/><SystemElement space_sys_obj_name='' sys_elmt_absolute_name=''><Activity></Activity><Event/><ReportingData/></SystemElement></ssm>"
    var editorDiv = document.getElementById(editorDivId);
    Xonomy.render(xmlTemplate, editorDiv, docSpec);
}

function submit() {
    var xmlStructure = Xonomy.harvest();
    var xmlFile = new Blob([xmlStructure], {type: 'application/xml'});
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(xmlFile);
    downloadLink.download = "test.xml";
    downloadLink.click();
}