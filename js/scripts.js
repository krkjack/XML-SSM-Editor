$(document).ready(function () {
    $('#inputXML').on('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            var xml = e.target.result;
            Xonomy.render(xml, document.getElementById("xonomy"), docSpec);
        };
        reader.readAsText(this.files[0]);
    });
});

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

function shakeElement(element){
    element.addClass('shake');
    setTimeout(function(){
        element.removeClass('shake');
    },820);
};

function downloadXML() {
    var xmlStructure = Xonomy.harvest();
    var xmlFile = new Blob([xmlStructure], { type: 'application/xml' });
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(xmlFile);
    downloadLink.download = $("#currentProjectTitle").text()+".xml";
    downloadLink.click();
}

function toggleCSSLoading(fileName) {
    const element = document.querySelector('link[href="'+ fileName +'"]');
    if (element) {
      element.parentNode.removeChild(element);
    } else {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fileName;
      document.head.appendChild(link);
    }
  }