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
    $('#toggle-nerd-laic').on('click', function () {
        if (Xonomy.mode == "nerd") {
            Xonomy.setMode("laic"); 
        } else {
            Xonomy.setMode("nerd"); 
        }
    });

});

function test(){
  let data={
    "contentToValidate": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PiA8bnMxOnNzbSB4bWxucz0iYXNlNV9TU00iIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTpzY2hlbWFMb2NhdGlvbj0iYXNlNV9TU00gc3NtX3NjaGVtYS54c2QiIHhtbG5zOm5zMT0iYXNlNV9TU00iIHhtbG5zOm4xPSJhc2U1X1NTTSI+IDxuczE6U3lzdGVtRWxlbWVudCBuczE6U1NNX2VsZW1lbnRfaWQ9IklEMDAwIiBuczE6c3BhY2Vfc3lzX29ial9uYW1lPSJzdXQtcm9ib3QiIG5zMTpzeXNfZWxtdF9hYnNvbHV0ZV9uYW1lPSJzdXQtcm9ib3QiPiA8bnMxOkFjdGl2aXR5IG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9Im1vdmVGb3J3YXJkIiBuczE6YWN0X2Rlc2NyPSJtb3ZlRm9yd2FyZCIgeHNpOnR5cGU9Im5zMTpPcGVyYXRpdmVTeXN0ZW1DYWxsIiBuczE6U1NNX2VsZW1lbnRfaWQ9IklENjcwIj4gPG5zMTphY3Rpdml0eV9waGFzZT5BSVQ8L25zMTphY3Rpdml0eV9waGFzZT4gPG5zMTphY3RfYXJnIG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9ImRpc3RhbmNlIiBuczE6YWN0X2FyZ19kZXNjcj0iZGlzdGFuY2UiIG5zMTphY3RfYXJnX2RhdGFUeXBlPSJSZWFsIiB4c2k6dHlwZT0ibnMxOlNpbXBsZUFjdGl2aXR5QXJndW1lbnQiIG5zMTphY3RfdW5pdHM9InRlc3QiIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ2ODAiPiA8bnMxOmRlZl92YWx1ZT4gPG5zMTp2YWx1ZV90eXBlPlVuc2lnbmVkSW50ZWdlcjwvbnMxOnZhbHVlX3R5cGU+IDxuczE6dmFsdWVfdW5pdHM+bWV0ZXI8L25zMTp2YWx1ZV91bml0cz4gPG5zMTp2YWx1ZV9yZXN1bHQ+MDwvbnMxOnZhbHVlX3Jlc3VsdD4gPC9uczE6ZGVmX3ZhbHVlPiA8bnMxOkFjdGl2aXR5Q2FsbCBuczE6U1NNX2VsZW1lbnRfaWQ9IklENzgwIj4gPG5zMTpBY3Rpdml0eT5JRDY3MDwvbnMxOkFjdGl2aXR5PiA8L25zMTpBY3Rpdml0eUNhbGw+IDwvbnMxOmFjdF9hcmc+IDwvbnMxOkFjdGl2aXR5PiA8bnMxOlJlcG9ydGluZ0RhdGEgbnMxOnJkX3R5cGU9InBhcmFtZXRlciIgbnMxOnNwYWNlX3N5c19vYmpfbmFtZT0iZGlzdGFuY2VGcm9udCIgbnMxOnJkX2Rlc2NyPSJkaXN0YW5jZUZyb250IiBuczE6cmRfZGF0YVR5cGU9IlJlYWwiIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ3MTAiLz4gPG5zMTpSZXBvcnRpbmdEYXRhIG5zMTpyZF90eXBlPSJwYXJhbWV0ZXIiIG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9ImRpc3RhbmNlRHJpdmVuIiBuczE6cmRfZGVzY3I9ImRpc3RhbmNlRHJpdmVuIiBuczE6cmRfZGF0YVR5cGU9IlJlYWwiIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ3MzAiLz4gPG5zMTpFdmVudCBuczE6c3BhY2Vfc3lzX29ial9uYW1lPSJub0Fuc3dlciIgbnMxOmV2ZW50X2Rlc2NyPSJUaGUgY29ubmVjdGlvbiB0byB0aGUgU1VUIGhhcyBiZWVuIGxvc3QuIiBuczE6U1NNX2VsZW1lbnRfaWQ9IklENzQwIiBuczE6ZXZlbnRfdHlwZT0ic29mdHdhcmUgZXJyb3IiIG5zMTpldmVudF9zZXZlcml0eT0iaGlnaCIvPiA8bnMxOkV2ZW50IG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9Im9ic3RhY2xlRm91bmQiIG5zMTpldmVudF9kZXNjcj0iQW4gb2JzdGFjbGUgaGFzIGJlZW4gZGV0ZWN0ZWQgb24gdGhlIGRlZmluZWQgcGF0aC4iIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ3NTAiIG5zMTpldmVudF90eXBlPSJpbmZvcm1hdGlvbiIgbnMxOmV2ZW50X3NldmVyaXR5PSJub3JtYWwiLz4gPC9uczE6U3lzdGVtRWxlbWVudD4gPC9uczE6c3NtPg==",
    "validationType": "large"}
    fetch("http://localhost:9090/rest/ssm/api/validate", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
      }).then(res => {
        console.log(res);
      });
};
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:9090/rest/ssm/api/validate", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "contentToValidate": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PiA8bnMxOnNzbSB4bWxucz0iYXNlNV9TU00iIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTpzY2hlbWFMb2NhdGlvbj0iYXNlNV9TU00gc3NtX3NjaGVtYS54c2QiIHhtbG5zOm5zMT0iYXNlNV9TU00iIHhtbG5zOm4xPSJhc2U1X1NTTSI+IDxuczE6U3lzdGVtRWxlbWVudCBuczE6U1NNX2VsZW1lbnRfaWQ9IklEMDAwIiBuczE6c3BhY2Vfc3lzX29ial9uYW1lPSJzdXQtcm9ib3QiIG5zMTpzeXNfZWxtdF9hYnNvbHV0ZV9uYW1lPSJzdXQtcm9ib3QiPiA8bnMxOkFjdGl2aXR5IG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9Im1vdmVGb3J3YXJkIiBuczE6YWN0X2Rlc2NyPSJtb3ZlRm9yd2FyZCIgeHNpOnR5cGU9Im5zMTpPcGVyYXRpdmVTeXN0ZW1DYWxsIiBuczE6U1NNX2VsZW1lbnRfaWQ9IklENjcwIj4gPG5zMTphY3Rpdml0eV9waGFzZT5BSVQ8L25zMTphY3Rpdml0eV9waGFzZT4gPG5zMTphY3RfYXJnIG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9ImRpc3RhbmNlIiBuczE6YWN0X2FyZ19kZXNjcj0iZGlzdGFuY2UiIG5zMTphY3RfYXJnX2RhdGFUeXBlPSJSZWFsIiB4c2k6dHlwZT0ibnMxOlNpbXBsZUFjdGl2aXR5QXJndW1lbnQiIG5zMTphY3RfdW5pdHM9InRlc3QiIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ2ODAiPiA8bnMxOmRlZl92YWx1ZT4gPG5zMTp2YWx1ZV90eXBlPlVuc2lnbmVkSW50ZWdlcjwvbnMxOnZhbHVlX3R5cGU+IDxuczE6dmFsdWVfdW5pdHM+bWV0ZXI8L25zMTp2YWx1ZV91bml0cz4gPG5zMTp2YWx1ZV9yZXN1bHQ+MDwvbnMxOnZhbHVlX3Jlc3VsdD4gPC9uczE6ZGVmX3ZhbHVlPiA8bnMxOkFjdGl2aXR5Q2FsbCBuczE6U1NNX2VsZW1lbnRfaWQ9IklENzgwIj4gPG5zMTpBY3Rpdml0eT5JRDY3MDwvbnMxOkFjdGl2aXR5PiA8L25zMTpBY3Rpdml0eUNhbGw+IDwvbnMxOmFjdF9hcmc+IDwvbnMxOkFjdGl2aXR5PiA8bnMxOlJlcG9ydGluZ0RhdGEgbnMxOnJkX3R5cGU9InBhcmFtZXRlciIgbnMxOnNwYWNlX3N5c19vYmpfbmFtZT0iZGlzdGFuY2VGcm9udCIgbnMxOnJkX2Rlc2NyPSJkaXN0YW5jZUZyb250IiBuczE6cmRfZGF0YVR5cGU9IlJlYWwiIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ3MTAiLz4gPG5zMTpSZXBvcnRpbmdEYXRhIG5zMTpyZF90eXBlPSJwYXJhbWV0ZXIiIG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9ImRpc3RhbmNlRHJpdmVuIiBuczE6cmRfZGVzY3I9ImRpc3RhbmNlRHJpdmVuIiBuczE6cmRfZGF0YVR5cGU9IlJlYWwiIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ3MzAiLz4gPG5zMTpFdmVudCBuczE6c3BhY2Vfc3lzX29ial9uYW1lPSJub0Fuc3dlciIgbnMxOmV2ZW50X2Rlc2NyPSJUaGUgY29ubmVjdGlvbiB0byB0aGUgU1VUIGhhcyBiZWVuIGxvc3QuIiBuczE6U1NNX2VsZW1lbnRfaWQ9IklENzQwIiBuczE6ZXZlbnRfdHlwZT0ic29mdHdhcmUgZXJyb3IiIG5zMTpldmVudF9zZXZlcml0eT0iaGlnaCIvPiA8bnMxOkV2ZW50IG5zMTpzcGFjZV9zeXNfb2JqX25hbWU9Im9ic3RhY2xlRm91bmQiIG5zMTpldmVudF9kZXNjcj0iQW4gb2JzdGFjbGUgaGFzIGJlZW4gZGV0ZWN0ZWQgb24gdGhlIGRlZmluZWQgcGF0aC4iIG5zMTpTU01fZWxlbWVudF9pZD0iSUQ3NTAiIG5zMTpldmVudF90eXBlPSJpbmZvcm1hdGlvbiIgbnMxOmV2ZW50X3NldmVyaXR5PSJub3JtYWwiLz4gPC9uczE6U3lzdGVtRWxlbWVudD4gPC9uczE6c3NtPg==",
    "validationType": "large"
}));


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