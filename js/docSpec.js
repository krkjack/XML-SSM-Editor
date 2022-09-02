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
            menu: [
                {
                    caption: "Add @space_sys_obj_name",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "space_sys_obj_name",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("space_sys_obj_name");
                    }
                },
                {
                    caption: "Add @sys_elmt_absolute_name=",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "sys_elmt_absolute_name",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("sys_elmt_absolute_name");
                    }
                },
                {
                    caption: "Append an <Activity>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:Activity/>"
                    //actionParameter: "<ns1:Activity xmlns:ns1='ase5_SSM'/>"
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
                    required: true
                }
            }
        },
        "Activity": {
            backgroundColour: "#f3f5a3",
            menu: [{
                caption: "Add @space_sys_obj_name",
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
                caption: "Add @act_descr",
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
                caption: "Append an <activity_phase>",
                action: Xonomy.newElementChild,
                actionParameter: "<activity_phase>AIT</activity_phase>",
                hideIf: function (jsElement) {
                    return jsElement.hasChildElement("activity_phase");
                }
            },
            {
                caption: "Append an <act_arg>",
                action: Xonomy.newElementChild,
                actionParameter: "<act_arg act_arg_descr='' act_arg_dataType=''/>"
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
                    required: true
                },
                "act_descr": {
                    asker: Xonomy.askString,
                    required: true,
                },
                "act_version": {
                    asker: Xonomy.askInt,
                    menu: [{
                        caption: "Delete this @act_version",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
            }
        },
        "activity_phase": {
            backgroundColour: "#f5d4a3",
            hasText: true,
            oneliner: true,
            asker: Xonomy.askPicklist,
            askerParameter: [
                { value: "OnSwDev" },
                { value: "AIT" },
                { value: "Oper" }
            ],
            menu: [
                {
                    caption: "Delete this <activity_phase>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["Activity"],
        },
        "act_arg": {
            backgroundColour: "#f5d4a3",
            menu: [{
                caption: "Add @space_sys_obj_name",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "space_sys_obj_name",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("space_sys_obj_name");
                }
            },
            {
                caption: "Add @space_sys_obj_type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "space_sys_obj_type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("space_sys_obj_type");
                }
            },
            {
                caption: "Add @act_arg_descr",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "act_arg_descr",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("act_arg_descr");
                },

            },
            {
                caption: "Add @act_arg_dataType",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "act_arg_dataType",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("act_arg_dataType");
                },

            },
            {
                caption: "Add @act_units",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "act_units",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("act_units");
                },

            },
            {
                caption: "Append a <def_value>",
                action: Xonomy.newElementChild,
                actionParameter: "<def_value/>"
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
                    required: true
                },
                "space_sys_obj_type": {
                    asker: Xonomy.askPicklist,
                    askerParameter: [
                        { value: "variable" },
                        { value: "reporting data" },
                        { value: "system element" },
                        { value: "event" },
                        { value: "activity" },
                        { value: "step" },
                        { value: "activity argument" },
                        { value: "enumerated set" },
                        { value: "activity specification instance" },
                        { value: "wait_cond" }
                    ],
                    menu: [{
                        caption: "Delete this @space_sys_obj_type",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "act_arg_descr": {
                    asker: Xonomy.askString,
                    required: true
                },
                "act_arg_dataType": {
                    asker: Xonomy.askPicklist,
                    askerParameter: [
                        { value: "SignedInteger" },
                        { value: "Boolean" },
                        { value: "EnumeratedSet" },
                        { value: "UnsignedInteger" },
                        { value: "Real" },
                        { value: "String" },
                        { value: "AbsoluteTime" },
                        { value: "RelativeTime" }
                    ],
                    required: true
                },
                "act_units": {
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @act_units",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
            }
        },
        "def_value": {
            backgroundColour: "#f5c0a3",
            menu: [{
                caption: "Add @value_type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "value_type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("value_type");
                }
            },
            {
                caption: "Add @value_units",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "value_units",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("value_units");
                }
            },
            {
                caption: "Add @value_result",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "value_result",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("value_result");
                }
            },
            {
                caption: "Delete this <def_value>",
                action: Xonomy.deleteElement
            }
            ],
            canDropTo: ["act_arg", "ReportingData"],
            attributes: {
                "value_type": {
                    asker: Xonomy.askPicklist,
                    askerParameter: [
                        { value: "SignedInteger" },
                        { value: "Boolean" },
                        { value: "EnumeratedSet" },
                        { value: "UnsignedInteger" },
                        { value: "Real" },
                        { value: "String" },
                        { value: "AbsoluteTime" },
                        { value: "RelativeTime" }
                    ],
                },
                "value_units": {
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @value_units",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "value_result": {
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @value_result",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
            }
        },
        "ReportingData": {
            backgroundColour: "#ccffcc",
            menu: [{
                caption: "Add @space_sys_obj_name",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "space_sys_obj_name",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("space_sys_obj_name");
                }
            },
            {
                caption: "Add @space_sys_obj_type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "space_sys_obj_type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("space_sys_obj_type");
                }
            },
            {
                caption: "Add @rd_descr",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "rd_descr",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("rd_descr");
                }
            },
            {
                caption: "Add @rd_units",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "rd_units",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("rd_units");
                }
            },
            {
                caption: "Add @rd_dataType",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "rd_dataType",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("rd_dataType");
                }
            },
            {
                caption: "Append a <def_value>",
                action: Xonomy.newElementChild,
                actionParameter: "<def_value/>"
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
                    required: true
                },
                "space_sys_obj_type": {
                    asker: Xonomy.askPicklist,
                    askerParameter: [
                        { value: "variable" },
                        { value: "reporting data" },
                        { value: "system element" },
                        { value: "event" },
                        { value: "activity" },
                        { value: "step" },
                        { value: "activity argument" },
                        { value: "enumerated set" },
                        { value: "activity specification instance" },
                        { value: "wait_cond" }
                    ],
                    menu: [{
                        caption: "Delete this @space_sys_obj_type",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "rd_descr": {
                    asker: Xonomy.askString,
                    required: true
                },
                "rd_dataType": {
                    asker: Xonomy.askPicklist,
                    required: true,
                    askerParameter: [
                        { value: "SignedInteger" },
                        { value: "Boolean" },
                        { value: "EnumeratedSet" },
                        { value: "UnsignedInteger" },
                        { value: "Real" },
                        { value: "String" },
                        { value: "AbsoluteTime" },
                        { value: "RelativeTime" }
                    ],
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
                caption: "Add @space_sys_obj_name",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "space_sys_obj_name",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("space_sys_obj_name");
                }
            },
            {
                caption: "Add @space_sys_obj_type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "space_sys_obj_type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("space_sys_obj_type");
                }
            },
            {
                caption: "Add @event_descr",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "event_descr",
                    value: ""
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
                    required: true
                },
                "space_sys_obj_type": {
                    asker: Xonomy.askPicklist,
                    askerParameter: [
                        { value: "variable" },
                        { value: "reporting data" },
                        { value: "system element" },
                        { value: "event" },
                        { value: "activity" },
                        { value: "step" },
                        { value: "activity argument" },
                        { value: "enumerated set" },
                        { value: "activity specification instance" },
                        { value: "wait_cond" }
                    ],
                    menu: [{
                        caption: "Delete this @space_sys_obj_type",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "event_descr": {
                    asker: Xonomy.askLongString,
                    required: true
                }
            }
        }
    }
}