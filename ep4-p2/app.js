import React from "react";
import ReactDOM from "react-dom/client";

/**
 * -
 * @returns
 * Header
 *  -Logo
 *  -Nav Item
 * Body
 *  -search
 *  -Resturand container
 *    -Resturand Card
 *      -Img
 *      -Name of resturand, star rating, cusine, delivery time
 * Footer
 *    -Copyright
 *    - Links
 *    -Address
 *    -Contact
 */

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "816700",
          name: "Poornachandra Restaurant",
          city: "1",
          slugs: {
            restaurant: "poornachandra-restaurant-jp-nagar-jp-nagar-2",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/3a4904f0-4ead-4f63-b324-aa0a5ee8a527_816700.jpg",
          address:
            "#725, 1st Floor, BHANASHANKARI ARCADE, RBI  LAYOUT, PHASE 7, J.P. NAGAR,  BENGALURU , BTM Layout, B.B.M.P South,  Karnataka-560078",
          locality: "JP Nagar",
          areaName: "JP nagar",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Indian", "Chinese", "Thalis", "Beverages"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "1.7K+",
          promoted: true,
          adTrackingId:
            "cid=25874976~p=0~adgrpid=25874976#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=816700~st=restaurant~eid=7d764b75-c55a-4c1e-9c7b-25a7552ce584~srvts=1740822509256",
          sla: {
            deliveryTime: 63,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 9.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "9.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹499",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.7",
              ratingCount: "319",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "25874976",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant","adTrackingId":"cid=25874976~p=0~adgrpid=25874976#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=816700~st=restaurant~eid=7d764b75-c55a-4c1e-9c7b-25a7552ce584~srvts=1740822509256"}',
          objectValue: "816700",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "816700",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "39368",
          name: "Imperial Restaurant Since 1954",
          city: "1",
          slugs: {
            restaurant: "imperial-restaurant-koramangala-6th-block-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "bc2f7e70b995b4095617b21adcde553b",
          address: "# 47, 6TH CROSS, 6TH BLOCK, KORAMANGALA BANGALORE 560095",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "Biryani",
            "Tandoor",
            "Kerala",
            "South Indian",
            "Chinese",
            "Beverages",
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "20K+",
          sla: {
            deliveryTime: 27,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "25-30 MINS",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "2.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "39368",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "39368",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "11841",
          name: "Srinathji's Restaurant ( Taste the Nectar )",
          city: "1",
          slugs: {
            restaurant:
              "srinathjis-the-taste-of-nectar-indiranagar-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId: "xsjcuhuxmppkvuenywxx",
          address:
            "No 4 Ground Floor Subedar Garden , Sri Krishna Temple Road, Next To Hundai Service Station, Indiranagar  Bengaluru - 560038",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: [
            "North Indian",
            "Indian",
            "Chinese",
            "Continental",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "11K+",
          promoted: true,
          adTrackingId:
            "cid=25877337~p=1~adgrpid=25877337#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=11841~st=restaurant~eid=c52b4a72-b943-4539-9237-7268bb30c3db~srvts=1740822509256",
          sla: {
            deliveryTime: 67,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "2.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "25877337",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant","adTrackingId":"cid=25877337~p=1~adgrpid=25877337#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=11841~st=restaurant~eid=c52b4a72-b943-4539-9237-7268bb30c3db~srvts=1740822509256"}',
          objectValue: "11841",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "11841",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "35186",
          name: "Savoury Restaurant",
          city: "1",
          slugs: {
            restaurant: "savoury-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "917f828567b485833c8bc6a1ed3cb2ad",
          address:
            "86, Hosur Rd, Zuzuvadi, Madiwala, 1st Stage, BTM Layout 1, Bengaluru, Karnataka 560034",
          locality: "1st Stage",
          areaName: "Btm Layout",
          costForTwo: "45000",
          costForTwoMessage: "₹450 FOR TWO",
          cuisines: [
            "Arabian",
            "Indian",
            "Chinese",
            "Tandoor",
            "Biryani",
            "Seafood",
            "Kerala",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "28K+",
          sla: {
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "25-30 MINS",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "35186",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "35186",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "210945",
          name: "Royal Restaurant",
          city: "1",
          slugs: {
            restaurant: "royal-restaurant-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId: "yicweopn4lzcjlqy4jvq",
          address:
            "Broadway Road Police Station, Hkp Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
          locality: "Shivaji Nagar",
          areaName: "Central Bangalore",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Biryani", "Chinese", "North Indian", "Tandoor"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "11K+",
          promoted: true,
          adTrackingId:
            "cid=25877687~p=2~adgrpid=25877687#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=210945~st=restaurant~eid=ea255309-86d8-46c3-afbb-3758b5ade6fa~srvts=1740822509256",
          sla: {
            deliveryTime: 79,
            minDeliveryTime: 75,
            maxDeliveryTime: 80,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "75-80 MINS",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.6",
              ratingCount: "964",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "25877687",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant","adTrackingId":"cid=25877687~p=2~adgrpid=25877687#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=210945~st=restaurant~eid=ea255309-86d8-46c3-afbb-3758b5ade6fa~srvts=1740822509256"}',
          objectValue: "210945",
          impressionObjectName: "impression-restaurant-sld-ad",
          clickObjectName: "click-restaurant-sld-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "210945",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "69773",
          name: "The Chariot Veg Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "the-chariot-veg-restaurant-brigade-road-junction-test-prod-area",
            city: "bangalore",
          },
          cloudinaryImageId: "afeudaggh9atd3p0t3kj",
          address: "30, Residency Road (@ ), Bangalore - 560 025",
          locality: "Brigade Road",
          areaName: "Brigade Road",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "Chinese",
            "South Indian",
            "North Indian",
            "Desserts",
            "Punjabi",
          ],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "914",
          sla: {
            deliveryTime: 72,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.7",
              ratingCount: "1.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "69773",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "69773",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "429712",
          name: "Le Arabia Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "le-arabia-restaurant-jalahalli-peenya-jalahalli-peenya",
            city: "bangalore",
          },
          cloudinaryImageId: "aejnqulemg3ml4ceqo7x",
          address:
            "No 60, 60 Feet Road, Behind Sukh Sagar Hotel,5Th Block,Koramangala,B.B.M.P South,Karnataka-560034",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "Arabian",
            "North Indian",
            "Chinese",
            "Beverages",
            "Ice Cream",
          ],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "2.6K+",
          promoted: true,
          adTrackingId:
            "cid=25884434~p=3~adgrpid=25884434#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=429712~st=restaurant~eid=9722431b-9fd6-4ad0-bcf4-af2ec0469a3f~srvts=1740822509256",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "FREE ITEM",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "25884434",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant","adTrackingId":"cid=25884434~p=3~adgrpid=25884434#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=429712~st=restaurant~eid=9722431b-9fd6-4ad0-bcf4-af2ec0469a3f~srvts=1740822509256"}',
          objectValue: "429712",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "429712",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "803647",
          name: "Thalassery Restaurant",
          city: "1",
          slugs: {
            restaurant: "thalassery-restaurant-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "c042a369f7173fe47bf8855fc47c0903",
          address:
            "GROUND FLOOR, NO 143, KHB COLONY, KORAMANGALA EXTENSION, BANGALORE, B.B.M.P South, Karnataka-560095",
          locality: "Nagar Nigam Food Safety Zone 14",
          areaName: "Koramangala",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Kerala", "Biryani"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.3K+",
          sla: {
            deliveryTime: 19,
            minDeliveryTime: 15,
            maxDeliveryTime: 20,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "15-20 MINS",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹45",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "803647",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "803647",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1371",
          name: "Hotel Savitha Family Restaurant",
          city: "1",
          slugs: {
            restaurant: "hotel-savitha-family-restaurant-4th-block-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "711abd2480bd9338518a25e3f1643ace",
          address:
            "#72/33B, 80Ft Road, Green Leaf Layout, 4Th Block, Koramangala",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "39900",
          costForTwoMessage: "₹399 FOR TWO",
          cuisines: ["South Indian", "Biryani", "Chinese"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "64K+",
          promoted: true,
          adTrackingId:
            "cid=25877293~p=4~adgrpid=25877293#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1371~st=restaurant~eid=0523f294-5824-4037-9a92-252ed1a0a642~srvts=1740822509256",
          sla: {
            deliveryTime: 24,
            minDeliveryTime: 20,
            maxDeliveryTime: 25,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "20-25 MINS",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.7",
              ratingCount: "1.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "25877293",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant","adTrackingId":"cid=25877293~p=4~adgrpid=25877293#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1371~st=restaurant~eid=0523f294-5824-4037-9a92-252ed1a0a642~srvts=1740822509256"}',
          objectValue: "1371",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "1371",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "537139",
          name: "Narmada Chain of Restaurant",
          city: "1",
          slugs: {
            restaurant: "narmada-group-of-hotels-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "gmcud4kfjsy2kf2bbrme",
          address:
            "No. 4, 1st Main Road, 5Th Block, Beside Coffee Day, Koramangala, Bangalore 560095",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Biryani", "Andhra", "South Indian"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 21,
            minDeliveryTime: 20,
            maxDeliveryTime: 25,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "20-25 MINS",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "2.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "537139",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "537139",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "67683",
          name: "Park View Restaurant",
          city: "1",
          slugs: {
            restaurant: "park-view-restaurant-phase-iii-j-p-nagar-jp-nagar",
            city: "bangalore",
          },
          cloudinaryImageId: "di0xkmiv9ke5xsldn98y",
          address:
            "5/B, 9Th Cross, 1st Main, Opp Mini Forest, Phase Iii, J P Nagar, Bengaluru, Karnataka 560078",
          locality: "JP Nagar",
          areaName: "JP Nagar",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "South Indian",
            "Chinese",
            "North Indian",
            "Beverages",
            "Desserts",
            "Juices",
            "Biryani",
            "Chaat",
            "Ice Cream",
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "30K+",
          promoted: true,
          adTrackingId:
            "cid=25885250~p=6~adgrpid=25885250#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=67683~st=restaurant~eid=6a45527d-ef4e-44e2-9632-f32ad9979656~srvts=1740822509256",
          sla: {
            deliveryTime: 60,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "4.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "25885250",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant","adTrackingId":"cid=25885250~p=6~adgrpid=25885250#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=67683~st=restaurant~eid=6a45527d-ef4e-44e2-9632-f32ad9979656~srvts=1740822509256"}',
          objectValue: "67683",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "67683",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "539442",
          name: "INDUS FAMILY RESTAURANT",
          city: "1",
          slugs: {
            restaurant: "indus-family-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "pajnqiil97fzqq641pt6",
          address:
            "Aicobo Nagar, 1st Stage, Btm Layout, Bengaluru, Karnataka 560029",
          locality: "BTM Layout",
          areaName: "BTM Layout",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Snacks", "Indian", "Biryani"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "589",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "539442",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "539442",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "367311",
          name: "Chicken County Restaurant",
          city: "1",
          slugs: {
            restaurant: "chicken-county-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "5d45edff4df225bc51335d91fc9d12e7",
          address:
            "Restaurant Address - # 13, Bannergatta Main Road, Opposite To Spar Hyper Market, Bangalore  560029",
          locality: "Bannerghatta Road",
          areaName: "BTM Layout",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: [
            "Indian",
            "Tandoor",
            "Biryani",
            "Grill",
            "Kebabs",
            "Chinese",
            "Andhra",
            "Arabian",
            "Seafood",
          ],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "4.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "367311",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "367311",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "25117",
          name: "1947 Restaurant",
          city: "1",
          slugs: {
            restaurant: "1947-jayanagar-jayanagar",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/3bc75080-e98a-4f99-be54-0f298285ccb7_25117 (1).jpg",
          address:
            "No.282, 3rd Floor, 15th Cross Road, JP Nagar 5th Phase, Bangalore - 560078",
          locality: "JP Nagar",
          areaName: "JP Nagar",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: [
            "North Indian",
            "Chinese",
            "Desserts",
            "Biryani",
            "Continental",
          ],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "3.8K+",
          sla: {
            deliveryTime: 69,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 7.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "7.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "9.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "25117",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "25117",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "777481",
          name: "THALASSERY RESTAURANT",
          city: "1",
          slugs: {
            restaurant: "thalassery-restaurant-n-cafe-indiranagar-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId: "b1aa2652be42f0885340b0b58d134875",
          address:
            "THALASSERY RESTAURANT OLD NO.001,NEW NO.1/A,KATHA NO.74-14-1/A 86-4-19/2,GROUND FLOOR,BUILDING KNOWN  AS MADISON,SITUATED AT KODIHALLI,OLD  AIRPORT ROAD,INDIRA NAGAR,BANGALORE,  B.B.M.P East, Karnatak",
          locality: "BBMP East",
          areaName: "Indiranagar",
          costForTwo: "39900",
          costForTwoMessage: "₹399 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "404",
          sla: {
            deliveryTime: 46,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "777481",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "777481",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "330996",
          name: "Savoury Seashell Restaurant - Kerala Style",
          city: "1",
          slugs: {
            restaurant: "savoury-seashell-restaurant-kerala-style-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "134015e074c8776c3c4872e3384c6aa4",
          address:
            "No 28, 1st  main road, 1st  cross behind SVR Complex, Maruthi Nagar, BTM Layout, South Bangalore 560068",
          locality: "Maruti Nagar",
          areaName: "Btm Layout",
          costForTwo: "45000",
          costForTwoMessage: "₹450 FOR TWO",
          cuisines: [
            "Arabian",
            "Indian",
            "Chinese",
            "Tandoor",
            "Biryani",
            "Seafood",
            "Kerala",
          ],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "5.0K+",
          sla: {
            deliveryTime: 28,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "25-30 MINS",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "330996",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "330996",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "793205",
          name: "Kuttanad Restaurant",
          city: "1",
          slugs: {
            restaurant: "kuttanad-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "0c51bc0d7b21255f1ba211d6ba06cd71",
          address:
            "GROUND FLOOR, NO 143, KHB COLONY, KORAMANGALA EXTENSION, BANGALORE, B.B.M.P South, Karnataka-560095",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Kerala", "Biryani", "Seafood"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.0K+",
          sla: {
            deliveryTime: 21,
            minDeliveryTime: 20,
            maxDeliveryTime: 25,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "20-25 MINS",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹45",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "187",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "793205",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "793205",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "371178",
          name: "Mallu family Restaurant",
          city: "1",
          slugs: {
            restaurant: "mallu-family-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "twhsskeixjvv6kxwbutr",
          address:
            "43/1, Chocolate Factory Rd, Tavarekere, Cashier Layout, Tavarekere, BTM Layout, Bengaluru, Karnataka 560029, India",
          locality: "Chocolate Factory Road",
          areaName: "Btm Layout",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Kerala", "Chinese", "Arabian", "South Indian"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "877",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 2.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35-40 MINS",
            lastMileTravelString: "2.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "371178",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "371178",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "436350",
          name: "Nandanam Restaurant",
          city: "1",
          slugs: {
            restaurant: "nandanam-restaurant-arekere-arekere",
            city: "bangalore",
          },
          cloudinaryImageId: "xyabtge77bltvbdzzpqw",
          address:
            "NO 32 SRK PARADISE OPP VIJAYA SPRING WOOD APARTMENT MANIPAL COUNTRY ROAD SINGASANDRA , Bommanahalli , B.B.M.P South, Karnataka - 560068",
          locality: "Singasandra",
          areaName: "Bommanahalli",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: [
            "Kerala",
            "Biryani",
            "Andhra",
            "Indian",
            "Arabian",
            "Desserts",
            "Beverages",
            "Snacks",
            "Seafood",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "4.5K+",
          sla: {
            deliveryTime: 56,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 7.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "7.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "436350",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "436350",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "527034",
          name: "Sea Meen Restaurant",
          city: "1",
          slugs: {
            restaurant: "sea-meen-restaurant-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "arslytdjtyynq0wquott",
          address:
            "No.410, 1st 'A' Cross, 7th block, kormangala, Bangalore-560095",
          locality: "7th Block",
          areaName: "Koramangala",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Seafood",
            "Coastal",
            "North Indian",
            "Chinese",
            "Tandoor",
          ],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "191",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "527034",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "527034",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "991568",
          name: "PARKVIEW RESTAURANT",
          city: "1",
          slugs: {
            restaurant: "parkview-restaurant-indiranagar-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/5f0fa005-33e4-4bc3-b003-53b7b275ef8a_991568.JPG",
          address: "Shop No : 1 , Floor :  , 1 , ",
          locality: "Indiranagar",
          areaName: "M G Road",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "45",
          sla: {
            deliveryTime: 70,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "991568",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "991568",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "793210",
          name: "Aattutheeram Kerala Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "aattutheeram-kerala-restaurant-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "7dad18ba53a7f5fd4df728f9173ad706",
          address:
            "GROUND FLOOR, NO 143, KHB COLONY, KORAMANGALA EXTENSION, BANGALORE, B.B.M.P South, Karnataka-560095",
          locality: "Thippiah Layout",
          areaName: "Koramangala",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: [
            "Kerala",
            "Biryani",
            "Chinese",
            "Snacks",
            "Seafood",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "645",
          sla: {
            deliveryTime: 28,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "25-30 MINS",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹45",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "793210",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "793210",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "979759",
          name: "Imperio Restaurant",
          city: "1",
          slugs: {
            restaurant: "imperio-restaurant-btm-btm-2",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/18/052d362d-bcf2-4473-86eb-148a41acb75b_979759.jpg",
          address:
            "Shop No : No. 7 , Floor : G Floor , Hosur Main Road, Opp.to NEXUS Mall, Koramangala , ",
          locality: "5th Block",
          areaName: "Koramangala",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Biryani",
            "Kebabs",
            "South Indian",
            "Tandoor",
            "Beverages",
            "Ice Cream",
            "North Indian",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "595",
          sla: {
            deliveryTime: 38,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35-40 MINS",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹949",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "979759",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "979759",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "894146",
          name: "Udupi Park",
          city: "1",
          slugs: {
            restaurant: "udupi-park-arekere-arekere",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/9/66c68b98-9f96-40f4-8d45-a25045ac1dff_894146 (1).jpg",
          address:
            "Shop No : 191outerring rd , Floor :  , Teachers colony santhosapuram sec6 hsr , ",
          locality: "Madiwala",
          areaName: "Arekere",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "South Indian"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "39",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 4.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "4.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "894146",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "894146",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "769775",
          name: "Nahdi Mandi Restaurant",
          city: "1",
          slugs: {
            restaurant: "nahdi-mandi-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "8e82f6e42f5e5bde0649f1f8f48209d8",
          address:
            "Ground Floor,51/3,Gowra Infra&Ameer Heritage Building,Madiwala Underpass,Opposite Madiwala Police Station,Bengalur,Bengaluru Urbun,Karnataka,560068, Btm Layout, B.B.M.P South, Karnataka-560068",
          locality: "BTM Layout",
          areaName: "BTM Layout",
          costForTwo: "45000",
          costForTwoMessage: "₹450 FOR TWO",
          cuisines: ["Biryani", "Arabian"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "5.6K+",
          sla: {
            deliveryTime: 39,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35-40 MINS",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "4.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "769775",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "769775",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "687207",
          name: "Haldiram's Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "haldiram’s-restaurant-bellandur-sarjapur-bellandur-sarjapur",
            city: "bangalore",
          },
          cloudinaryImageId: "1abb89624b491497c8cff182d95ac457",
          address:
            "No.53/2, Sl. No.319, Doddakannelli Village, Varthur Hobli, Bangalore East Taluk Bangalore, Bangalore East, Bangalore Urban, Karnataka-560035",
          locality: "Doddakannelli Village",
          areaName: "Sarjapur Road",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "North Indian",
            "South Indian",
            "Biryani",
            "Chinese",
            "Chaat",
            "Thalis",
            "Bakery",
            "Sweets",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "3.8K+",
          sla: {
            deliveryTime: 65,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 8.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "8.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "687207",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "687207",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "10212",
          name: "Hotel Tom's Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "hotel-toms-restaurant-hosur-main-road-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId: "s4khfhdh0h06d9kjeilr",
          address:
            "Tom'S Restaurant 002, Raheja Chancery, Brigade Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025",
          locality: "Brigade Road",
          areaName: "Central Bangalore",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "Mangalorean",
            "Biryani",
            "Seafood",
            "Chinese",
            "North Indian",
            "Desserts",
            "South Indian",
          ],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "33K+",
          sla: {
            deliveryTime: 72,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "1.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "10212",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "10212",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1012811",
          name: "H R Gujarati Restaurant",
          city: "1",
          slugs: {
            restaurant: "h-r-gujarati-restaurant-indiranagar-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/23/8d5b8813-112b-4517-aba5-1949edee4d19_1012811.jpg",
          address:
            "#4, 15th Main, Bescom, Indiranagar, Bangalore North, Bengaluru,. Lakshmipura, Bangalore North, Bangalore Urban, Karnataka-560008 ,Lakshmipura,Bangalore North,Bangalore Urban,Karnataka-560008\t",
          locality: "Bescom",
          areaName: "Indiranagar",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Gujarati"],
          avgRating: 3.1,
          feeDetails: {},
          avgRatingString: "3.1",
          totalRatingsString: "7",
          sla: {
            deliveryTime: 71,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "1012811",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "1012811",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "527585",
          name: "Sendhoor Nataraaj Restaurant",
          city: "1",
          slugs: {
            restaurant: "sendhoor-nataraaj-restaurant-indiranagar-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId: "npardg5j0y4xcb6licl4",
          address:
            "48/4, Someshvarapura Layout, Jogupalya, Bengaluru, Karnataka 560008, India",
          locality: "Jogupalya",
          areaName: "Halasuru",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Snacks", "Biryani"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "834",
          sla: {
            deliveryTime: 59,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "527585",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "527585",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "757592",
          name: "Haldirams Restaurant & Sweets",
          city: "1",
          slugs: {
            restaurant: "haldiram's-restaurant-basavanagudi-basavanagudi",
            city: "bangalore",
          },
          cloudinaryImageId: "1abb89624b491497c8cff182d95ac457",
          address:
            "Plot No.75, Ground Floor, Vani Vilas Road, Gandhi Bazar, Basavanagudi, Bangalore, Chamarajapete , B.B.M.P South, Karnataka-560004",
          locality: "Basavanagudi",
          areaName: "Basavanagudi",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "South Indian",
            "Biryani",
            "Chinese",
            "Chaat",
            "Thalis",
            "Bakery",
            "Sweets",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.3K+",
          sla: {
            deliveryTime: 59,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 7.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "7.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "2.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "757592",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "757592",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "55737",
          name: "Kairali Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "kairali-restaurant-bellandursarjapur-bellandursarjapur",
            city: "bangalore",
          },
          cloudinaryImageId: "w2njkszhutztndhl9xld",
          address:
            "32/21 Near Maruti Showroom Outer Ring Road Belladur Bangalore",
          locality: "Bellandur",
          areaName: "Bellandur",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "South Indian",
            "Kerala",
            "Seafood",
            "Beverages",
            "Indian",
            "Chinese",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "9.2K+",
          sla: {
            deliveryTime: 64,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "55737",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "55737",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "811581",
          name: "Queen's Restaurant",
          city: "1",
          slugs: {
            restaurant: "queens-restaurant-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/46401214-b3f5-4c68-bf41-4219c8cec2c7_811581 (1).jpg",
          address:
            "NO 52/2 2ND FLOOR, THIRD FLOOR AND FOURTH FLOOR SUJAYS PRIDE CHURCH STREET BANGALORE, Shivajinagara, B.B.M.P East, Karnataka-560001",
          locality: "Church Street",
          areaName: "Central Bangalore",
          costForTwo: "59900",
          costForTwoMessage: "₹599 FOR TWO",
          cuisines: ["North Indian", "Punjabi", "Tandoor"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "196",
          sla: {
            deliveryTime: 66,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 5.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "5.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹29",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "284",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "811581",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "811581",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "967968",
          name: "A One Family Restaurant",
          city: "1",
          slugs: {
            restaurant: "a-one-family-restaurant-arekere-arekere",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/4/d278909f-3c32-488e-aa2d-9726c59621c9_967968.jpg",
          address:
            "Shop No : No 141 , Floor : Ground , Kanaka Tower , Manipal County Road Aishwarya Crystal Layout, Begur, Bengaluru, Karnataka 560068, India 560068",
          locality: "Kanaka Tower",
          areaName: "Arekere",
          costForTwo: "39900",
          costForTwoMessage: "₹399 FOR TWO",
          cuisines: ["North Indian", "Chinese"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "116",
          sla: {
            deliveryTime: 63,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 8.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "8.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹250 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "967968",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "967968",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "401276",
          name: "Inchara Hotel And Fine Dining Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "inchara-hotel-and-fine-dining-restaurant-jp-nagar-jp-nagar",
            city: "bangalore",
          },
          cloudinaryImageId: "kxzsarzfw5j6szlboxf4",
          address:
            "No 22/1, Krishna Building, Puttenahalli Main Road, J P Nagar 6th Main, Bangalore, BTM Layout, B B M P South (Karnataka)- 560076",
          locality: "JP Nagar",
          areaName: "JP Nagar",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: ["Indian", "Chinese", "Tandoor"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "892",
          sla: {
            deliveryTime: 69,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 7.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "7.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "7.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "401276",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "401276",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "798771",
          name: "Bindu Restaurant",
          city: "1",
          slugs: {
            restaurant: "bindu-restaurant-kudlu-gate-kudlu-gate",
            city: "bangalore",
          },
          cloudinaryImageId: "6a6b4ae3151e97a08c2196caf1936313",
          address:
            "VJQW+XRJ, Kudlu Main Rd, BTR Gardens, AECS Layout - A Block, Hal Layout, Singasandra, Bengaluru, Karnataka 560068, India",
          locality: "Jawahar Nagar",
          areaName: "Kudlu Gate",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "North Indian", "South Indian"],
          avgRating: 3.4,
          feeDetails: {},
          avgRatingString: "3.4",
          totalRatingsString: "36",
          sla: {
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "7.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "798771",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "798771",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "755849",
          name: "Taj Restaurant",
          city: "1",
          slugs: {
            restaurant: "taj-restaurant-basavanagudi-basavanagudi-2",
            city: "bangalore",
          },
          cloudinaryImageId: "2e8b7c92ed62835cfebd1671d4d8c527",
          address:
            "NR Road, Jayanagar, Kalasipalyam New Extension, Kalasipalya, Bengaluru, Karnataka 560002",
          locality: "Jayanagar",
          areaName: "Basavanagudi",
          costForTwo: "19800",
          costForTwoMessage: "₹198 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "33",
          sla: {
            deliveryTime: 66,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 7.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "7.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "755849",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "755849",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "879396",
          name: "New Delicacy Chinese Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "new-delicacy-chinese-restaurant-cv-raman-nagar-cv-raman-nagar",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/7abecb1f-7c20-4546-9e69-fb64e7119ae7_879396 SS.jpg",
          address:
            "Shop No : No 124 , Floor :  , New Delicacy Chinese Restaurant , ",
          locality: "opposite 6th E Cross Road",
          areaName: "CV Raman Nagar",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "344",
          sla: {
            deliveryTime: 64,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 10.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "10.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "879396",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "879396",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "53918",
          name: "Kamat Restaurant",
          city: "1",
          slugs: {
            restaurant: "kamat-restaurant-city-market-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId: "mr6iadvolayztwrn5ekk",
          address: "Unity Buildings, J C Road Bengaluru 560002",
          locality: "J C Road",
          areaName: "Central Bangalore",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Chinese", "North Indian", "South Indian", "Sweets"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.1K+",
          sla: {
            deliveryTime: 76,
            minDeliveryTime: 75,
            maxDeliveryTime: 80,
            lastMileTravel: 6.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "75-80 MINS",
            lastMileTravelString: "6.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "53918",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "53918",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "455590",
          name: "Suman North Indian Restaurant",
          city: "1",
          slugs: {
            restaurant: "suman-north-indian-restaurant-hsr-hsr",
            city: "bangalore",
          },
          cloudinaryImageId: "mpeljr9lepnqrtt1a4hq",
          address: "No 30/31, 1st Cross Rupena Agrahara Bommanahalli Banglore",
          locality: "Roopena Agrahara",
          areaName: "HSR Layout",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "149",
          sla: {
            deliveryTime: 57,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "455590",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "455590",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "802406",
          name: "Jagadhguru Basaveshwara Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "jagadhguru-basaveshwara-restaurant-malleshwaram-malleshwaram",
            city: "bangalore",
          },
          cloudinaryImageId: "91cc3ef8d30bdc8ead1d16bd5449ef42",
          address: "JAGADHGURU BASAVESHWARA",
          locality: "Malleshwaram",
          areaName: "Gandhi nagar majestic",
          costForTwo: "22900",
          costForTwoMessage: "₹229 FOR TWO",
          cuisines: ["South Indian", "Thalis", "Indian"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "17",
          sla: {
            deliveryTime: 83,
            minDeliveryTime: 80,
            maxDeliveryTime: 85,
            lastMileTravel: 8.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "80-85 MINS",
            lastMileTravelString: "8.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "802406",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "802406",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "371099",
          name: "Pavana Restaurant",
          city: "1",
          slugs: {
            restaurant: "prakash-&-co.-(pavana-restaurant)-majestic-majestic",
            city: "bangalore",
          },
          cloudinaryImageId: "odmfipzay2vski7cbtba",
          address:
            "NO.88/3, RBDGT CHARITY BUILDING, NEAR CITY RAILWAY STATION, MAJESTIC, BANGALORE. ,Malleshwaram ,B.B.M.P North,Karnataka-560003",
          locality: "Majestic",
          areaName: "NEAR CITY RAILWAY STATION",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Indian", "Chinese", "Tandoor", "Thalis"],
          avgRating: 3,
          feeDetails: {},
          avgRatingString: "3.0",
          totalRatingsString: "15",
          sla: {
            deliveryTime: 83,
            minDeliveryTime: 80,
            maxDeliveryTime: 85,
            lastMileTravel: 10,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "80-85 MINS",
            lastMileTravelString: "10.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_3",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "371099",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "371099",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "81810",
          name: "Tharavadu family restaurant",
          city: "1",
          slugs: {
            restaurant: "tharavadu-family-restaurant-hsr-hsr",
            city: "bangalore",
          },
          cloudinaryImageId: "nkgmotigo3crhistijm4",
          address:
            "1st FLOOR, NO.116/1, HOSUR MAIN ROAD, MANGAMMANAPALYA CROSS, BOMMANAHALLI , Bommenahalli , Bangalore South, Bangalore Urban, Karnataka-560068",
          locality: "Hosur Main Road",
          areaName: "Bommanahalli",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Kerala", "Seafood", "Biryani", "South Indian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "24K+",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Coastal.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "81810",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "81810",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "493997",
          name: "Royal Savera Family Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "royal-savera-family-restaurant-frazer-town-frazer-town",
            city: "bangalore",
          },
          cloudinaryImageId: "i5ghdidvhqf8qvfngs6m",
          address: "67, M M Road, Frazer Town, Bangalore , 560005",
          locality: "Pulikeshi Nagar",
          areaName: "Frazer Town",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["North Indian", "Snacks", "Chinese", "Arabian"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "176",
          sla: {
            deliveryTime: 75,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 10,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "10.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "493997",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "493997",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1007933",
          name: "Anmay Foods - Andhra Style Restaurant",
          city: "1",
          slugs: {
            restaurant: "anmay-foods---andhra-style-restaurant-hsr-hsr",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/5890575e-90f8-4135-a7b7-8cc683332a48_1007933.jpg",
          address:
            "1St Floor, 2631, 27Th Main Rd, Pwd Quarters, 1St Sector, Hsr Layout, Bengalore, Karnataka",
          locality: "Hsr Layout",
          areaName: "Hsr Layout",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "Andhra",
            "Biryani",
            "South Indian",
            "Chinese",
            "North Indian",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "407",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "466",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "1007933",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "1007933",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "49281",
          name: "Priyadarshini Restaurant",
          city: "1",
          slugs: {
            restaurant: "priyadarshini-restaurant-majestic-majestic",
            city: "bangalore",
          },
          cloudinaryImageId: "ssfmvbnb4vjjqnvi4302",
          address: "262, Subedar Chatram Road, Gandhinagar, Bangalore 560009",
          locality: "Majestic",
          areaName: "Malleshwaram",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["South Indian", "Desserts", "Fast Food"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "9.9K+",
          sla: {
            deliveryTime: 74,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 8.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "8.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "5.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "49281",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "49281",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "947579",
          name: "Shills Restaurant",
          city: "1",
          slugs: {
            restaurant: "shills-restaurant-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/26/ec830418-e0b4-4b01-bf87-433dc1607334_947579.jpg",
          address:
            "No. 48 , Ground And Mezzanine Floor, M.S Complex, Mosque Rd, Frazer Town, Bengaluru, Karnataka",
          locality: "Frazer Town",
          areaName: "Frazer Town",
          costForTwo: "80000",
          costForTwoMessage: "₹800 FOR TWO",
          cuisines: ["Chinese", "Arabian"],
          avgRating: 4.7,
          feeDetails: {},
          avgRatingString: "4.7",
          totalRatingsString: "27",
          sla: {
            deliveryTime: 77,
            minDeliveryTime: 75,
            maxDeliveryTime: 80,
            lastMileTravel: 9.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "75-80 MINS",
            lastMileTravelString: "9.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "923",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "947579",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "947579",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "764164",
          name: "Dynasty Lounge Bar & Restaurants",
          city: "1",
          slugs: {
            restaurant:
              "dynasty-lounge-bar-&-restaurants-basavanagudi-basavanagudi",
            city: "bangalore",
          },
          cloudinaryImageId: "16400d2141cb4bc16ac6b79edfb89298",
          address:
            "Sabharwal Residency KFC Building, No 90 KH, Double Rd, Raja Ram Mohanroy Extension, Sudhama Nagar, Bengaluru, Karnataka 560027, India",
          locality: "Basavanagudi",
          areaName: "Sudham Nagar",
          costForTwo: "75000",
          costForTwoMessage: "₹750 FOR TWO",
          cuisines: ["North Indian", "Asian", "Chinese", "Pizzas", "Kebabs"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "42",
          sla: {
            deliveryTime: 70,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "764164",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "764164",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "130367",
          name: "New Alameen Restaurant",
          city: "1",
          slugs: {
            restaurant: "new-alameen-hotel-test-prod-area",
            city: "bangalore",
          },
          cloudinaryImageId: "798b19819589967e88d9bb122bca439c",
          address: "No 22 Bazaar Street Halasuru Bangalore 560008",
          locality: "Ulsoor",
          areaName: "Central Bangalore",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Kerala",
            "briyani",
            "Kebabs",
            "Indian",
            "South Indian",
            "rolls",
          ],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "4.3K+",
          sla: {
            deliveryTime: 68,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 6.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "6.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.1",
              ratingCount: "53",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "130367",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "130367",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "655740",
          name: "Castle Multicuisine Restaurant",
          city: "1",
          slugs: {
            restaurant: "castle-multicuisine-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "86397b9b9e4eae643559c3b03526b8c2",
          address:
            "7(Old No. 13), 20th Main, Maruthi Nagar Main Rd, Old Madiwala, Maruti Nagar, Venkateshwara Layout, BTM 1st Stage, Bengaluru, Karnataka 560068, India",
          locality: "1st Stage",
          areaName: "BTM Layout",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["North Indian", "Biryani", "Chaat", "Continental"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "930",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "655740",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "655740",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "107119",
          name: "Shahi Family Restaurant",
          city: "1",
          slugs: {
            restaurant: "shahi-family-restaurant-ulsoor",
            city: "bangalore",
          },
          cloudinaryImageId: "egsq5g5debmsqhclhy4x",
          address: "NO.12/1, SWAMY VIVEKANANDA, ULSOOR BANGALORE",
          locality: "Swamy Vivekananda",
          areaName: "Ulsoor",
          costForTwo: "29900",
          costForTwoMessage: "₹299 FOR TWO",
          cuisines: [
            "Kerala",
            "Biryani",
            "Kebabs",
            "Indian",
            "South Indian",
            "rolls",
          ],
          avgRating: 3.6,
          feeDetails: {},
          avgRatingString: "3.6",
          totalRatingsString: "2.0K+",
          sla: {
            deliveryTime: 73,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 6.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "6.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "107119",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "107119",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "947460",
          name: "AL-ZAITOON RESTAURANT & GRILLS",
          city: "1",
          slugs: {
            restaurant:
              "al-zaitoon-restaurant-&-grills-basavanagudi-basavanagudi",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/26/08ce22ee-e6d8-44e9-8604-907203686066_947460.JPG",
          address:
            "Shop No : 18/1 , Floor : G Floor , WELLINGTON STREET, RICHMOND TOWN, BANGLAORE , ",
          locality: "RICHMOND TOWN",
          areaName: "Central Bangalore",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Biryani", "Tandoor"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "180",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "947460",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "947460",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "201886",
          name: "Bareerah Multicuisine Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "bareerah-multicuisine-restaurant-starbucks-cbd-starbucks-cbd",
            city: "bangalore",
          },
          cloudinaryImageId: "c0cmgyseukl2ovywm8qo",
          address: "125/1, Dispensary Road, Shiva Nagar Bangalore",
          locality: "Commercial Street",
          areaName: "Central Bangalore",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Chinese", "Continental", "Indian", "Arabian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.5K+",
          sla: {
            deliveryTime: 82,
            minDeliveryTime: 80,
            maxDeliveryTime: 85,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "80-85 MINS",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "201886",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "201886",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "61282",
          name: "Utsav Restaurant",
          city: "1",
          slugs: {
            restaurant: "utsav-restaurant-banashankari-banashankari",
            city: "bangalore",
          },
          cloudinaryImageId: "omjftr7ugjeslvbqiils",
          address:
            "No. 38 /A Mount Joy Road, Hanumanthnagar, Behind Bms College Hostel, Bangalore",
          locality: "Banashankari",
          areaName: "Basavanagudi",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese", "North Indian", "Punjabi"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "5.2K+",
          sla: {
            deliveryTime: 70,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 9.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "9.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹19",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "1.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "61282",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "61282",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "303828",
          name: "BreakTime Restaurant",
          city: "1",
          slugs: {
            restaurant: "breaktime-restaurant-&-cafe-mahadevpura-mahadevpura",
            city: "bangalore",
          },
          cloudinaryImageId: "zreubknfmkufbzy0ys5m",
          address:
            "Krishnappa Building  Next to SBI Yemalur Main Road Marthahalli Colony PO Bangalore-560037",
          locality: "Marathahalli",
          areaName: "Marathahalli",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Kerala", "Biryani", "Chinese"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "818",
          sla: {
            deliveryTime: 77,
            minDeliveryTime: 75,
            maxDeliveryTime: 80,
            lastMileTravel: 10.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "75-80 MINS",
            lastMileTravelString: "10.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "594",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "303828",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "303828",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "374110",
          name: "Ranga Restaurant",
          city: "1",
          slugs: {
            restaurant: "ranga-restaurant-kadubeesanahalli-kadubeesanahalli",
            city: "bangalore",
          },
          cloudinaryImageId: "wzezmc7xjghfnqifql8x",
          address:
            "22, Kariyammana Agrahara Rd, Kadubeesanahalli, Bellandur, Bengaluru, Karnataka 560017, India",
          locality: "Kariyammana Agrahara Road",
          areaName: "Bellandur",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Biryani", "Chinese"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "3.6K+",
          sla: {
            deliveryTime: 61,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 9.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "9.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "374110",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "374110",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "69997",
          name: "SLV Corner Restaurant",
          city: "1",
          slugs: {
            restaurant: "slv-corner-restaurant-basavanagudi-basavanagudi",
            city: "bangalore",
          },
          cloudinaryImageId: "vpp0p2bjtxr3qnis6zug",
          address:
            "No 79/4,Slv Corner Vani Vilas Road,Basavanagudi Bangalore-560004\t",
          locality: "Basavanagudi",
          areaName: "Basavanagudi",
          costForTwo: "45000",
          costForTwoMessage: "₹450 FOR TWO",
          cuisines: ["Chinese", "South Indian", "Desserts"],
          avgRating: 4.7,
          feeDetails: {},
          avgRatingString: "4.7",
          totalRatingsString: "17K+",
          sla: {
            deliveryTime: 55,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 7.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "7.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "15K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "69997",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "69997",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "24843",
          name: "Fattoush Restaurant",
          city: "1",
          slugs: {
            restaurant: "fattoush-bannerghatta-road-jp-nagar",
            city: "bangalore",
          },
          cloudinaryImageId: "g9iabda78bypcg6ksb5p",
          address:
            "Fattoush Restaurant, Opp. Iimb, Above A2B Restaurant, Jp Nagar, Banarghatta Main Road, B'Lore-76",
          locality: "Bannerghatta Road",
          areaName: "Bannerghatta Road",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Arabian", "Biryani", "Chinese", "Desserts", "Beverages"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "30K+",
          sla: {
            deliveryTime: 56,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "7.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "5.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "24843",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "24843",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "984101",
          name: "Soofiyana Mandi Restaurant",
          city: "1",
          slugs: {
            restaurant: "soofiyana-mandi-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/31/81f8a650-4048-47b3-b8b6-fb61177e6c2a_984101.jpg",
          address:
            "No.59, 2ND CROSS, POPULAR COOLONY MANGAMMANAPALYA BOMMANHALLI, BENGALURU , , Karnataka-560068",
          locality: "POPULAR COOLONY BOMMANHALLI",
          areaName: "BOMMANHALLI",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Biryani", "Kebabs"],
          avgRating: 1.5,
          feeDetails: {},
          avgRatingString: "1.5",
          totalRatingsString: "3",
          sla: {
            deliveryTime: 61,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_2",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "984101",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "984101",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "64914",
          name: "Kerala Panoor Restaurant",
          city: "1",
          slugs: {
            restaurant: "panoor-restaurant-bellandur-bellandursarjapur",
            city: "bangalore",
          },
          cloudinaryImageId: "lgekccbbltrtd4kysjgs",
          address:
            "Devarabeesanahalli Flyover, Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103",
          locality: "Bellandur",
          areaName: "Bellandur",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Kerala", "South Indian", "Seafood"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "9.2K+",
          sla: {
            deliveryTime: 67,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 8.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹35",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "1.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "64914",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "64914",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "264863",
          name: "Al Zara Mandi Arabian Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "al-zara-mandi-arabian-restaurant-frazer-town-frazer-town",
            city: "bangalore",
          },
          cloudinaryImageId: "bbe55ad499f96092abe9552e19854313",
          address:
            "No-137, Ground Floor, Mm Road, Frazer Town, Bangalore - 560005",
          locality: "Frazer Town",
          areaName: "Frazer Town",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: [
            "Arabian",
            "Biryani",
            "Indian",
            "Meat",
            "Seafood",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "4.5K+",
          sla: {
            deliveryTime: 76,
            minDeliveryTime: 75,
            maxDeliveryTime: 80,
            lastMileTravel: 10,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "75-80 MINS",
            lastMileTravelString: "10.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          sld: true,
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "6.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "264863",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "264863",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "35188",
          name: "Savoury Seashell Restaurant",
          city: "1",
          slugs: {
            restaurant: "savoury-sea-shell-restaurant-bannerghatta-road-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "1d1eb5dd30e6fb121ac8801d2b187605",
          address:
            "10, Near Maruti Sagar Automobiles, Bhavani Layout, Bannerghatta Road, Bangalore",
          locality: "Bannerghatta Road",
          areaName: "Bannerghatta Road",
          costForTwo: "45000",
          costForTwoMessage: "₹450 FOR TWO",
          cuisines: [
            "Arabian",
            "Indian",
            "Chinese",
            "Tandoor",
            "Biryani",
            "Seafood",
            "Kerala",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "22K+",
          sla: {
            deliveryTime: 50,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 4.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "4.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "9.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "35188",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "35188",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "228960",
          name: "The Anything Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "the-desserts-collective-jakkasandra-village-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "ygvs3xewjsava6niwg2n",
          address:
            "88/1, Ward No, 66, Swiggy Koramangala Super Hub building, Sarjapur Road, Jakkasandra Village, Bangalore 560034",
          locality: "Koramangala",
          areaName: "Hsr Layout 5th Sector",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Continental",
            "North Indian",
            "Pan-Asian",
            "Desserts",
            "American",
            "Asian",
            "Beverages",
            "Biryani",
            "Chinese",
            "Combos",
          ],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 48,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "228960",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "228960",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "446",
          name: "Altaf's Chillies Restaurants",
          city: "1",
          slugs: {
            restaurant: "altafs-chillies-restaurants-cooke-town-frazer-town",
            city: "bangalore",
          },
          cloudinaryImageId: "oqze9shefvy6pl8gkbvs",
          address: "32/1, Hutchins Road, Cooke Town, Frazer Town Area",
          locality: "Frazer Town",
          areaName: "Central Bangalore",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese", "Biryani", "rolls", "Indian"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "31K+",
          sla: {
            deliveryTime: 73,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 10.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "10.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹1500",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "519",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "446",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "446",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "435046",
          name: "Kaippunnyam Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "kaippunnyam-restaurant-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId: "xtdfcswzs3brb8mozzla",
          address:
            "No. 78, 80, Brigade Rd, Ashok Nagar, Bengaluru, Karnataka 560025, India",
          locality: "Brigade Road",
          areaName: "Central Bangalore",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Kerala",
            "Seafood",
            "South Indian",
            "Buffalo meat",
            "Chettinad",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 74,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "435046",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "435046",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "34132",
          name: "Pallavi Restaurant (Authentic taste from Gulbarga)",
          city: "1",
          slugs: {
            restaurant: "pallavi-north-indian-veg-restaurant-jp-nagar-jp-nagar",
            city: "bangalore",
          },
          cloudinaryImageId: "dkjuegbdh6ukfznuawtj",
          address:
            "#26,16Th Cross,18Th Main,100Ftring Road,Jp Nagar5Thphase Bangalore 78",
          locality: "JP Nagar",
          areaName: "JP Nagar",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["North Indian", "Thalis"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "50K+",
          sla: {
            deliveryTime: 62,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "UPTO ₹65",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "1.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "34132",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "34132",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "798537",
          name: "Mithai Mahal sweets & Restaurants",
          city: "1",
          slugs: {
            restaurant: "mithai-mahal-arekere-arekere",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/9/afb644bf-a48b-4385-a6d7-eece57c308b9_798537 (1).jpg",
          address:
            "NO.1325/1/85/1 GROUND FLOOR,SECOND  FLOOR, THIRD FLOOR, TERRACE & MEZZANINE  FLOOR BDA 80 FEET ROAD VYASA BANK  COLONY SHANTINIKETAN LAYOUT AREKERE  BENGALURU, Bommanahalli, B.B.M.P South,  Karnataka-",
          locality: "Arekere",
          areaName: "Arekere",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: [
            "North Indian",
            "Thalis",
            "Chinese",
            "Continental",
            "Sweets",
          ],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "375",
          sla: {
            deliveryTime: 73,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 8.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "8.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹649",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "798537",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "798537",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "739040",
          name: "Restaurant Chef Pillai",
          city: "1",
          slugs: {
            restaurant:
              "restaurant-chef-pillai-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId: "475688804b4b6086854d60b3a68440e7",
          address:
            "Iris -The Business Hotel,70, Brigade Rd, Ashok Nagar, Bengaluru, Karnataka 560025",
          locality: "Ashok Nagar",
          areaName: "Central Bangalore",
          costForTwo: "140000",
          costForTwoMessage: "₹1400 FOR TWO",
          cuisines: ["South Indian", "Seafood"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "1.5K+",
          sla: {
            deliveryTime: 74,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "1.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "739040",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "739040",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "37746",
          name: "Salt - Indian Restaurant Bar & Grill",
          city: "1",
          slugs: {
            restaurant:
              "salt-indian-restaurant-bar-grill-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "zp0sgyo1uqgnin1ei08k",
          address: "Forum Mall , 2Nd Floor Koramangala, Bangalore - 560095",
          locality: "The Forum Mall",
          areaName: "Koramangala",
          costForTwo: "130000",
          costForTwoMessage: "₹1300 FOR TWO",
          cuisines: ["North Indian", "Kebabs", "Tandoori", "Biryani", "Thalis"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "4.1K+",
          sla: {
            deliveryTime: 52,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "4.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "37746",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "37746",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "604",
          name: "Aalishan Restaurant & Caterer",
          city: "1",
          slugs: {
            restaurant: "aalishan-restaurant-caterer-7th-block-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "1921d9e6b05f56462ffe771cdd0fb10e",
          address:
            "No.488 1st cross, Joyoti Nivas College Road, KHB Colony, 5th Block Koramangala, Bangalore, BTM Layout, B.B.M.P South, Karnataka - 560095",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "29000",
          costForTwoMessage: "₹290 FOR TWO",
          cuisines: ["Mughlai", "North Indian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "14K+",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "30-35 MINS",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.6",
              ratingCount: "1.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "604",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "604",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "791958",
          name: "Champak Restaurant",
          city: "1",
          slugs: {
            restaurant: "champak-restaurant-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/577e9ec8-c806-4528-b2dd-9d4ef4bfec0a_791958.jpg",
          address:
            "No.112, 6th main, 6th Block, Koramangala, Bengaluru - 560095",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Tandoor", "Beverages"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "346",
          sla: {
            deliveryTime: 42,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹699",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.8",
              ratingCount: "667",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "791958",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "791958",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "486189",
          name: "Sanman Restaurant",
          city: "1",
          slugs: {
            restaurant: "sanman-restaurant-majestic-majestic",
            city: "bangalore",
          },
          cloudinaryImageId: "jadgqpxezfyr7ciwvezw",
          address:
            "Hotel Hoysala, No-212, S. C Road Seshadripuram, Bangalore- 560 020",
          locality: "Seshadripuram",
          areaName: "Malleshwaram",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["South Indian", "Indian", "Chinese"],
          avgRating: 4.7,
          feeDetails: {},
          avgRatingString: "4.7",
          totalRatingsString: "2.1K+",
          sla: {
            deliveryTime: 71,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 9.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "9.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "5.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "486189",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "486189",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "944392",
          name: "POORAM RESTAURANT",
          city: "1",
          slugs: {
            restaurant: "pooram-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/71a1d401-a8ac-4674-96fb-601b4b832e37_944392.JPG",
          address: "Shop No : 81 , Floor : 0 , Hosur Road , ",
          locality: "BTM",
          areaName: "BTM",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Biryani", "Kerala", "Beverages"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "159",
          sla: {
            deliveryTime: 43,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "40-45 MINS",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "944392",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "944392",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "884006",
          name: "Paragon Restaurant Since 1939",
          city: "1",
          slugs: {
            restaurant:
              "paragon-restaurant-since-1939-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/069de1d3-5d52-470e-92b0-021b17642b51_884006.jpg",
          address: "Shop No : 50 , Floor : 1 , Sobha Mall , ",
          locality: "Shanthala Nagar",
          areaName: "Central Bangalore",
          costForTwo: "70000",
          costForTwoMessage: "₹700 FOR TWO",
          cuisines: ["Kerala", "South Indian", "Indian", "Chinese"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "1.5K+",
          sla: {
            deliveryTime: 77,
            minDeliveryTime: 75,
            maxDeliveryTime: 80,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "75-80 MINS",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "884006",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "884006",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "176866",
          name: "Bologna Italian Restaurant",
          city: "1",
          slugs: {
            restaurant: "bologna-italian-restaurant-hal-2nd-stage-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId: "w6gkkpuownqqxrduswis",
          address:
            "759,First Floor, 100 Feet Rd, Hal 2Nd Stage, Appareddipalya, Indiranagar, Bengaluru, Karnataka 560038",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: ["Italian"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "2.9K+",
          sla: {
            deliveryTime: 78,
            minDeliveryTime: 75,
            maxDeliveryTime: 80,
            lastMileTravel: 5.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "75-80 MINS",
            lastMileTravelString: "5.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "3.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "176866",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "176866",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "762760",
          name: "New Taj Restaurant",
          city: "1",
          slugs: {
            restaurant: "new-taj-restaurant-frazer-town-frazer-town",
            city: "bangalore",
          },
          cloudinaryImageId: "dcfe2edf703b0669d5e885622fb5aa07",
          address:
            "NO 62/1, 62/2, 63/3, AND FIRST FLOOR, NO 62,  MOSQUE ROAD, FRAZER TOWN, BANGALORE,  B.B.M.P East, Karnataka-560005",
          locality: "Mosque Road",
          areaName: "Central Bangalore",
          costForTwo: "59900",
          costForTwoMessage: "₹599 FOR TWO",
          cuisines: ["North Indian", "Snacks", "Beverages"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "351",
          sla: {
            deliveryTime: 61,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 9.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "9.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "762760",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "762760",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1360",
          name: "Zhangs Chinese Restaurant",
          city: "1",
          slugs: {
            restaurant: "zhangs-2nd-phase-jp-nagar",
            city: "bangalore",
          },
          cloudinaryImageId: "g1dbc0vkgvpni1agk945",
          address:
            "1743,9Th Cross, 17Th Main, Near Diwakar Hospital, Jp Nagar, 2Nd Phase, Bangalore 560078",
          locality: "JP Nagar",
          areaName: "JP Nagar",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Chinese", "Seafood", "Pan-Asian"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "14K+",
          sla: {
            deliveryTime: 60,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "1.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "1360",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "1360",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "177479",
          name: "Dhansagar Coastal Restaurant",
          city: "1",
          slugs: {
            restaurant: "dhanasagar-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "ocqcv6xvw5rtuh401fbq",
          address:
            "425  7th main  7th cross  2nd stage BTM layout below Union bank  Bangalore 560076",
          locality: "BTM Layout",
          areaName: "BTM Layout",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Mangalorean",
            "Biryani",
            "North Indian",
            "Chinese",
            "Coastal",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "3.0K+",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "177479",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "177479",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "277965",
          name: "Dwarkamai Pure Veg Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "dwarkamai-pure-veg-restaurant-basavanagudi-basavanagudi",
            city: "bangalore",
          },
          cloudinaryImageId: "xasb3saoezi04u4c76u0",
          address:
            "Dwarkamai Veg Restaurant, Gandhi Bazaar Main Road, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka, India",
          locality: "Basavanagudi",
          areaName: "Basavanagudi",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["North Indian", "Chinese", "Italian-American"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "3.4K+",
          sla: {
            deliveryTime: 73,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹749",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "2.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "277965",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "277965",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "493627",
          name: "Muthuraj - Multi Cuisine Restaurant",
          city: "1",
          slugs: {
            restaurant: "muthusamy-hotel-hsr-hsr",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/9b28188f-998f-4aad-9012-29f17a28ed69_493627.jpg",
          address:
            "No. 46, 200/1,Kudla Main Road, Near Corporation Bank ,Bangalore South,Bangalore Urban,Karnataka-560068",
          locality: "Kudla Main Road",
          areaName: "Near Corporation Bank",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Biryani", "Andhra", "North Indian", "Chinese", "Tandoor"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "793",
          sla: {
            deliveryTime: 50,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "493627",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "493627",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "152743",
          name: "Nilavara Restaurant",
          city: "1",
          slugs: {
            restaurant: "nilavara-restuarant-yeshwanthpur",
            city: "bangalore",
          },
          cloudinaryImageId: "nq6urrk3b8xh2nc0cin5",
          address:
            "94 sreenivas building opposite to Ncc Apartment Kariyammana Agrahara road near to Oracle back gate kadubisnahalli bengaluru 560103 Karnataka India",
          locality: "Marathahalli",
          areaName: "Kadabeesanahalli",
          costForTwo: "22000",
          costForTwoMessage: "₹220 FOR TWO",
          cuisines: ["Kerala", "Biryani", "Combo", "Seafood"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "2.7K+",
          sla: {
            deliveryTime: 85,
            minDeliveryTime: 80,
            maxDeliveryTime: 85,
            lastMileTravel: 9.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "80-85 MINS",
            lastMileTravelString: "9.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "150",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "152743",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "152743",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "799942",
          name: "Salem RR Biryani Restaurant",
          city: "1",
          slugs: {
            restaurant: "salem-rr-biryani-restaurant-arekere-arekere",
            city: "bangalore",
          },
          cloudinaryImageId: "f594f4f63d3e00e93203f02d40e38d24",
          address:
            "No 441/A, Ground Floor Vijaya Bank  Society Next to Vijaya Bank Apartment  Bilekahalli Road Vijaya Bank Colony  Bangalore , Bommanahalli, B.B.M.P  South, Karnataka-560076",
          locality: "Viman Nagar",
          areaName: "Arekere",
          costForTwo: "39900",
          costForTwoMessage: "₹399 FOR TWO",
          cuisines: [
            "Biryani",
            "Seafood",
            "Kebabs",
            "Snacks",
            "Kerala",
            "Andhra",
            "Desserts",
            "Beverages",
            "South Indian",
            "Arabian",
          ],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "857",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "799942",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "799942",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "290156",
          name: "Coal Spark Restaurant",
          city: "1",
          slugs: {
            restaurant: "coal-spark-restaurant-hsr-hsr",
            city: "bangalore",
          },
          cloudinaryImageId: "xklvn9yz4hzfuikflbmw",
          address: "1567,27Th Main Road ,Sector 2 ,Hsr Layout Ngr Building",
          locality: "HSR Layout",
          areaName: "HSR Layout",
          costForTwo: "45000",
          costForTwoMessage: "₹450 FOR TWO",
          cuisines: ["Arabian", "Biryani"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "8.4K+",
          sla: {
            deliveryTime: 62,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "5.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "290156",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "290156",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "417012",
          name: "JK Eden Huts Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "jk-eden-huts-restaurant-kadubeesanahalli-kadubeesanahalli",
            city: "bangalore",
          },
          cloudinaryImageId: "panh2yv23nfgf8lgbd1p",
          address:
            "Outer Ring Rd, Opposite Sakra World Hospital, Devarabisanahalli, Bellandur, Bengaluru",
          locality: "Bellandur",
          areaName: "Kadubeesanahalli",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Indian", "Chinese"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "750",
          sla: {
            deliveryTime: 69,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.6",
              ratingCount: "30",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "417012",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "417012",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "251099",
          name: "Absolute Chinese Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "absolute-chinese-restaurant-malleshpalya-indiranagar-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId: "kin2pw5acqjrn7qrzbrq",
          address:
            "Shop No 7,121/3,7th Cross,5th Main, Mahayogi Vemana Rd, Behind Chaitanya techno School, Maruthi Nagar, Malleshpalya, Bengaluru, Karnataka 560075",
          locality: "Kaggadasapura",
          areaName: "Kaggadasapura",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "2.7K+",
          sla: {
            deliveryTime: 70,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 10.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "10.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "61",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "251099",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "251099",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "283018",
          name: "Grillin Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "moriz-restaurant(moriz-vignan-nagar)-cv-raman-nagar-cv-raman-nagar",
            city: "bangalore",
          },
          cloudinaryImageId: "ty0iunpsqncw1i3uxzps",
          address:
            "NO 724, KMR COMPLEX, VIGNANA NAGARA MAIN ROAD, BANGALORE ,Mahadevapura,B.B.M.P East,Karnataka-560037",
          locality: "Kaggadasapura",
          areaName: "Vignan Nagar",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: ["Chinese", "Indian"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 64,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 10.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "10.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "88",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "283018",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "283018",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "104348",
          name: "M M Restaurant",
          city: "1",
          slugs: {
            restaurant: "m-m-restaurant-hsr",
            city: "bangalore",
          },
          cloudinaryImageId: "ik2jyk0pvdal2pgnsj0r",
          address:
            "No.206, Iti Layout, Yalakunte Palya, Mangammanapalya Road, Hsr Layout, Bangalore., Btm Layout, B.B.M.P South, Karnataka - 560068",
          locality: "HSR Layout",
          areaName: "HSR Layout",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Chinese", "Hyderabadi"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "550",
          sla: {
            deliveryTime: 55,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 5.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "5.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "74",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "104348",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "104348",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "793069",
          name: "NCHEF RESTAURANT",
          city: "1",
          slugs: {
            restaurant: "nchef-restaurant-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId: "ee2a439da6877d85856aa14bc44f86aa",
          address:
            "opp selec hyper mart, 181, Brigade Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001, India",
          locality: "Brigade Road",
          areaName: "Central Bangalore",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "94",
          sla: {
            deliveryTime: 71,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "UPTO ₹65",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.7",
              ratingCount: "954",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "793069",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "793069",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "804958",
          name: "Shivalli Restaurant",
          city: "1",
          slugs: {
            restaurant: "shivalli-restaurant-basavanagudi-basavanagudi",
            city: "bangalore",
          },
          cloudinaryImageId: "18dd4490596019c8428d1a8f7dd20106",
          address:
            "No 462, near Ashoka Pillar 2nd block, Jayanagar, Bangalore-560011",
          locality: "Jayanagar",
          areaName: "Basavanagudi",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["South Indian"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "297",
          sla: {
            deliveryTime: 60,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹150",
            discountTag: "SAVE BIG",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "804958",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "804958",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "832135",
          name: "Indian Coffee House And Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "indian-coffee-house-and-restaurant-koramangala-koramangala-2",
            city: "bangalore",
          },
          cloudinaryImageId: "18dd4490596019c8428d1a8f7dd20106",
          address:
            "NO 55 INDUSTRIAL LAYOUT ROAD 5TH BLOCK KORAMANGALA OPP JYOTHI NIVAS COLLEGE BANGALORE BTM LAYOUT B.B.M.P SOUTH KARNATAKA",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["South Indian", "Biryani", "North Indian", "Beverages"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "150",
          sla: {
            deliveryTime: 51,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "3.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "832135",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "832135",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "974444",
          name: "Gwalia Sweets & Restaurant",
          city: "1",
          slugs: {
            restaurant: "gwalia-sweets-&-restaurant-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/23/2612d4a9-7380-43e9-9fe0-efcbab321356_974444.jpg",
          address: "Shop No : 56, , Floor : GF , Jyoti Nivas College Rd, , ",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: [
            "Thali",
            "North Indian",
            "Chaat",
            "Fast Food",
            "Sweets",
            "Beverages",
          ],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "41",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹19",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "974444",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "974444",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "635096",
          name: "Bala Pankaj Restaurant",
          city: "1",
          slugs: {
            restaurant: "bala-pankaj-restaurant-btm-btm",
            city: "bangalore",
          },
          cloudinaryImageId: "bfakhx28y8yorkc9dvk8",
          address:
            "NO 17/18, AMMASREE BUILDING 1ST MAIN, TAVARAKERE MAIN ROAD, D R C POST S.G.PALYA, BANGALORE BTM LAYOUT B.B.M.P SOUTH KARNATAKA",
          locality: "S.G Palya",
          areaName: "Tavarekere",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Beverages", "South Indian", "Chinese"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "192",
          sla: {
            deliveryTime: 48,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "635096",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "635096",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "652220",
          name: "Raj Restaurant",
          city: "1",
          slugs: {
            restaurant: "raj-restaurant-majestic-majestic",
            city: "bangalore",
          },
          cloudinaryImageId: "d6c718822ee395957704eec806b8751b",
          address:
            "NO 124 CUBBONPET MAIN ROAD NEAR MYSORE BANK CIRCLE BANGALORE CHIKKAPET B.B.M.P WEST KARNATAKA",
          locality: "Majestic",
          areaName: "Majestic",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["North Indian", "Biryani"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "118",
          sla: {
            deliveryTime: 69,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 7.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "7.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "701",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "652220",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "652220",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "174803",
          name: "Crown Restaurant",
          city: "1",
          slugs: {
            restaurant: "crown-restaurant-arekere",
            city: "bangalore",
          },
          cloudinaryImageId: "cx5rwlrxg6y7tlzxsskx",
          address: "Arekere Main Road, Bannerghatta Road, Bangalore",
          locality: "Shantiniketan Layout",
          areaName: "Arekere",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Indian", "Chinese"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "1.2K+",
          sla: {
            deliveryTime: 62,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "174803",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "174803",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "676983",
          name: "Suku Japanese And Thai Restaurant",
          city: "1",
          slugs: {
            restaurant: "suku-japanese-and-thai-restaurant-hsr-hsr",
            city: "bangalore",
          },
          cloudinaryImageId: "50ab661ef73e48c0b3f60d8bd319c249",
          address:
            "#1329, 3Rd Main Road, 24Th Main Road, Agara Village, 1st Sector, Hsr Layout, Bengaluru, Karnataka - 560102, India",
          locality: "Agara Village",
          areaName: "HSR Layout",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: ["Japanese", "Thai"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "371",
          sla: {
            deliveryTime: 61,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "761",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "676983",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "676983",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "194550",
          name: "Kabab King Restaurant",
          city: "1",
          slugs: {
            restaurant: "kabab-king-restaurant-banashankari-banashankari",
            city: "bangalore",
          },
          cloudinaryImageId: "dm1ir998ykeoztfwmguh",
          address:
            "#3771, 9Th Main Road ,Near Makkah Masjid, Kaverinagar, Banashankhari 2Nd Stage, Bangalore - 560070 (Karnataka)",
          locality: "Banashankari",
          areaName: "Banashankari",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Barbecue", "Biryani", "North Indian", "Hyderabadi"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "1.7K+",
          sla: {
            deliveryTime: 71,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "₹250 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "2.0",
              ratingCount: "83",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "194550",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "194550",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "854456",
          name: "Barkaas Indo Arabic Restaurant",
          city: "1",
          slugs: {
            restaurant:
              "barkaas-indo-arabic-restaurant-koramangala-koramangala",
            city: "bangalore",
          },
          cloudinaryImageId: "4c944ddbac1f7bbfd4c29b6ffe73128c",
          address:
            "Shop No : 99 , Floor : 2FLOOR , 5TH BLOCK , 4th B Cross Koramangala Industrial Layout, Koramangala, Bengaluru, Karnataka 560034, India 560034",
          locality: "Industrial Layout",
          areaName: "Koramangala",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Biryani", "Lebanese", "Arabian", "Indian", "Beverages"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "82",
          sla: {
            deliveryTime: 51,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "50-55 MINS",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "854456",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "854456",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "595366",
          name: "Haveli Restaurant",
          city: "1",
          slugs: {
            restaurant: "haveli-restaurant-indiranagar-indiranagar",
            city: "bangalore",
          },
          cloudinaryImageId: "evntgqj4roh4depw9zkk",
          address:
            "43, challagatta bridge, NAL Wind Tunnel Road, Murgeshpalya, Bangalore 560017",
          locality: "Nal Wind Tunnel Road",
          areaName: "Indiranagar",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Punjabi", "Biryani", "North Indian"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "78",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "595366",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "595366",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "384565",
          name: "Nasco Restaurant And Kebab Centre",
          city: "1",
          slugs: {
            restaurant: "nasco-restaurant-and-kebab-centre-arekere-arekere",
            city: "bangalore",
          },
          cloudinaryImageId: "864cddef631408b1521f8b3d3bd613c1",
          address:
            "NO 267/2 BEGUR VILLAGE BEGUR HOBLI BANGALORE,BOMMANAHALLI-560068",
          locality: "Bommanahalli",
          areaName: "Bommanahalli",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Indian", "Chinese", "Tandoor", "Biryani", "Juices"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "745",
          sla: {
            deliveryTime: 63,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 6.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "6.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "923",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "384565",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "384565",
            query: "restaurant",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "403426",
          name: "QBs Restaurant",
          city: "1",
          slugs: {
            restaurant: "qbs-restaurant-cv-raman-nagar-cv-raman-nagar",
            city: "bangalore",
          },
          cloudinaryImageId: "aimaxje33xml5rog1mus",
          address:
            "9th Main, Main Rd, Malleshpalya, Kaggadasapura, Bengaluru, Karnataka 560075, India",
          locality: "Malleshpalya",
          areaName: "Kaggadasapura",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["South Indian", "Chinese"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "362",
          sla: {
            deliveryTime: 63,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 9.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "9.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "403426",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "403426",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "61135",
          name: "Trilok Restaurant",
          city: "1",
          slugs: {
            restaurant: "trilok-restaurant-banashankari-banashankari",
            city: "bangalore",
          },
          cloudinaryImageId: "j0mgl5elxusbofjrnhd3",
          address:
            "#39,4th cross,14th main,maruthi circle,hanumanthanagar,bangalore-19",
          locality: "Banashankari",
          areaName: "Banashankari",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Seafood"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "3.1K+",
          sla: {
            deliveryTime: 81,
            minDeliveryTime: 80,
            maxDeliveryTime: 85,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "80-85 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "612",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "61135",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "61135",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "457740",
          name: "Shangrila Restaurant ",
          city: "1",
          slugs: {
            restaurant: "hotel-shangrila-central-bangalore-central-bangalore",
            city: "bangalore",
          },
          cloudinaryImageId: "sjeclzcbn3smwtyndkbb",
          address:
            "Hotel Shangrila 181 Above Bata showroom second floor Brigade Road Opposite To Monarch Hotel Bangalore 560001",
          locality: "Brigade Road",
          areaName: "Central Bangalore",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Chinese", "Beverages"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "412",
          sla: {
            deliveryTime: 72,
            minDeliveryTime: 70,
            maxDeliveryTime: 75,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "70-75 MINS",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "266",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "457740",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "457740",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "871387",
          name: "Chihan Restaurant",
          city: "1",
          slugs: {
            restaurant: "chihan-restaurant-kudlu-gate-kudlu-gate",
            city: "bangalore",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/0a9ed022-3dc0-4b54-b6db-d2e670d1f4ab_871387.JPG",
          address:
            "#50/1, first floor Ejipura main road, Ejipura bus stop.vivek nagar post.Bengaluru, BTM Layout, B.B.M.P South, Karnataka - 560047",
          locality: "Ejipura main road",
          areaName: "vivek nagar post",
          costForTwo: "29900",
          costForTwoMessage: "₹299 FOR TWO",
          cuisines: ["Asian", "Naga"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "70",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "45-50 MINS",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"d64981f4-037f-373e-224c-23d9433863fc","grid":"3562d1b1-4c1e-4b4c-a166-c843a8cab5dd","queryUniqueId":"466ec5d3-b51a-ea72-9e14-db9c2618158b","query":"restaurant"}',
          objectValue: "871387",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "8777aab7c71ab50ff599d756e6f392d8",
            restaurant_id: "871387",
            query: "restaurant",
            sourceSessionId: "j7rc8814-16ac-4ae5-b6b8-f426ad63cb49",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
];

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
{
}

// ResturandCard Component
const ResturandCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,

    costForTwo,
  } = resData?.card?.card?.info;
  const { deliveryTime } = resData?.card?.card?.info?.sla;
  let costfortwo = resData?.card?.card?.info?.costForTwo / 100;
  console.log();
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cusine">{cuisines.join(",")}</h4>
      <div className="res-details">
        <h4 className="staring">* {avgRatingString}</h4>

        <h4 className="del-time">{deliveryTime} MINS</h4>
        <h4 className="price-for-two">₹{costfortwo} FOR TWO</h4>
      </div>
    </div>
  );
};

//Body Component

// not using key ( not acceptable) <<<<<<index as key <<<<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
          <ResturandCard
            key={resturant?.card?.card?.info.id}
            resData={resturant}
          />
        ))}
      </div>
    </div>
  );
};

// AppLayout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
