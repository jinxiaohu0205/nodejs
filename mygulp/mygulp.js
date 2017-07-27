class mygulp{
    constructor(){
        this.taskinfo={};
    }
    task(taskname,fn){
        this.taskinfo[taskname]=fn;
    }
    run(taskname,fn){
        this.taskinfo[this.argv]=fn;
    }
}

module.exports=new mygulp();