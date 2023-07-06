const CrudRepository=require('./crud-repository');

const { Hashtag }=require('../models');

class HashtagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }
}

module.exports=HashtagRepository;