const CrudRepository=require('./crud-repository');

const { Like }=require('../models');

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findLike(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch(error) {
            throw error;
        }
    }
}

module.exports=LikeRepository;