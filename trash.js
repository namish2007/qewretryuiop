class dustbin{
    constructor(x,y,width,height){
        var options = {
            density : 1.5,    
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
   this.height = height;
   
   World.add(world,this.body);
    }
    display(){
        var post2 = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(post.x,post.y,post.width,post.height);
        pop();
    }
};