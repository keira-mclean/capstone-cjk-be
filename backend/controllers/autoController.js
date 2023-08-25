const Auto = require("../models/autoModel");


const autoController = {
    findAll: async function (req, res) {
        try {
            //code to only find one result
            const autos = await Auto.aggregate([{ $sample: { size: 1 } }]);
            //original code to find all results
            //const autos = await Auto.find({});
            res.json(autos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },


    post: async function (req, res) {
        try {
            const auto = new Auto(req.body);
            await auto.save();
            res.status(201).json(auto);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}




//example from books controller

function bookController() {

    function post(req, res) {

        const book = new Book(req.body);

        if (!req.body.title) {

            res.status(400);

            return res.send('Title is required');

        }

        book.save();

        res.status(201);

        return res.json(book);

    }

    function get(req, res) {

        const query = {};

        if (req.query.genre) {

            query.genre = req.query.genre;

        }

        Book.find(query, (err, books) => {

            if (err) {

                return res.send(err);

            }

            const returnBooks = books.map((book) => {

                const newBook = book.toJSON();

                newBook.links = {};

                newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`;

                return newBook;

            });

            return res.json(returnBooks);

        });

    }

    return { post, get };

}

//module.exports = booksController;

// end of example

module.exports = autoController;