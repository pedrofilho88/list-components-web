export default class Part {
    
    private id: string
    private name: string
    private fabricatordescription?: string
    private partnumber?: string
    private manufacturer: string
    private location?: string
    private description?: string
    private model: string
    private code1: string
    private code2?: string


    constructor( ) {
        this.id = "";
        this.name = "";
        this.fabricatordescription = "";
        this.partnumber = "";
        this.manufacturer = "";
        this.location = "";
        this.description = "";
        this.model = "";
        this.code1 = "";
        this.code2 = "";   
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


public setName(name: string){
    return this.name = name;
}

public setFabricatordescription(fabricatordescription: string){
    return this.fabricatordescription = fabricatordescription;
}

public setParnumber(partnumber: string){
    return this.partnumber = partnumber;
}

public setManufacturer(manufacturer: string){
    return this.manufacturer = manufacturer;
}

public setLocation(location: string){
    return this.location = location;
}

public setDescription(description: string){
    return this.description = description;
}

public setModel(model: string){
    return this.model = model;
}

public setCode1(code1: string){
    return this.code1 = code1;
}

public setCode2(code2: string){
    return this.code2 = code2;
}





}



