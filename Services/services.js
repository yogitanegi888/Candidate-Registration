
const usermodel = require("../mongodb/user")
const response = require("../errorHandeling/errorHandeling");
const validation = require("../validationServices/validation")
class Userservices {
    async createuser(payload, file) {
        try {


            payload = JSON.parse(payload.payload);
            const documents = payload.documents.map((doc, index) => ({ filename: doc.filename, filetype: doc.filetype, file: file[index].filename }));
            const dataSave = new usermodel({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                residentialStreet1: payload.residentialStreet1,
                residentialStreet2: payload.residentialStreet2,
                permanentStreet1: payload.permanentStreet1,
                permanentStreet2: payload.permanentStreet2,
                dateOfBirth: payload.dateOfBirth,
                documents

            })

            await dataSave.save()
            return response.sendSuccess("user details is successfully Created !!")

        } catch (error) {

            return response.Internal_Server_Error("Oops! Something unexpected happened, and we were unable to complete the request.");
        }

    }
}
module.exports = new Userservices()