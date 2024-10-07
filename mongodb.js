
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'; // Ensure your MongoDB is running on this URL
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.error('Unable to connect to the database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 20
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     consol   e.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Renew inspection'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
