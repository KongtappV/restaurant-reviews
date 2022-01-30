import axios from "axios";

export default axios.create({
    baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-evuay/service/restaurants/incoming_webhook/",
//   baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/restaurant-review-yzabh/endpoint/",
    headers: {
        "Content-type": "application/json"
    }
});