var ns = " xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' "
var xmlTemplate = "<ns1:ssm"+ns+"></ns1:ssm>"

var SSMElements = {
    SystemElement: "<ns1:SystemElement "+ns+" ns1:SSM_element_id='' ns1:space_sys_obj_name='' ns1:sys_elmt_absolute_name='' />",
    Activity: "<ns1:Activity "+ns+"ns1:SSM_element_id='' ns1:space_sys_obj_name='' ns1:act_descr='' xsi:type=''><ns1:activity_phase>AIT</ns1:activity_phase></ns1:Activity>",
    ActivityIDREF: "<n1:Activity "+ns+"/>",
    ReportingData: "<ns1:ReportingData "+ns+"ns1:SSM_element_id='' ns1:space_sys_obj_name='' ns1:rd_descr='' ns1:rd_dataType='' />",
    Event: "<ns1:Event "+ns+"ns1:SSM_element_id='' ns1:space_sys_obj_name='' ns1:event_descr='' ns1:event_severity='' ns1:event_type=''/>",
    def_value: "<ns1:def_value "+ns+"ns1:SSM_element_id=''><ns1:value_result></ns1:value_result></ns1:def_value>",
    Annotation: "<ns1:Annotation "+ns+"ns1:SSM_element_id=''></ns1:Annotation>",
    contextual_name: "<ns1:contextual_name "+ns+"'><ns1:space_system_obj_ref "+ns+"'/></ns1:contextual_name>",
    act_arg: "<ns1:act_arg "+ns+" ns1:SSM_element_id='' ns1:space_sys_obj_name='' ns1:act_arg_descr='' ns1:act_arg_dataType='' xsi:type='' />",
    ActivityCall: "<ns1:ActivityCall "+ns+" ns1:SSM_element_id=''></ns1:ActivityCall>",
};

