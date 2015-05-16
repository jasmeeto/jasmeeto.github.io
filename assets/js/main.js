window.addEventListener('load', setPdf, false);

function setPdf(){
  var pdf = document.getElementById("pdf-resume");

  if (pdf){
    pdf.style.height = pdf.offsetWidth * 13/5 + 'px';
  }
  else{
    return false;
  }

  window.onresize = function(event) {
    setPdf();
  }
}