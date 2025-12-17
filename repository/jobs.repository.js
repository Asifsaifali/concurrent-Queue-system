import Job from "../models/jobs.schema.js";

class JobsRepository {

    async createJob(payload){
        try {
            const data = await Job.create(payload)
            return data;
        } catch (error) {
            console.error("Error creating job:", error);
        }
    }
}


export default JobsRepository;