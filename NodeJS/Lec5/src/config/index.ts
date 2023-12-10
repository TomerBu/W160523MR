import { config } from "dotenv";

// new function
const configDotEnv = () => {
    // load the main/general .env file
    config({path: "src/config/.env"});

    const mode = process.env.NODE_ENV; //dev|test|prod

    config({ path: `src/config/${mode}.env` });
};

// export the function
export default configDotEnv;
// export the function
export { configDotEnv };


// import {configDotEnv} from 'src/config'