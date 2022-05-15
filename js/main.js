/* DECT - 2022*/
const e=document.getElementById("playerPopUp"),t=document.getElementById("popUp");var n,o,l,s=!0,c=0;function a(e){var t=document.getElementById("splashScreen");t.style.display="block",$(".language").removeClass("selected"),"pt-BR"===e?(l=ptBR,document.getElementById("pt-BR").classList.add("selected")):(l=enUS,document.getElementById("en-US").classList.add("selected"));var n=document.querySelectorAll(".link");for(key in n.forEach(function(e,t){e.innerHTML=l.links[t]}),document.getElementById("introduce").innerHTML=l.introduce,document.getElementById("hello").innerHTML=l.hello,document.getElementById("abstract").innerHTML=l.abstract,document.getElementById("abstract2").innerHTML=l.abstract2,document.getElementById("nameInput").placeholder=l.placeName,document.getElementById("messageInput").placeholder=l.placeMessage,document.getElementById("send").innerHTML=l.btnSend,document.getElementById("pill_all").innerHTML=l.pillAll,$(".btnImage").html(l.btnImage),$(".btnAccess").html(l.btnAccess),$(".btnVideo").html(l.btnVideo),l.quickDescription)try{document.getElementById(key).innerHTML=l.quickDescription[key]}catch(e){}t.classList.add("hide"),setTimeout(function(){t.classList.remove("hide"),t.style.display="none"},450),location.hash="#HOME",location.hash="#home"}function d(){$("#btnSideBar").toggleClass("open"),$("#sideBarMenu").toggleClass("open"),$("#navbar").toggleClass("open"),$("#btnSideBar").hasClass("open")?$("html").css({overflow:"hidden"}):$("html").removeAttr("style")}function i(){var n=document.getElementById("nameInput"),o=document.getElementById("emailInput"),l=document.getElementById("messageInput");if(t.style.display="block",t.className="open",location.hash="#CONTACT",$("html").css({overflow:"hidden"}),l.value.trim().length<1)e.load("../json/error.json"),setTimeout(function(){navigator.vibrate([200,5,200])},2200),setTimeout(function(){document.getElementById("messageInput").style.borderWidth="3px",setTimeout(function(){document.getElementById("messageInput").style.borderWidth="0px"},2e3)},3550);else{e.load("../json/success.json"),setTimeout(function(){navigator.vibrate([500])},2100);var s="Nome<"+n.value+"> Email<"+o.value+"> Mensagem<"+l.value+">";fetch("https://docs.google.com/forms/d/e/1FAIpQLSfUabOBb9jyMHSED-sV2O2aaPA-oO8Z0U2sD_AJd5lSWRTSeA/formResponse?&entry.1767002028="+s+"&submit=SUBMIT",{method:"POST",mode:"no-cors",redirect:"follow",referrer:"no-referrer"}),setTimeout(function(){n.value="",o.value="",l.value=""},3550)}setTimeout(function(){t.className="close",setTimeout(function(){t.style.display="none",e.load("")},300),$("html").removeAttr("style")},3500)}window.onload=function(){"#policy"===location.hash?(document.title="Privacy Policy",$("body div").not("#policy").remove(),$("script").remove()):($("#policy").remove(),a(navigator.language),document.getElementById("btnSideBar").addEventListener("click",d),document.getElementById("send").addEventListener("click",i),$(".link").on("click",function(){s=!1;var e="#"+$(this).data("goto");location.hash=e,location.hash=e.toLocaleLowerCase(),$(".link").removeClass("active"),$(this).addClass("active"),$("#btnSideBar").is(":visible")&&d()}),$(window).scroll(function(){if(s){const t=$(window).height(),n=$(window).scrollTop(),o=t-100,l=2*t-100;var e=1;n>l?e=3:n>o&&(e=2),$(".link").removeClass("active"),$(".link:nth-child("+e+")").addClass("active"),location.hash=$(".link:nth-child("+e+")").data("goto").toLowerCase()}else setTimeout(function(){s=!0},500)}),$(".btnAccess").on("click",function(){var url=(($(this).get(0).hasAttribute("data-playstore"))?"https://play.google.com/store/apps/details?id=dev.dect.":"https://galaxy.store/")+$(this).data("url");window.open(url,"_blank")}),$(".pill").on("click",function(){var e=this.id;$(".pill").removeClass("selected"),document.getElementById(e).classList.add("selected"),document.getElementById("containerProjects").className=e.replace("pill_","")}),$(".btnImage").on("click",function(){const e=this.previousElementSibling.id.replace("t","");n=parseInt(this.dataset.num),c=0,document.getElementById("carousel").style.display="block";var t=document.getElementById("screenshots");t.innerHTML="";for(var l=0;l<n;l++){var s=document.createElement("img");s.className="screenshot"+(0===l?" show":""),s.src="img/screenshot/"+e+"/"+l+".png",t.appendChild(s)}document.getElementById("carousel").className="open "+this.parentElement.parentElement.className.replace("card ",""),$("html").css({overflow:"hidden"}),o=document.querySelectorAll(".screenshot")}),document.getElementById("close").addEventListener("click",function(){document.getElementById("carousel").style.display="none",document.getElementById("carousel").className="",$("html").removeAttr("style")}),document.getElementById("previous").addEventListener("click",function(){o[c].classList.remove("show"),c=-1==--c?n-1:c,o[c].classList.add("show")}),document.getElementById("next").addEventListener("click",function(){o[c].classList.remove("show"),c=++c===n?0:c,o[c].classList.add("show")}),$(".btnVideo").on("click",function(){document.getElementById("youtube").style.display="block",$("#videoYoutube").attr("src","https://www.youtube.com/embed/"+this.dataset.vid+"?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;start=10"),document.getElementById("youtube").className="open",$("html").css({overflow:"hidden"})}),document.getElementById("closeYoutube").addEventListener("click",function(){document.getElementById("youtube").style.display="none",document.getElementById("youtube").className="",$("#videoYoutube").attr("src",""),$("html").removeAttr("style")}),$(".language").on("click",function(){a(this.id)}))};