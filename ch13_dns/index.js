
import dns from 'dns'

// console.log(dns)

dns.lookup("google.com", (err, address, family) => {
    if (err) throw err;
    console.log(address); // ip address...
    console.log(family)  // which family ip belongs -- o/p 4 or 6
})

// resolve method.
dns.resolve("google.com", (err, records) => {
    if (err) throw err;
    console.log(records);
})

// getting mail exchange.
dns.resolve("google.com", "MX", (err, records) => {
    if (err) throw err;
    console.log(records);
})

// getting name server
dns.resolve("google.com", "NS", (err, records) => {
    if (err) throw err;
    console.log(records);
})