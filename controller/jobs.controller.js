import JobsRepository from "../repository/jobs.repository.js";

const jobsRepository = new JobsRepository();

async function createJob(req, res) {
    try {
        const payload = req.body;
        const data = await jobsRepository.createJob(payload)
        return res.status(201).json({
            data: data,
            message: "Job created successfully",
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}


export { createJob }