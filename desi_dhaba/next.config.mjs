/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'us-east-shared-useal-02-graphassets.com',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
