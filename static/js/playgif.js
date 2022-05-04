/* This script swaps the .png ending in an image source with .gif to turn a static image
   into the associated gif, and swap back to static image */
$(document).ready(function()//preload images
{ $(".img-swap").each(function () {$.ajax({url: this.src})})})
jQuery(function(){
 $(".img-swap").live('click', function() {
 	if ($(this).attr("class") == "img-swap") { this.src = this.src.replace(".png",".gif"); } 
	else {this.src = this.src.replace(".gif",".png");	}
	$(this).toggleClass("on");});});