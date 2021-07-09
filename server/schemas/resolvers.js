const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
    Query: {
        // get User by UserName
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({})
                .select('-__v -password')
                .populate('books')
                return userData;
            }
            throw new AuthenticationError('Not logged in')
        },
    },

    Mutation: {
        login:

        addUser:

        saveBook:

        removeBook:
    }
}

module.exports = resolvers;
