var margin;
var limit;
function SetImagesNumber(num) {
	limit = num * -100 + 100;
    margin = Number(location.search.substring(1)) * -100;
    document.getElementById('slider1').style.marginLeft = margin + "%";

}
function PrevPage() {
	    document.getElementById('slider1').style.transition = ".3s"
    if(margin != 0) {
        margin += 100;
        document.getElementById('slider1').style.marginLeft = margin + "%";
    }
}
function NextPage() {
	    document.getElementById('slider1').style.transition = ".3s"
    if(margin != limit) {
        margin -= 100;
        document.getElementById('slider1').style.marginLeft = margin + "%";
    }
}