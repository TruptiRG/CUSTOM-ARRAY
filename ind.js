function myArrayt(){
    this.length=arguments.length;

    for(let i=0;i<this.length;i++)
    {
        this[i]=arguments[i];
    }
}

let t1=new myArrayt(1,2,3);

myArrayt.prototype.pushT=function(value){
    let index=this.length;
    this[index]=value;
    this.length++;
};

myArrayt.prototype.popT=function(){
    let index=this.length;
    delete(index);
    this.length--;
};

myArrayt.prototype.topT=function(){
    console.log("Top element is",this.length);
};
myArrayt.prototype.printT=function(){
    let index=this.length;
    let bag="";
    for(let i=0;i<index;i++){
        bag+=this[i]+" ";
    }
    console.log("Elements are:",bag);
};
myArrayt.prototype.printReverseT=function(){
    let index=this.length;
    let bag="";
    for(let i=index-1;i>=0;i--){
        bag+=this[i]+" ";
    }
    console.log("Reverse is:",bag);
};
myArrayt.prototype.sizeT=function(){
    console.log("Size is",this.length);

};

t1.topT();
t1.sizeT();
t1.printT();
t1.printReverseT();
t1.pushT("Trupti");
t1.popT();
console.log("t1:",Object.values(t1));

