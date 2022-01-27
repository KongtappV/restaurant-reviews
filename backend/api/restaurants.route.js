import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
router.
    route("/reviews")
    .post(ReviewCtrl.apiPostReview)
    .put(ReviewCtrl.apiUpdateReview)
    .delete(ReviewCtrl.apiDeleteReview)

export default router