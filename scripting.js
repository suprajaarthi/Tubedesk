// var mp3Btn = document.getElementById('mp3');

// var mp4Btn = document.getElementById('mp4');

// var URLinput = document.querySelector('.URLinput');

var URL = document.getElementById("URL");

var format = document.getElementById("format");

var mp3 = document.getElementById("mp3");

var mp4 = document.getElementById("mp4");

// const quality = document.getElementById("quality");

var server = 'http://localhost:4000';



// mp3Btn.addEventListener('click', () => {

//   console.log(URL: ${URLinput.value});  

//   redirectMp3(URLinput.value);

// });





// mp4Btn.addEventListener('click', () => {

//   console.log(URL: ${URLinput.value});  

//   redirectMp4(URLinput.value);

// });



function redirectMp3(query) {

  window.location.href = `${server}/downloadmp3?url=${query}`;

}




function redirectMp4(query) {

  window.location.href = `${server}/downloadmp4?url=${query}`;

}


function toggleCheck() {

  if(document.getElementById('format').checked === true){
     document.getElementById('format').value = 'MP3';
  } else{
     document.getElementById('format').value = 'MP4';
  }
}

function download()

{
if(URL.value!="")
  {console.log("This is working!!");

   if(format.value=="MP4")

    {console.log(`URL: ${URL.value}`);  

    redirectMp4(URL.value);
    alert("This is MP4");}

  else

    {console.log(`URL: ${URL.value}`);  

    redirectMp3(URL.value);

    alert("This is MP3");}
}
else
alert("Please enter an URL");
    //alert("Please choose format");
}  

