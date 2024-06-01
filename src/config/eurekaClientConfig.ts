import AppConstants from "../constants/AppConstants";

const Eureka = require("eureka-js-client").Eureka;

const eurekaClient = new Eureka({
  instance: {
    app: AppConstants.ORGANIZATION_SERVICE,
    hostName: "organization-service.bef24bd.kyma.ondemand.com",
    ipAddr: "127.0.0.1",
    status: "UP",
    port: {
      $: 8085,
      "@enabled": true,
    },
    vipAddress: AppConstants.ORGANIZATION_SERVICE,
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    host: "3.229.47.37",
    port: 8761,
    servicePath: "/eureka/apps",
  },
});

export default eurekaClient;
