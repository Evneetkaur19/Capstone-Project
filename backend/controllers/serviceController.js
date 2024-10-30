import serviceModel from "../models/serviceModel.js";

// Function to toggle availability status of a service
const changeAvailability = async (req, res) => {
    try {
        const { serviceId } = req.body;

        // Find the service by ID
        const serviceData = await serviceModel.findById(serviceId);
        if (!serviceData) {
            return res.json({ success: false, message: "Service not found" });
        }

        // Toggle the availability status
        await serviceModel.findByIdAndUpdate(serviceId, { available: !serviceData.available });
        
        res.json({ success: true, message: "Availability Changed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function to retrieve all services excluding specific fields
const serList = async (req, res) => {
    try {
        // Retrieve services excluding 'email' and 'slots_booked'
        const services = await serviceModel.find({}).select(['-email', '-slots_booked']); // Adjust excluded fields if needed

        res.json({ success: true, services });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { changeAvailability, serList };