var docSpec = {
    allowModeSwitching: true,
    allowLayby: false,
    elements: {
        "ns1:ssm": {
            displayName: "ssm",
            menu: [
                {
                    caption: "Append <SystemElement>",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.SystemElement
                }
            ],
            attributes: {
                "xmlns:ns1": {
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @xmlns:ns1",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "xmlns:n1": {
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @xmlns:ns1",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "xsi:schemaLocation": {
                    asker: Xonomy.askString,
                    menu: [{
                        caption: "Delete this @xsi:schemaLocation",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                }
            }
        },
        "ns1:SystemElement": {
            displayName: "SystemElement",
            backgroundColour: "var(--se-color)",
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
                    actionParameter: SSMElements.Activity
                },
                {
                    caption: "Append <ReportingData>",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.ReportingData
                },
                {
                    caption: "Append <Event>",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.Event
                },
                {
                    caption: "Append <contextual_name>...",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.contextual_name,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
                },
                {
                    caption: "Append <parentSystemElement>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:parentSystemElement xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>",
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:parentSystemElement");
                    }
                },
                {
                    caption: "Prepend <Annotation>",
                    action: Xonomy.newElementChildPrepend,
                    actionParameter: SSMElements.Annotation,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
                },
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
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
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
        "ns1:parentSystemElement": {
            displayName: "parentSystemElement",
            hasText: true,
            oneliner: true,
            asker: SSM.askNCName,
            backgroundColour: "#daffff",
            menu: [
                {
                    caption: "Delete this <parentSystemElement>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:SystemElement"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id",
                    asker: SSM.askNCName,
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                }
            }
        },
        "ns1:contextual_name": {
            displayName: "contextual_name",
            backgroundColour: "#f2f2f2",
            menu: [
                {
                    caption: "Delete this <contextual_name>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:SystemElement", "ns1:Activity", "ns1:act_arg", "ns1:Event", "ns1:ReportingData"]
        },
        "ns1:space_system_obj_ref": {
            displayName: "space_system_obj_ref",
            hasText: true,
            oneliner: true,
            required: true,
            asker: SSM.askNCName,
            backgroundColour: "#f2f2f2",
            canDropTo: ["ns1:contextual_name"],
        },
        "ns1:Annotation": {
            displayName: "Annotation",
            backgroundColour: "#f2f2f2",
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
                    caption: "Append <Comment>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:Comment xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>",
                    hideIf: function (jsElement) {
                        if(jsElement.hasChildElement("ns1:Comment") || jsElement.hasChildElement("ns1:Image") || jsElement.hasChildElement("ns1:Document"))
                            return true;
                        else
                            return false;
                    },
                },
                {
                    caption: "Append <Image>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:Image xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>",
                    hideIf: function (jsElement) {
                        if(jsElement.hasChildElement("ns1:Comment") || jsElement.hasChildElement("ns1:Image") || jsElement.hasChildElement("ns1:Document"))
                            return true;
                        else
                            return false;
                    },
                },
                {
                    caption: "Append <Document>",
                    action: Xonomy.newElementChild,
                    actionParameter: "<ns1:Document xmlns:ns1='ase5_SSM' xmlns:n1='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'/>",
                    hideIf: function (jsElement) {
                        if(jsElement.hasChildElement("ns1:Comment") || jsElement.hasChildElement("ns1:Image") || jsElement.hasChildElement("ns1:Document"))
                            return true;
                        else
                            return false;
                    },
                },
                {
                    caption: "Delete this <Annotation>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:SystemElement", "ns1:Activity", "ns1:act_arg", "ns1:Event", "ns1:ReportingData"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id",
                    asker: SSM.askNCName,
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                }
            } 
        },
        "ns1:Comment": {
            displayName: "Comment",
            hasText: true,
            oneliner: true,
            asker: Xonomy.askLongString,
            backgroundColour: "#f2f2f2",
            menu: [
                {
                    caption: "Delete this <Comment>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:Annotation"],
        },
        "ns1:Image": {
            displayName: "Image",
            hasText: true,
            oneliner: true,
            asker: SSM.askAnyURI,
            backgroundColour: "#f2f2f2",
            menu: [
                {
                    caption: "Delete this <Image>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:Annotation"],
        },
        "ns1:Document": {
            displayName: "Document",
            hasText: true,
            oneliner: true,
            asker: SSM.askAnyURI,
            backgroundColour: "#f2f2f2",
            menu: [
                {
                    caption: "Delete this <Document>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:Annotation"],
        },
        "ns1:Activity": {
            displayName: "Activity",
            backgroundColour: "var(--activity-color)",
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
                    caption: "Add @type",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "xsi:type",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("xsi:type");
                    }
                },
                {
                    caption: "Add @act_descr",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:act_descr",
                        value: ""
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
                    actionParameter: SSMElements.act_arg,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:act_arg");
                    }
                },
                {
                    caption: "Append <contextual_name>...",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.contextual_name,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
                },
                {
                    caption: "Prepend <Annotation>",
                    action: Xonomy.newElementChildPrepend,
                    actionParameter: SSMElements.Annotation,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
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
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.askNCName,
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
                "xsi:type": {
                    displayName: "type",
                    asker: Xonomy.askPicklist,
                    askerParameter: [
                        { value: "ns1:OperativeSystemCall" },
                        { value: "ns1:Telecommand" }
                    ],
                    required: true,
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
                        caption: "Delete this @act_version",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
            }
        },
        "ns1:activity_phase": {
            displayName: "activity_phase",
            backgroundColour: "var(--misc-color)",
            hasText: true,
            required:true,
            oneliner: true,
            asker: Xonomy.askPicklist,
            askerParameter: [
                { value: "OnSwDev" },
                { value: "AIT" },
                { value: "Oper" }
            ],
/*             menu: [
                {
                    caption: "Delete this <activity_phase>",
                    action: Xonomy.deleteElement
                }
            ], */
            canDropTo: ["ns1:Activity"],
        },
        "ns1:act_arg": {
            displayName: "act_arg",
            backgroundColour: "var(--misc-color)",
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
                caption: "Add @type",
                action: Xonomy.newAttribute,
                actionParameter: {
                    name: "xsi:type",
                    value: ""
                },
                hideIf: function (jsElement) {
                    return jsElement.hasAttribute("xsi:type");
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
                actionParameter: SSMElements.def_value,
                hideIf: function (jsElement) {
                    return jsElement.getChildElements("ns1:def_value").length >= 1;
                }
            },
            {
                caption: "Append <ActivityCall>",
                action: Xonomy.newElementChild,
                actionParameter: SSMElements.ActivityCall,
                hideIf: function (jsElement) {
                    return jsElement.getChildElements("ns1:ActivityCall").length >= 1;
                }
            },
            {
                caption: "Append <contextual_name>...",
                action: Xonomy.newElementChild,
                actionParameter: SSMElements.contextual_name,
                hideIf: function (jsElement) {
                    return jsElement.hasChildElement("ns1:contextual_name");
                }
            },
            {
                caption: "Prepend <Annotation>",
                action: Xonomy.newElementChildPrepend,
                actionParameter: SSMElements.Annotation,
                hideIf: function (jsElement) {
                    return jsElement.hasChildElement("ns1:contextual_name");
                }
            },
            {
                caption: "Delete this <act_arg>",
                action: Xonomy.deleteElement
            }
            ],
            canDropTo: ["ns1:Activity"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id",
                    asker: SSM.askNCName,
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.askNCName,
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
                        caption: "Delete this @act_units",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "xsi:type": {
                    displayName: "type",
                    asker: Xonomy.askPicklist,
                    askerParameter: [
                        { value: "ns1:SimpleActivityArgument" },
                        { value: "ns1:CompoundActivityArgument" }
                    ],
                    required: true,
                },
            }
        },
        "ns1:ActivityCall": {
            displayName: "ActivityCall",
            backgroundColour: "var(--miscb-color)",
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
                    caption: "Append <Activity> IDREF",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.ActivityIDREF,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:value_type");
                    }
                },
                {
                    caption: "Prepend <Annotation>",
                    action: Xonomy.newElementChildPrepend,
                    actionParameter: SSMElements.Annotation,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
                },
                {
                    caption: "Delete this <ActivityCall>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:Activity"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id",
                    asker: SSM.askNCName,
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                }
            }
        },
        "ns1:def_value": {
            displayName: "def_value",
            backgroundColour: "var(--miscb-color)",
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
            mustBeAfter: ["ReportingData"],
            canDropTo: ["ns1:act_arg", "ns1:ReportingData"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id",
                    asker: SSM.askNCName,
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                }
            }
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
                caption: "Delete this <value_units>",
                action: Xonomy.deleteAttribute
            }
            ],
            canDropTo: ["ns1:def_value"],
        },
        "ns1:value_result": {
            displayName: "value_result",
            hasText: true,
            oneliner: true,
            required: true,
            asker: Xonomy.askString,
            menu: [{
                caption: "Delete this <value_result>",
                action: Xonomy.deleteAttribute
            }
            ],
            canDropTo: ["ns1:def_value"],
        },
        "ns1:ReportingData": {
            displayName: "ReportingData",
            backgroundColour: "var(--rd-color)",
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
                    caption: "Add @rd_type",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:rd_type",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:rd_type");
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
                    caption: "Append <def_value>",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.def_value,
                    hideIf: function (jsElement) {
                        return jsElement.getChildElements("ns1:def_value").length >= 1;
                    }
                },
                {
                    caption: "Append <contextual_name>...",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.contextual_name,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
                },
                {
                    caption: "Prepend <Annotation>",
                    action: Xonomy.newElementChildPrepend,
                    actionParameter: SSMElements.Annotation,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
                },
                {
                    caption: "Delete this <ReportingData>",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:SystemElement"],
            attributes: {
                "ns1:SSM_element_id": {
                    displayName: "SSM_element_id",
                    asker: SSM.askNCName,
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.askNCName,
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
                "ns1:rd_type": {
                    displayName: "rd_type",
                    asker: Xonomy.askPicklist,
                    required: true,
                    askerParameter: [
                        { value: "parameter" },
                        { value: "compound parameter" },
                        { value: "EnumeratedSet" }
                    ],
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
            backgroundColour: "var(--event-color)",
            menu: [
                {
                    caption: "Add @SSM_element_id",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:SSM_element_id",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        if (jsElement.hasAttribute("ns1:SSM_element_id"))
                            return true;
                        return false;
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
                    caption: "Add @event_type",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:event_type",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:event_type");
                    }
                },
                {
                    caption: "Add @event_severity",
                    action: Xonomy.newAttribute,
                    actionParameter: {
                        name: "ns1:event_severity",
                        value: ""
                    },
                    hideIf: function (jsElement) {
                        return jsElement.hasAttribute("ns1:event_severity");
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
                    caption: "Append <contextual_name>...",
                    action: Xonomy.newElementChild,
                    actionParameter: SSMElements.contextual_name,
                    hideIf: function (jsElement) {
                        return jsElement.hasChildElement("ns1:contextual_name");
                    }
                },
                {
                    caption: "Prepend <Annotation>",
                    action: Xonomy.newElementChildPrepend,
                    actionParameter: SSMElements.Annotation,
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
                    required: true,
                    menu: [{
                        caption: "Delete this @SSM_element_id",
                        action: Xonomy.deleteAttribute
                    }]
                },
                "ns1:space_sys_obj_name": {
                    displayName: "space_sys_obj_name",
                    asker: SSM.askNCName,
                    required: true
                },
                "ns1:event_severity": {
                    displayName: "event_severity",
                    asker: Xonomy.askPicklist,
                    required: true,
                    askerParameter: [
                        { value: "normal" },
                        { value: "low" },
                        { value: "medium" },
                        { value: "high" }
                    ],
                    menu: [{
                        caption: "Delete this @event_severity",
                        action: Xonomy.deleteAttribute
                    }
                    ]
                },
                "ns1:event_type": {
                    displayName: "event_type",
                    asker: Xonomy.askPicklist,
                    required: true,
                    askerParameter: [
                        { value: "information" },
                        { value: "anomaly report" },
                        { value: "progress report" },
                        { value: "software error" },
                        { value: "scheduling event" }
                    ],
                    menu: [{
                        caption: "Delete this @event_type",
                        action: Xonomy.deleteAttribute
                    }
                    ]
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
                "ns1:event_descr": {
                    displayName: "event_descr",
                    asker: Xonomy.askLongString,
                    required: true
                }
            }
        },
        "n1:Activity": {
            displayName: "Activity",
            hasText: true,
            oneliner: true,
            asker: Xonomy.askNCName,
            backgroundColour: "#f2f2f2",
            menu: [
                {
                    caption: "Delete this <Activity> (IDREF)",
                    action: Xonomy.deleteElement
                }
            ],
            canDropTo: ["ns1:ActivityCall"],
        },
    }
}