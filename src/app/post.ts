export class Post {
    eventId: number;
    begin: Date;
    end: Date;
    creationDate: Date;
    isActive: Boolean;
    constructor(obj?: any){
        this.eventId = obj && obj.eventId || null;
        this.begin = obj && obj.begin || null;
        this.end = obj && obj.end || null;
        this.creationDate = obj && obj.creationDate || null;
        this.isActive = obj && obj.isActive || null;
    }
}
