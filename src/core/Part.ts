export default class Part {
    
    private id: string
    private name: string
    private fabricatordescription: string
    private partnumber: string
    private manufacturer: string
    private location: string
    private description: string
    private model: string
    private code1: string
    private code2: string


    constructor( 
        id: string, name: string, fabricatordescription: string, partnumber: string,
        manufacturer: string, location: string, description: string, model: string,
        code1: string, code2: string        
    ) {

        this.id = id;
        this.name = name;
        this.fabricatordescription = fabricatordescription;
        this.partnumber = partnumber;
        this.manufacturer = manufacturer;
        this.location = location;
        this.description = description;
        this.model = model;
        this.code1 = code1;
        this.code2 = code2;   
}

public setId(id: string){
    this.id = id;
}

public getId(){
    return this.id;
}
    
public getName() {
    return this.name;
}
public getFabricatordescription(){
    return this.fabricatordescription;
}
public getParnumber(){
    return this.partnumber;
}

public getManufacturer(){
    return this.manufacturer;
}

public getLocation(){
    return this.location;
}
public getDescription(){
    return this.description;
}
public getModel(){
    return this.model;
}
public getCode1(){
    return this.code1;
}
public getCode2(){
    return this.code2;
}


}
