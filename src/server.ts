import errorHandler from "errorhandler";

import app from "./app";

//import {initModels} from "./models";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());


///(async () => {

    //await initModels.sync({force: true});

    /**
     * Start Express server.
     */
    app.listen(app.get("port"), () => {
        console.log(
            "  App is running at http://localhost:%d in %s mode",
            app.get("port"),
            app.get("env")
        );
        console.log("  Press CTRL-C to stop\n");
    });

//})();