const Services = require("../Services/services")

class Controller {
    async createUser(req, res) {
        let payload = req.body;
        let file = req.files
        let result = await Services.createuser(payload, file);
        res.json(result);

    }

}
module.exports = new Controller()