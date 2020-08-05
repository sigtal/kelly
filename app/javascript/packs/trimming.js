document.addEventListener('turbolinks:load', function(){
  var trimmingStart = document.getElementById("trimmingStart");
  var trimmingTarget = document.getElementById("trimmingTarget");
  var trimming = document.getElementById("trimming");
  var dust = document.getElementById("dust");
  var mini = document.getElementById("mini");
  var zoom = document.getElementById("zoom");
  var move = document.getElementById("move");
  var zoomBorder = document.getElementById("zoomBorder");
  var radioMove = document.getElementById("radioMove");
  var radioZoom = document.getElementById("radioZoom");
  var thumbSize = document.getElementById("thumbSize-post");
  var decision = document.getElementById("decision");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  var notChange = true;
  var notMove = true;
  var edit = false;

  let once = {
      once : true
  };
  trimmingStart.addEventListener("click", function(){
    trimming.style.display = "block";
    if(trimmingTarget.naturalWidth > trimmingTarget.naturalHeight){
      trimmingTarget.style.height = '60%';
    }else if(trimmingTarget.naturalWidth == trimmingTarget.naturalHeight){
      trimmingTarget.style.width = '50%';
    }else{
      trimmingTarget.style.width = '44%';
    }
    dust.style.display = "block";
    dust.style.width = `${trimmingTarget.width}px`;
    dust.style.height = `${trimmingTarget.height}px`;
  dust.addEventListener("mousedown",function(eventStart){
    var blockTop = eventStart.clientY;
    var blockLeft = eventStart.clientX;
    mini.style.display = "block";
    mini.style.top = `${blockTop}px`;
    mini.style.left = `${blockLeft}px`;
    window.addEventListener("mousemove",function createMini(eventEnd){
      var blockBottom = eventEnd.clientY;
      var blockRight = eventEnd.clientX;
      var height = blockBottom - blockTop;
      var width = blockRight - blockLeft;
      if(height >= width){
        mini.style.height = `${width}px`;
        mini.style.width = `${width}px`;
      }else if(height < width){
        mini.style.height = `${height}px`;
        mini.style.width = `${height}px`;
      }
      canvasDraw(mini.style.left,mini.style.top,mini.style.width,mini.style.height);
      window.addEventListener("mouseup",function(){
        window.removeEventListener("mousemove",createMini);
        edit = true;
      });
    });
  },once);
  zoom.addEventListener("click",function changeButton(){
    if(edit){
      zoomBorder.addEventListener("mousedown",function(eventStart){
        if(radioZoom.checked){
          var blockTop = mini.style.top.replace(/[^0-9]/g, '');
          var blockLeft = mini.style.left.replace(/[^0-9]/g, '');
          zoomBorder.style.cursor = "cell";
          zoomBorder.style.opacity = 1;
          window.addEventListener("mousemove",function editZoom(eventEnd){
            var blockBottom = eventEnd.clientY;
            var blockRight = eventEnd.clientX;
            var height = blockBottom - blockTop;
            var width = blockRight - blockLeft;
            if(height >= width){
              mini.style.height = `${width}px`;
              mini.style.width = `${width}px`;
            }else if(height < width){
              mini.style.height = `${height}px`;
              mini.style.width = `${height}px`;
            }
            zoomBorder.style.top = `${parseInt(mini.style.top) + parseInt(mini.style.height)}px`;
            zoomBorder.style.left = `${parseInt(mini.style.left) + parseInt(mini.style.width)}px`;
            canvasDraw(mini.style.left,mini.style.top,mini.style.width,mini.style.height);
            window.addEventListener("mouseup",function(){
              window.removeEventListener("mousemove", editZoom)
              zoomBorder.style.cursor = "nwse-resize";
              zoomBorder.style.opacity = 0.56;
            });
          });
        }
      });
    };
  });
  move.addEventListener("click",function moveButton(){
    if(edit){
      mini.style.cursor = "grab";
      mini.addEventListener("mousedown",function(eventStart){
        if(radioMove.checked){
          mini.style.cursor = "grabbing";
          let shiftX = eventStart.clientX - mini.getBoundingClientRect().left;
          let shiftY = eventStart.clientY - mini.getBoundingClientRect().top;
          mini.addEventListener("mousemove",function editMove(eventEnd){
            var blockTop = eventEnd.clientY;
            var blockLeft = eventEnd.clientX;
            mini.style.top = `${blockTop - shiftY}px`;
            mini.style.left = `${blockLeft - shiftX}px`;
            canvasDraw(mini.style.left,mini.style.top,mini.style.width,mini.style.height);
            mini.addEventListener("mouseup",function(){
              mini.removeEventListener("mousemove", editMove);
              mini.style.cursor = "grab"
            })
          });
        }
      });
    }
  });
  zoom.addEventListener("click",function(){
    if(edit){
      var place = mini.getBoundingClientRect();
      mini.style.cursor = "nwse-resize";
      zoomBorder.style.display = "block"
      zoomBorder.style.top = `${place.bottom}px`;
      zoomBorder.style.left = `${place.right}px`;
      zoom.style.opacity = 1;
      move.style.opacity = 0.56;
    }
  })
  move.addEventListener("click",function(){
    if(edit){
      zoomBorder.style.display = "none";
      move.style.opacity = 1;
      zoom.style.opacity = 0.56;
    }
  })

  function canvasDraw(canvasLeft,canvasTop,canvasWidth,canvasHeihgt){
    var trimmingTargetClient = trimmingTarget.getBoundingClientRect()
    var wpx =  trimmingTarget.naturalWidth / trimmingTarget.width
    var hpx =  trimmingTarget.naturalHeight / trimmingTarget.height
    var left = (canvasLeft.replace(/[^0-9]/g, '') - trimmingTargetClient.left) * wpx;
    var top = (canvasTop.replace(/[^0-9]/g, '') - trimmingTargetClient.top) * hpx;
    var width = canvasWidth.replace(/[^0-9]/g, '') * wpx;
    var height = canvasHeihgt.replace(/[^0-9]/g, '') * hpx;
    canvas.width = width
    canvas.height = height
    ctx.drawImage(trimmingTarget,left,top,width,height,0,0,width,height)
    canvas.style.width = "300px"
    canvas.style.height = "300px"
    thumbSize.value = `${left},${top},${width},${height}`
  }
  });
  decision.addEventListener("click",function(){
    trimming.style.display = "none"
  })
});
