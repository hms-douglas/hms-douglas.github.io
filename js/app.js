/* DECT - 2021*/
function abre(e){window.location.href="https://galaxy.store/"+e}function abreVid(e){$("#video").attr("src","https://www.youtube.com/embed/"+e+"?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;start=10"),$("#modalVid").modal("show")}function abrePopup(){$(".popup").addClass("popupVisivel")}function fechaPopup(){$(".popup").removeClass("popupVisivel"),$("#sugestao").val("")}window.onload=function(){if("pt-BR"!=navigator.language){$("#gratuito").html("Free apps"),$(".botaoVid").html("Video"),$(".botaoImagem").html("Screenshots"),$(".textoBotaoIcone").html("Store"),$("#pagos").html("Paid apps"),$("#tituloSugestao").html("Suggestions"),$(".mensagemSugestoes").html("Leave your idea of application as a suggestion for development:"),$("#salvarSugestaoBotao").html("Save suggestion"),$(".popupMensagem").html("Suggestion saved successfully!");$("#doarTitulo").html("Donate");var e=["Counter","Conversor de bases","Password generator","Flashlight","Recents Shortcut", "Dice", "qrCode","Volume Assistant","FlashlightPlus","My watch","Calc","Calc Widget","Stopwatch","Counter Pro","Launcher","Bubble Launcher","Bubble Launcher 2","Password generator + Widget","Dial","Lyrics", "Speed test" ,"Dice Pro", "My Finances", "qrCode Pro", "Tools", "Bingo", "My Password", "BP Manager", "Dictionary", "My Notes", "Countdown", "Menu Widget", "Glucose Manager", "Calendar Widget", "Currency Converter", "Brushing", "Mood Tracker", "Alarm+", "Tip Calc", "List It", "Weight Manager", "My Battery", "Blood O2 Manager"];$(".nomeCard").each(function(o){this.innerHTML=e[o]})}},$("#salvarSugestaoBotao").on("click",function(){var e=$("#sugestao").val();""!=e&&null!=e&&(abrePopup(),fetch("https://docs.google.com/forms/d/e/1FAIpQLSfUabOBb9jyMHSED-sV2O2aaPA-oO8Z0U2sD_AJd5lSWRTSeA/formResponse?&entry.1767002028="+e+"&submit=SUBMIT",{method:"POST",mode:"no-cors",redirect:"follow",referrer:"no-referrer"}),setTimeout(fechaPopup,2500))}),$(".popupFundo").on("click",fechaPopup),$("#modalVid").on("hide.bs.modal",function(e){$("#video").attr("src","")}),$(".botaoImagem").on("click",function(){var e=$(this).data("index"),o=$(this).data("quant");$("#imagensCarosel").html("");for(var a=document.getElementById("imagensCarosel"),t=0;t<o;t++){var s=document.createElement("div");s.className=0==t?"carousel-item active":"carousel-item";var n=document.createElement("div");n.className="containerPrint";var r=document.createElement("img");r.className="print",r.src="img/prints/"+e+"/"+t+".png",n.appendChild(r),s.appendChild(n),a.appendChild(s)}$("#modalImg").modal("show")});