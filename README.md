# COMP3211 Individual Service

This service will be the second service in the workflow. It accepts a country
name and returns the official capital city of that country. It may return the
capital city in three different formats: plaintext, JSON, and XML. 

## Running
This service is written in javascript on the express.js framework. This
javascript can be run on the Node.js runtime. First ensure the current
command line directory is the root directory of this project. There should be
2 directories (comp3211-cw2, nodebin) and 2 files (run.sh, setup.sh).

The project depends on a number of modules provided by npm. These must be
fetched before the service will run. Use the command `./setup.sh` to fetch
these. 

The service can now be started with `./run.sh`.

Both `run.sh` and `setup.sh` scripts must be executable to run them. If they
are not, `chmod +x run.sh` and `chmod +x setup.sh` will change this.

### Making a request
This service operates by responding to HTTP requests to the root URL of the 
service, for example __http://localhost:3000/__. Requests to all other endpoints
receive an HTTP 404 response.

The service expects the input country to be provided as a named URL parameter,
"country". A valid request looks like the following 
__http://localhost:3000/?country=__ where the name of a country follows the 
equals sign. Country names with special characters and spaces may be specified
with their character escape codes. E.G. " " represented as "%20". The browser
should do this automatically for you.

### Response Formats
The response format is determined by the clients "accept" http header. Where 
a client can accept multiple formats, priority is given in the order XML, 
JSON, plaintext. The response "content-type" header is set, to indicate the
response format type.

