$(document).ready(function () {
    $('#zoom-out').on('click', function () {
        var currentZoom = parseFloat($('#xonomy').css('zoom'));
        currentZoom -= 0.1;
        $('#xonomy').css('zoom', currentZoom);
    });

    $('#zoom-in').on('click', function () {
        var currentZoom = parseFloat($('#xonomy').css('zoom'));
        currentZoom += 0.1;
        $('#xonomy').css('zoom', '' + currentZoom);
    });

    $('#zoom-reset').on('click', function () {
        $('#xonomy').css('zoom', '1');
    });

    $('#toggle-nerd-laic').on('click', function () {
        if (Xonomy.mode == "nerd") {
            Xonomy.setMode("laic"); 
        } else {
            Xonomy.setMode("nerd"); 
        }
    });

});

function downloadXML() {
    var xmlStructure = Xonomy.harvest();
    var xmlFile = new Blob([xmlStructure], { type: 'application/xml' });
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(xmlFile);
    downloadLink.download = $("#currentProjectTitle").text()+".xml";
    downloadLink.click();
}