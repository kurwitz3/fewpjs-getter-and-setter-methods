class Circle{
    constructor(radius){
        this.radius = radius
    }
   set diameter(value){
     this.radius = value / 2
   } 
   set circumference(value){
       this.radius = value -84
   }

    get diameter(){
      return this.radius * 2
    }
    get circumference(){
       return  Math.PI * (this.radius + this.radius)
    }
    get area(){
        return Math.PI * this.radius * this.radius
    }

}