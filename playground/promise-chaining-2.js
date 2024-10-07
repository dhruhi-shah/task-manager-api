require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('66ed3701d96a37e53de8e00a').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('66ed3702d96a37e53de8e00c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})