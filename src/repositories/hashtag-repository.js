const CrudRepository=require('./crud-repository');

const { Hashtag }=require('../models');

class HashtagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            throw error;
        }
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            throw error;
        }
    }
}

module.exports=HashtagRepository;