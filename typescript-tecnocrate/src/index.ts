type obj = {
    a:string;
    b:string;

}

type  myObj = Record<string,string>

const Obj1:myObj = {
    a:"bb",
    b:"aa",
    c:'cc'
    
}

const emptyObject : Record<string,unknown>  = {}