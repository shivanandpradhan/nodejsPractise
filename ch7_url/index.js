
import { URL } from "url";

const url = new URL("https://localhost:8000//student?id=12&name=shiva#12345adfc")

console.log(url)

console.log("href : " +  url.href)
console.log("origin : " + url.origin)
console.log("protocol : " + url.protocol)
console.log("host : " + url.host)
console.log("port : " + url.port)
console.log("pathname : "+ url.pathname)
console.log("search : " + url.search)
console.log("queryString : "+ url.searchParams)
console.log("Hash : " + url.hash)

