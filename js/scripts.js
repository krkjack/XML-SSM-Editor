$(document).ready(function () {
    $('#inputXML').on('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            var xml = e.target.result;
            Xonomy.render(xml, document.getElementById("xonomy"), docSpec);
        };
        reader.readAsText(this.files[0]);
        Xonomy.changed();
    });
});

$(document).ready(function () {
    $('#toggle-nerd-laic').on('click', function () {
        if (Xonomy.mode == "nerd") {
            Xonomy.setMode("laic");
        } else {
            Xonomy.setMode("nerd");
        }
    });

});

function validate_xsd_by_post(contentToValidate, callback) {
    $('#modal-validation-body').empty();
    contentBASE64 = btoa(contentToValidate);
    var post = new XMLHttpRequest();
    post.onload = function () {
        if (post.status == 200 && post.responseXML.getElementsByTagName("result")[0].innerHTML == 'FAILURE') {
            var errorMsg = "<h5>Validation failed. Please correct the following errors:</h5>";
            for (var i = 0; i < post.responseXML.getElementsByTagName("description").length; i++) {
                errorMsg = errorMsg + "" + post.responseXML.getElementsByTagName("description")[i].innerHTML + "\nLocation: " + post.responseXML.getElementsByTagName("location")[i].innerHTML + "\n\n";
            }
            $('#modal-validation-body').html("<div style='white-space: pre-wrap;'>" + errorMsg + "</div>");
            $('#validationModal').modal();
            callback(false);
        }
        else if (post.status == 200 && post.responseXML.getElementsByTagName("result")[0].innerHTML == 'SUCCESS') {
            callback(true);
        }
        else if (post.status == 500) {
            callback(true);
        }
    };
    post.open("POST", "http://localhost:9090/rest/ssm/api/validate", true);
    post.setRequestHeader('Content-Type', 'application/json');
    post.send(JSON.stringify({
        "contentToValidate": contentBASE64,
        "validationType": "ssm"
    }))
};


function shakeElement(element) {
    element.addClass('shake');
    setTimeout(function () {
        element.removeClass('shake');
    }, 820);
};

function convertXMLtoHTML(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function downloadXML(skipValidation) {
    var xmlStructure = Xonomy.harvest();
    var xmlFile = new Blob([xmlStructure], { type: 'application/xml' });
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(xmlFile);
    downloadLink.download = $("#currentProjectTitle").text() + ".xml";
    if (skipValidation) {
        downloadLink.click();
    }
    else {
        validate_xsd_by_post(xmlStructure, function (resp) {
            if (resp) {
                downloadLink.click();
            }
        });
    }
}

function toggleCSSLoading(fileName) {
    const element = document.querySelector('link[href="' + fileName + '"]');
    if (element) {
        element.parentNode.removeChild(element);
    } else {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = fileName;
        document.head.appendChild(link);
    }
}