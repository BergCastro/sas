const TesteFisico = require('./testeFisico')
const errorHandler = require('../common/errorHandler')

TesteFisico.methods(['get', 'post', 'put', 'delete'])
TesteFisico.updateOptions({new: true, runValidators: true})
TesteFisico.after('post', errorHandler).after('put', errorHandler)

TesteFisico.route('count', (req, res, next) => {
    TesteFisico.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


module.exports = TesteFisico