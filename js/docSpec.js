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
            displayName: "ssm",
            menu: [
                {
                    caption: "Append <Api>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<Api/>"
                },
                {
                    caption: "Append <SystemElement>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:SystemElement xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' />"
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
        "ns1:SystemElement": {
            displayName: "SystemElement",
            backgroundColour: "#ccffff",
            menu: [
                {
                    caption: "Add @SSM_element_id",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:SSM_element_id",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:SSM_element_id");
                    }
                },
                {
                    caption: "Add @space_sys_obj_name",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:space_sys_obj_name",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:space_sys_obj_name");
                    }
                },
                {
                    caption: "Add @sys_elmt_absolute_name=",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:sys_elmt_absolute_name",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:sys_elmt_absolute_name");
                    }
                },
                {
                    caption: "Append <Activity>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:Activity xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
                },
                {
                    caption: "Append <ReportingData>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:ReportingData xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
                },
                {
                    caption: "Append <Event>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:Event xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
                },
/*                 {
                    caption: "New <SystemElement> before this",
                    action: Xonomy.newElementBefore,
                    actionParameter: "<ns1:SystemElement xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
                }, {
                    caption: "New <SystemElement> after this",
                    action: Xonomy.newElementAfter,
                    actionParameter: "<ns1:SystemElement xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
                }, */
                {
                    caption: "Delete this <SystemElement>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ssm", "ns1:SystemElement"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id", 
                    asker: SSM.askNCName,
                    rquired: true
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.askNCName,
                    required: true
                },
                "ns1:sys_elmt_absolute_name": {
                    displayName: "sys_elmt_absolute_name",
                    asker: Xonomy.askString,
                    required: true
                }
            }
        },
        "ns1:Activity": {
            displayName: "Activity",
            backgroundColour: "#f3f5a3",
            menu: [
                {
                    caption: "Add @SSM_element_id",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:SSM_element_id",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:SSM_element_id");
                    }
                },
                {
                caption: "Add @space_sys_obj_name",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:space_sys_obj_name",
                    value: "name"
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:space_sys_obj_name");
                }
            },
            {
                caption: "Add @act_descr",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:act_descr",
                    value: "descr"
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:act_descr");
                }
            },
            {
                caption: "Add @act_version=\"1\"",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:act_version",
                    value: "1"
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:act_version");
                }
            },
            {
                caption: "Append <activity_phase>",
                action: Xonomy.newElementChild,
                actionParameter: "<ns1:activity_phase xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>AIT</ns1:activity_phase>",
                hideIf: function (jsElement) {
                    return jsElement.hasChildElement("ns1:activity_phase");
                }
            },
            {
                caption: "Append <act_arg>",
                action: Xonomy.newElementChild,
                actionParameter: "<ns1:act_arg act_arg_descr='' ns1:act_arg_dataType='' xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
            },
            {
                caption: "Delete this <Activity>",
                action: Xonomy.deleteElement
            }
            ],
            canDropTo: ["ns1:SystemElement"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id", 
                    asker: SSM.askNCName,
                    rquired: true
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.AskNCName,
                    required: true
                },
                "ns1:act_descr": {
                    displayName: "act_descr",
                    asker: Xonomy.askString,
                    required: true,
                },
                "ns1:act_version": {
                    displayName: "act_version",
                    asker: Xonomy.askInt,
                    menu: [{
                        caption: "Delete this @ns1:act_version",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
            }
        },
        "ns1:activity_phase": {
            displayName: "activity_phase",
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
            canDropTo: ["ns1:Activity"],
        },
        "ns1:act_arg": {
            displayName: "act_arg",
            backgroundColour: "#f5d4a3",
            menu: [{
                caption: "Add @space_sys_obj_name",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:space_sys_obj_name",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:space_sys_obj_name");
                }
            },
            {
                caption: "Add @space_sys_obj_type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:space_sys_obj_type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:space_sys_obj_type");
                }
            },
            {
                caption: "Add @act_arg_descr",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:act_arg_descr",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:act_arg_descr");
                },

            },
            {
                caption: "Add @act_arg_dataType",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:act_arg_dataType",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:act_arg_dataType");
                },

            },
            {
                caption: "Add @act_units",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:act_units",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:act_units");
                },

            },
            {
                caption: "Append <def_value>",
                action: Xonomy.newElementChild,
                actionParameter: "<ns1:def_value xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
            },
            {
                caption: "Delete this <act_arg>",
                action: Xonomy.deleteElement
            }
            ],
            canDropTo: ["ns1:Activity"],
            attributes: {
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.AskNCName,
                    required: true
                },
                "ns1:space_sys_obj_type": {
                    displayName: "space_sys_obj_type",
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
                "ns1:act_arg_descr": {
                    displayName: "act_arg_descr",
                    asker: Xonomy.askString,
                    required: true
                },
                "ns1:act_arg_dataType": {
                    displayName: "act_arg_dataType",
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
                "ns1:act_units": {
                    displayName: "act_units",
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @ns1:act_units",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
            }
        },
        "ns1:def_value": {
            displayName: "def_value",
            backgroundColour: "#f5c0a3",
            menu: [{
                caption: "Append @value_type",
                action: Xonomy.newElementChild,
                actionParameter: "<ns1:value_type xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>",
                hideIf: function (jsElement) {
                    return jsElement.hasChildElement("ns1:value_type");
                }
            },
            {
                caption: "Append @value_units",
                action: Xonomy.newElementChild,
                actionParameter: "<ns1:value_units xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>",
                hideIf: function (jsElement) {
                    return jsElement.hasChildElement("ns1:value_units");
                }
            },
            {
                caption: "Append @value_result",
                action: Xonomy.newElementChild,
                actionParameter: "<ns1:value_result xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>",
                hideIf: function (jsElement) {
                    return jsElement.hasChildElement("ns1:value_result");
                }
            },
            {
                caption: "Delete this <def_value>",
                action: Xonomy.deleteElement
            }
            ],
            canDropTo: ["ns1:act_arg", "ns1:ReportingData"],
        },
        "ns1:value_type": {
            displayName: "value_type",
            hasText: true,
            oneliner: true,
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
            menu: [
                {
                    caption: "Delete this <ns1:value_type>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:def_value"],
        },
        "ns1:value_units": {
            displayName: "value_units",
            hasText: true,
            oneliner: true,
            asker: Xonomy.askString,
            menu: [{
                caption: "Delete this @ns1:value_units",
                action: Xonomy.deleteAttribute
            }
            ],
            canDropTo: ["ns1:def_value"],
        },
        "ns1:value_result": {
            displayName: "value_results",
            hasText: true,
            oneliner: true,
            asker: Xonomy.askString,
            menu: [{
                caption: "Delete this @ns1:value_result",
                action: Xonomy.deleteAttribute
            }
            ],
            canDropTo: ["ns1:def_value"],
        },
        "ns1:ReportingData": {
            displayName: "ReportingData",
            backgroundColour: "#ccffcc",
            menu: [
                {
                    caption: "Add @SSM_element_id",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:SSM_element_id",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:SSM_element_id");
                    }
                },
                {
                caption: "Add @space_sys_obj_name",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:space_sys_obj_name",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:space_sys_obj_name");
                }
            },
            {
                caption: "Add @space_sys_obj_type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:space_sys_obj_type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:space_sys_obj_type");
                }
            },
            {
                caption: "Add @rd_descr",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:rd_descr",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:rd_descr");
                }
            },
            {
                caption: "Add @rd_units",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:rd_units",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:rd_units");
                }
            },
            {
                caption: "Add @rd_dataType",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:rd_dataType",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:rd_dataType");
                }
            },
            {
                caption: "Append <ns1:def_value>",
                action: Xonomy.newElementChild,
                actionParameter: "<ns1:def_value xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>"
            },
            {
                caption: "Delete this <ns1:ReportingData>",
                action: Xonomy.deleteElement
            }
            ],
            canDropTo: ["ns1:SystemElement"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id", 
                    asker: SSM.askNCName,
                    rquired: true
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.AskNCName,
                    required: true
                },
                "ns1:space_sys_obj_type": {
                    displayName: "space_sys_obj_type",
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
                "ns1:rd_descr": {
                    displayName: "rd_descr",
                    asker: Xonomy.askString,
                    required: true
                },
                "ns1:rd_dataType": {
                    displayName: "rd_dataType",
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
                "ns1:rd_units": {
                    displayName: "rd_units",
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @rd_units",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                }
            }

        },
        "ns1:Event": {
            displayName: "Event",
            backgroundColour: "#d8d8ff",
            menu: [
                {
                    caption: "Add @SSM_element_id",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:SSM_element_id",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:SSM_element_id");
                    }
                },
                {
                caption: "Add @space_sys_obj_name",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:space_sys_obj_name",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:space_sys_obj_name");
                }
            },
            {
                caption: "Add @space_sys_obj_type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:space_sys_obj_type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:space_sys_obj_type");
                }
            },
            {
                caption: "Add @event_descr",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "ns1:event_descr",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("ns1:event_descr");
                }
            },
            {
                caption: "Delete this <Event>",
                action: Xonomy.deleteElement
            }
            ],
            canDropTo: ["ns1:SystemElement"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id", 
                    asker: SSM.askNCName,
                    rquired: true
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.AskNCName,
                    required: true
                },
                "ns1:space_sys_obj_type": {
                    displayName: "space_sys_obj_type",
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
                        caption: "Delete this @ns1:space_sys_obj_type",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "ns1:event_descr": {
                    displayName: "event_descr",
                    asker: Xonomy.askLongString,
                    required: true
                }
            }
        }
    }
}