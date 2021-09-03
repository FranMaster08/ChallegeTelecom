const localsIp ={
    '1':'186.138.212.208',
    '127.0.0.1':'186.138.212.208'
}


const getIp =(req)=>{
    if(!req.ip)return
    let ip = (req.headers["x-forwarded-for"] || "").split(",")[0] ||
    req.connection.remoteAddress.split(":").pop();
    return localsIp[ip]?localsIp[ip]:ip
}

module.exports = getIp