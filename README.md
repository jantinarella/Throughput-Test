# Throughput-Test

### Prerequisites:

[iPerf3](https://iperf.fr/)

[Node.js](https://nodejs.org/en/)

Two servers one connected via wifi to the LAN and the internet. The second should be wired to the LAN

### Setup:

1. Run iperf3 on the wired server with the -s server parameter.
2. Start the Node.js app on wifi connected server. The node code resides in the throughputApp directory. Use to node app.js to start the server.
3. Point a browser to the index.html file in the throughputUI directory.

### Usage:
In the text box enter the ip for the server running iperf3 in server mode.
Optionally, check the reverse box to run tests in reverse.
Results are displayed with an average throughput as well as individual results for 10 second intervals.

### Description:
The client is written with AngualarJS 1.6 It uses bootstrap and fontawesome for display.
