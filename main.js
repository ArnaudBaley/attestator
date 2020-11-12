function generatePdf(){
    // https://github.com/MrRio/jsPDF
    // http://raw.githack.com/MrRio/jsPDF/master/docs/module-html.html
    const { jsPDF } = window.jspdf;
 
    const doc = new jsPDF();
    
    // html method depends on html2canvas library.
    doc.html(document.body, {
        callback: function (doc) {
          doc.save();
        },
        x: 10,
        y: 10
     });
}