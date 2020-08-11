(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{aEsM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("Fcif"),r=a("+I+c"),s=(a("mXGw"),a("/FXl")),o=a("TjRS"),i=(a("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/director/storage.mdx"}});var c={_frontmatter:i},l=o.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"dummy"},"Dummy"),Object(s.b)("p",null,"Is the default driver and it does nothing - snapshots won't be saved."),Object(s.b)("p",null,"Set the environment variable to define the screenshots driver."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'SCREENSHOTS_DRIVER="../screenshots/dummy.driver"\n')),Object(s.b)("h2",{id:"aws-s3"},"AWS S3"),Object(s.b)("p",null,"The driver generates upload URLs for S3 bucket. When set up properly the following will happen when each test suite finishes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"cypress agent reports to ",Object(s.b)("inlineCode",{parentName:"li"},"director")," what videos and / or failed tests screenshots are availabe."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"director")," uses AWS credentials to generate",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"a temporary signed URL for each screenshot / video"),Object(s.b)("li",{parentName:"ul"},"a read URL is saved to associated test results"))),Object(s.b)("li",{parentName:"ul"},"cypress agent uses the temporary URL to upload the assets"),Object(s.b)("li",{parentName:"ul"},"dashboard uses the read URL to display video / screenshots")),Object(s.b)("h3",{id:"setup"},"Setup"),Object(s.b)("p",null,"Please make sure that ",Object(s.b)("a",{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",parentName:"p"},"AWS credentials")," with proper access to invoke ",Object(s.b)("a",{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property",parentName:"p"},Object(s.b)("inlineCode",{parentName:"a"},"s3.getSignedUrl"))," are available in the environment."),Object(s.b)("h3",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"You can customize certain aspects of how ",Object(s.b)("inlineCode",{parentName:"p"},"director")," handles upload and read URLs generation by setting up environment variables."),Object(s.b)("h4",{id:"screenshots_driver"},Object(s.b)("inlineCode",{parentName:"h4"},"SCREENSHOTS_DRIVER")),Object(s.b)("p",null,"Defines what screenshot driver to use. In order to use S3 driver set value:"),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},'SCREENSHOTS_DRIVER="../screenshots/s3.driver"\n')),Object(s.b)("h4",{id:"s3_bucket"},Object(s.b)("inlineCode",{parentName:"h4"},"S3_BUCKET")),Object(s.b)("p",null,"Set the bucket name to store the asset. There's no default value, you have to set it before using the driver."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},'S3_BUCKET="your_bucket_name"\n')),Object(s.b)("h4",{id:"s3_region"},Object(s.b)("inlineCode",{parentName:"h4"},"S3_REGION")),Object(s.b)("p",null,"AWS region, default value is ",Object(s.b)("inlineCode",{parentName:"p"},'"us-east-1"')),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},'S3_REGION="us-east-1"\n')),Object(s.b)("h4",{id:"s3_acl"},Object(s.b)("inlineCode",{parentName:"h4"},"S3_ACL")),Object(s.b)("p",null,"ACL settings that for new S3 items. The default value is ",Object(s.b)("inlineCode",{parentName:"p"},'"public-read"'),". Read more about ",Object(s.b)("a",{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html",parentName:"p"},"S3 ACL"),"."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},'S3_ACL="public-read"\n')),Object(s.b)("h4",{id:"s3_read_url_prefix"},Object(s.b)("inlineCode",{parentName:"h4"},"S3_READ_URL_PREFIX")),Object(s.b)("p",null,"The URL prefix to use when reading the screenshots / video. The default value is ",Object(s.b)("inlineCode",{parentName:"p"},"https://${S3_BUCKET}.s3.amazonaws.com/${key}"),"."),Object(s.b)("p",null,"Setting ",Object(s.b)("inlineCode",{parentName:"p"},"S3_READ_URL_PREFIX")," to ",Object(s.b)("inlineCode",{parentName:"p"},"http://example.com")," will change the generated URL to ",Object(s.b)("inlineCode",{parentName:"p"},"https://example.com/${key}"),"."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},"S3_READ_URL_PREFIX=<null>\n")),Object(s.b)("h2",{id:"minio-driver"},"Minio Driver"),Object(s.b)("p",null,"Thanks @StefanS-O for contributing minio driver!"),Object(s.b)("p",null,"See ",Object(s.b)("a",{href:"https://github.com/agoldis/sorry-cypress/blob/master/docker-compose.minio.yml",parentName:"p"},Object(s.b)("inlineCode",{parentName:"a"},"docker-compose.minio.yml"))," for ready-to-use sorry-cypress configuration that uses locally hosted Minio as a storage layer."),Object(s.b)("p",null,"To run on the local machine, edit your ",Object(s.b)("inlineCode",{parentName:"p"},"/etc/hosts")," file to allow cypress agents discover the local instance of minio"),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-sh",parentName:"pre"},"127.0.0.1 storage\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Warning!")," The example ",Object(s.b)("inlineCode",{parentName:"p"},"docker-compose.minio.yml")," deletes existing buckets, so please test - or remove from the docker file after first run!"),Object(s.b)("p",null,"You should be able to change the environment variables according to your Minio setup. Please refer to the default values at ",Object(s.b)("a",{href:"https://github.com/agoldis/sorry-cypress/blob/master/packages/director/src/screenshots/minio/config.ts",parentName:"p"},Object(s.b)("inlineCode",{parentName:"a"},"src/screenshots/minio/config.ts")),"."),Object(s.b)("p",null,"The available minio configuration resembles S3 storage driver configruation."),Object(s.b)("p",null,"Treat your Minio keys and secrets AWS credentials and hide them."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/director/storage.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-director-storage-mdx-3496db25d6652f4c93f2.js.map