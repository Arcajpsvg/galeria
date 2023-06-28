export default class ArchitectureDTO{
id;
name;
description;
constructionYear;
author;
location;

    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.constructionYear = data.constructionYear;
        this.author = data.author;
        this.location = data.location;

    }

}