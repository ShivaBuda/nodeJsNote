const os = require("os");
// Get the OS platform & User info
// Returns the operating system platform (e.g., 'win32', 'linux', 'darwin') and user information (e.g., username, home directory).

console.log("Platform:", os.platform());
console.log("User Info:", os.userInfo());

// Get the OS architecture
// Returns the operating system architecture (e.g., 'x64', 'arm64').
console.log("CPU Architecture:", os.arch());

// Get free system memory
// Returns the amount of free system memory in bytes.
console.log("Free Memory:", os.freemem());

// Get total system memory
// Returns the total amount of system memory in bytes.
console.log("Total Memory:", os.totalmem());

// Get system uptime
// Returns the system uptime in seconds.
console.log("System Uptime:", os.uptime());

// Get home directory
// Returns the home directory of the current user.
console.log("Home Directory:", os.homedir());

// Get system hostname
// Returns the hostname of the operating system.
console.log("Hostname:", os.hostname());

// Get network interfaces
// Returns the network interfaces and their addresses.
console.log("Network Interfaces:", os.networkInterfaces());

// Get system load average
// Returns the system load average for the last 1, 5, and 15 minutes.
console.log("Load Average:", os.loadavg());

// Get system temporary directory
// Returns the path to the temporary directory.
console.log("Temporary Directory:", os.tmpdir());

// Get system CPU information
// Returns an array of objects containing information about each CPU core.
console.log("CPU Information:", os.cpus());

// Get system endianness
// Returns the endianness of the CPU (e.g., 'BE' for big-endian, 'LE' for little-endian).
console.log("Endianness:", os.endianness());

// Get operating system name
// Returns the name of the operating system (e.g., 'Linux', 'Windows_NT').
console.log("OS Name:", os.type());
