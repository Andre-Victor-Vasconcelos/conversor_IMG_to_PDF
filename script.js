function downloadPDF(){
const item = document.querySelector(".Content");

var opt = 
{
   margin:1,
   filename:"arquivo.pdf",
   html2canvas: {scale:2},
   jsPDF: {unit:"in", orientation:"portrait"},
};

html2pdf().set(opt).from(item).save()

}