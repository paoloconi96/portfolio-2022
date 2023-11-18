/** @type {import('next').NextConfig} */

const {i18n} = require("./next-i18next.config");

const nextConfig = {
    reactStrictMode: true,
    i18n: i18n,
    async redirects() {
        return [
            {
                source: '/resume',
                destination: 'https://drive.google.com/uc?id=15y7Vzi7dSm4Il8I2SVOV2FOZgk8jYXw_&export=download',
                permanent: false,
                basePath: false,
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/paolo-conizzoli',
                permanent: false,
                basePath: false,
            },
            {
                source: '/github',
                destination: 'https://www.github.com/paoloconi96',
                permanent: false,
                basePath: false,
            },
            {
                source: '/g-pm-cert',
                destination: 'https://www.credly.com/badges/bfda175d-7dde-43bb-83ff-e442c105fcaf',
                permanent: false,
                basePath: false,
            },
            {
                source: '/o-jp-cert',
                destination: '/oracle-java-certificate.pdf',
                permanent: false,
                basePath: false,
            },
        ]
    },
}

module.exports = nextConfig
