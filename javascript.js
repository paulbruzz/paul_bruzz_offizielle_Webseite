var srcArray = ["haring.png", "berte.jpg", "perugia_angela.jpg", "renaulto.jpg"];
var srcIndex = 0;

function showPreviousMeme(){
  srcIndex--;
  if(srcIndex > 0){
    document.getElementById("currentImage").src = srcArray[srcIndex];
    changeMemeDescription();
  }
  else{
    srcIndex = 0;
    document.getElementById("currentImage").src = srcArray[0];
    changeMemeDescription();
  }
}

function showNextMeme(){
  srcIndex++;
  if(srcIndex < 3){ /*3 is the current length of the array*/
    document.getElementById("currentImage").src = srcArray[srcIndex];
    changeMemeDescription();
  }
  else{
    srcIndex = 3;
    document.getElementById("currentImage").src = srcArray[srcIndex];
    changeMemeDescription();
  }
}

function changeMemeDescription(){
  if(srcIndex == 0){
    document.getElementById("currentDescription").innerHTML = "Ich machte dieses Mem Dezember 2021 mit Inkscape. Es zeigt die berühmte Sprung von Moderator Gerry Scotti auf seinem Tisch während der TV-Programme \"Striscia la Notizia\" (\"Die Nachricht kriecht\" auf Deutsch). Die Szene wurde von mir im Stil von Keith Haring nachgebildet.<br /> Dieses Mem stellt auch dar, mein erster Versuch ein NFT zu minten und verkaufen. Leider hat es niemand bisher noch gekauft.<br />Wenn Sie sich dafür interessieren, können Sie es <a href=\"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70068949567936124839114332039638489542665611398482094006460861083633263312897/\">hier</a> finden."
  }
  else if(srcIndex == 1){
    document.getElementById("currentDescription").innerHTML = "Dieses Mem stammt aus Februar 2019 und zeigt die Sängerin Loredana Bertè, die damals am Sanremo Festival teilnahm, als Hades aus dem Disney-Film <em>Hercules</em>.<br />Die Idee kam mir aufgrund von ihrer blauen Haarfarbe.";
  }
  else if(srcIndex == 2){
    document.getElementById("currentDescription").innerHTML = "Surrealismus, meine Leidenschaft! Ich wandte die Texture des Logos von Perugia Fußballverein auf einem 3D-Modell vom VW Golf an. Im Vorgrund steht TV-Moderator Alberto Angela, der auf das Auto zeigt; im Hintergrund gibt es Grove Street aus <em>GTA San Andreas</em>. Der Text sagt: \"Keine Zeit für Erklärungen, steig im Perugiamobil ein\".";
  }
  else if(srcIndex == 3){
    document.getElementById("currentDescription").innerHTML = "Ein weiteres surrealistisches Mem von mir. Auch dieses Mal machte ich es, indem ich eine Texture auf einem 3D-Modell anwandte. Es zeigt der Sänger Renato Zero \"gemalt\" auf einem Renault Kangoo: er wird daher <em>Renaulto Zero</em> (Renato/Renault). Oben gibt es ein Kommentar vom Journalisten Lorenzo Tosa, der sagt: \"Ich habe Gänsehaut, während ich dieses Bild anschaue. Gänsehaut.\"";
  }
}
