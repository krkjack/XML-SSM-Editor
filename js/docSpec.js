function docSpecInit(editorDivId) {
    var docSpec = {
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
                    "xmlns:ns1": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @label",
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
                menu: [{
                        caption: "Add @label=\"something\"",
                        action: Xonomy.newAttribute,
                        actionParameter: {
                            name: "label",
                            value: "something"
                        },
                        hideIf: function (jsElement) {
                            return jsElement.hasAttribute("label");
                        }
                    }, {
                        caption: "Delete this <SystemElement>",
                        action: Xonomy.deleteElement
                    }, 
					{
                        caption: "Append an <Activity>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<Activity/>"
					},
					{
                        caption: "Append an <ReportingDataValue>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<ReportingDataValue/>"
					},	
					{
                        caption: "Append an <EventData>",
                        action: Xonomy.newElementChild,
                        actionParameter: "<EventData/>"
					},					
					   {
                        caption: "New <SystemElement> before this",
                        action: Xonomy.newElementBefore,
                        actionParameter: "<SystemElement/>"
                    }, {
                        caption: "New <SystemElement> after this",
                        action: Xonomy.newElementAfter,
                        actionParameter: "<SystemElement/>"
                    }
                ],
                canDropTo: ["ssm"],
                attributes: {
                    "label": {
                        asker: Xonomy.askString,
                        menu: [{
                                caption: "Delete this @label",
                                action: Xonomy.deleteAttribute
                            }
                        ]
                    }
                }
				
            }
        }
    }
    var xmlTemplate = "<ssm><Api base-url='http://192.168.1.214:8080'/><SystemElement label='one'/><SystemElement label='two'/></ssm>";
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