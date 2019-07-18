

function getData(url){

  var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("txtHint").innerHTML = this.responseText;
        getDatas(this.responseText);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}


function tabData(names){
  var url1 = 'http://itunes.apple.com/search?term='+names+'&limit=1'
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getTabData(this.responseText);
      }
    };
    xmlhttp.open("GET", url1, true);
    xmlhttp.send();    
}

// getData(url);

function getDatas(d){
  const artisetData = JSON.parse(d);
  var tabs = '';
  for(i=0;i<artisetData.results.length;i++){
    if(i==0){
      tabs += '<li class="nav-item"><a onclick="tabData(\''+artisetData.results[i].artistName+'\')" class="nav-link active" data-toggle="tab" href="#Jack'+i+'">Jack</a></li>';
    } else{
      tabs += '<li class="nav-item"><a onclick="tabData(\''+artisetData.results[i].artistName+'\')" class="nav-link" data-toggle="tab" href="#Jack'+i+'">Jack</a></li>';
    }
   
  }
  $("#searchBtn,#modalBox").hide();
  $("#tabSec").show();
  document.getElementById("tabDisplay").innerHTML = tabs;  
}

function getTabData(d){
  const artisetData = JSON.parse(d);
  var tabsData = '';
  for(j=0;j<artisetData.results.length;j++){
    if(j==0){
      tabsData += '<div class="tab-pane active container" id="Jack'+j+'"><p>Artist Name:'+artisetData.results[j].artistName+'</p><p>Track:'+artisetData.results[j].trackName+'</p><img src="'+artisetData.results[j].artworkUrl30+'" /></div>';
    }
    else {
      tabsData += '<div class="tab-pane container" id="Jack'+j+'"><p>Artist Name:'+artisetData.results[j].artistName+'</p><p>Track:'+artisetData.results[j].trackName+'</p><img src="'+artisetData.results[j].artworkUrl30+'" /></div>';
    }
    
  }
  $("#searchBtn,#modalBox").hide();
  $("#tabSec").show();
  document.getElementById("tabDataDisplay").innerHTML = tabsData;
  
}


function btnOnClick() {
  var artistName = document.getElementById("artistName").value;
  var tracks = document.getElementById("tracks").value;
  var url = 'http://itunes.apple.com/search?term='+artistName+'&limit='+tracks;
  var data = getData(url);
}

function openModal(){
  $("#modalBox").show();
  $("#searchBtn").hide();
}
function closeModal(){
  $("#searchBtn").show();
  $("#modalBox").hide();
}