function createImg()
 {
  var images = ["images/1.jpg","images/2.png","images/3.png", "images/4.png"];
  var oltag = document.getElementById("dian");
  var divtag = document.getElementById("change"); 
  for (var i = 0; i < images.length; i++)
  {
  if (i == 0)
  {
   document.getElementById("one").src = images[i];
  }
  else
  {
   var li = document.createElement("li");
   li.setAttribute("data-target", "#ad-carousel");
   li.setAttribute("data-slide-to",""+(i+1));
   oltag.appendChild(li);


   var div = document.createElement("div");
   div.className = "item";
   var a = document.createElement("a");
   var img = document.createElement("img");
   img.src = images[i];
   a.appendChild(img);
   div.appendChild(a);
   divtag.appendChild(div);
  }
  }
 }
