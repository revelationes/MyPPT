function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
window.addEventListener("load", function() {
	revealDiv = document.querySelector("body div.reveal")
	footer = document.getElementById("schauderhaft-footer");
	revealDiv.appendChild(footer);
} );
window.addEventListener("load", function() {
	date = new Date();
	var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	var days = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
	var tanggal = days[date.getDay()] + ", "+ date.getDate() +" "+ months[date.getMonth()] +" "+ date.getFullYear();
	document.getElementById("tgl").innerHTML = tanggal;
} );

window.addEventListener("load", function() {
	loadjscssfile("js/canvas.js", "js");
	loadjscssfile("https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/reset.css", "css");
	loadjscssfile("https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/reveal.css", "css"); 
	loadjscssfile("https://cdn.jsdelivr.net/npm/reveal.js@latest/dist/theme/night.css", "css");
	loadjscssfile("dist/custom.css", "css");
	loadjscssfile("https://cdn.jsdelivr.net/npm/reveal.js@latest/plugin/highlight/monokai.css", "css");
	// Initializing Reveal
	Reveal.initialize({
		hash: true,
		transition: 'zoom',
		katex: {
    version: 'latest',
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
    ],
    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
  },
		plugins: [ RevealMarkdown, RevealHighlight, RevealNotes,RevealMath.KaTeX ]
	});
});	

