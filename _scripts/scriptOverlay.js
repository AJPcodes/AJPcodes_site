//function to pop up interest page photos with an overlay

(function () {
   
    //select interests Node
    var targetNode = document.querySelector('.interestList');
    
    //listen for click
    targetNode.addEventListener('click', function (e) {
        
        if (e.target.tagName === 'IMG') {
            
            var overlay = document.createElement('div');
            overlay.id = 'overlay';
            document.body.appendChild(overlay);
            
            
        //resize to fit window
            overlay.style.height = window.innerHeight + 'px';
            overlay.style.width = window.innerWidth + 'px';
            overlay.style.top = window.pageYOffset + 'px';
            overlay.style.left = window.pageXOffset + 'px';
            overlay.style.top = window.pageYOffset + 'px';
            overlay.style.position = "absolute";
             overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
            
            var imgSrc = e.target.src;
            var largeImage = document.createElement('img');
            largeImage.id = 'largeImage';
            largeImage.src = imgSrc;
            largeImage.display = 'block';
            largeImage.position = 'absolute';
            
        //check image loaded and resize    
            largeImage.addEventListener('load', function () {
            
            //resize if too tall// 
                if (this.height > window.innerHeight) {
                    this.ratio = window.innerHeight / this.height;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                
                }
        
            //resize if too wide// 
                if (this.width > window.innerWidth) {
                    this.ratio = window.innerWidth / this.width;
                    this.height = this.height * this.ratio;
                    this.width= this.width * this.ratio;
                
                }
        
        var myDifX = (window.innerWidth - this.width) /2;
        var myDifY = (window.innerHeight - this.height) /2;
        
        this.style.paddingTop = myDifY + 'px';
        this.style.paddingLeft = myDifX + 'px';   
        overlay.appendChild(largeImage);
        
            });//image has loaded
            
            largeImage.addEventListener('click', function () {
                
                if (overlay) {
                 overlay.parentElement.removeChild(overlay);   
                }
                
                
            }, false) //close the overlay 
            
            window.addEventListener('scroll', function() {
                
                if (overlay) {
                overlay.style.top = window.pageYOffset + 'px';
                overlay.style.left = window.pageXOffset + 'px';
                
                }
            }, false )
            
             window.addEventListener('resize', function() {
                
                if (overlay) {
                overlay.style.height = window.innerHeight + 'px';
                overlay.style.width = window.innerWidth + 'px';
                overlay.style.top = window.pageYOffset + 'px';
                overlay.style.left = window.pageXOffset + 'px';
                
                //resize if too tall// 
                if (largeImage.height > window.innerHeight) {
                    var ratio = window.innerHeight / largeImage.height;
                    largeImage.height = largeImage.height * ratio;
                    largeImage.width = largeImage.width * ratio;
                
                } 
        
            //resize if too wide// 
                 if (largeImage.width   > window.innerWidth) {
                    var ratio = window.innerWidth / largeImage.width;
                    largeImage.height = largeImage.height * ratio;
                    largeImage.width = largeImage.width * ratio;
                
                }
                  
                    
                    
                var myDifX = (window.innerWidth - largeImage.width) /2;
                var myDifY = (window.innerHeight - largeImage.height) /2;
        
                largeImage.style.paddingTop = myDifY + 'px';
                largeImage.style.paddingLeft = myDifX + 'px';
                    
                }
            }, false )
            
            
            
            } //check target is an image
        
    }, false);//image is clicked
      
    
})();//self executing function
