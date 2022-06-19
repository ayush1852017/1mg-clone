import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavSlideshow } from "../Components/NavSlideShow";
import { SlideShow } from "../Components/SlideShow";
import style from "../Components/Home.module.css";
import { useEffect } from "react";
import {
  getAyurvedaData,
  getBpData,
  getCategoriesData,
  getComboData,
  getHealthconcernsData,
  getHomeProductsData,
  getTrendingProductsData,
} from "../Redux/products/action";
import { useSelector, useDispatch } from "react-redux";
import { SlideShowProduct } from "../Components/SlideShowProduct";
import { Link } from "react-router-dom";
export const Home = () => {
  const healthData = useSelector((state) => state?.productStore?.healthData);
  const categoryData = useSelector(
    (state) => state?.productStore?.categoryData
  );
  const ayurvedaData = useSelector(
    (state) => state?.productStore?.ayurvedaData
  );
  const bpData = useSelector((state) => state?.productStore?.bpData);
  const comboData = useSelector((state) => state?.productStore?.comboData);
  const homeProductsData = useSelector(
    (state) => state?.productStore?.homeProductsData
  );
  const trendingData = useSelector(
    (state) => state?.productStore?.trendingData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHealthconcernsData(dispatch));
    dispatch(getCategoriesData(dispatch));
    dispatch(getAyurvedaData(dispatch));
    dispatch(getBpData(dispatch));
    dispatch(getComboData(dispatch));
    dispatch(getHomeProductsData(dispatch));
    dispatch(getTrendingProductsData(dispatch));
  }, []);
  console.log(homeProductsData);
  const items = [
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447476/kkpsr5tdl5bsc16ymrlt.jpg",
      description: "BadiyaNath(Nagpur)",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447498/xpmrwouiepqqjbwk1x3t.png",
      description: "Himalaya",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655356248/fbcvk5kwljux25bgbqk1.png",
      description: "Dr. Morepen",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447531/gd9t4b7dsw25pvr3z2b3.png",
      description: "Dr. Willmar Schwabe India",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447550/hsytfka5agur1dydml4e.png",
      description: "Shri Shri Tattva",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447584/rtpky6nexrumcowq8vmm.png",
      description: "Cetaphil",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447595/dyvrsnss2ovlnkllrwon.jpg",
      description: "Complain",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447609/xtajgnbhvvs2sy8jiccr.png",
      description: "Upakarma",
    },
    {
      image:
        "https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1655447623/nxuoi9tgsjfuy3r0nee5.png",
      description: "Kerala Ayurveda",
    },
  ];
  return (
    <Box>
      <Flex>
        <NavSlideshow />
        <Stack flex={2} borderBottom="1px solid rgb(238, 235, 235)">
          <Image src="https://onemg.gumlet.io/image/upload/w_480,h_200,,…_auto,f_auto/v1637650231/j1stwu7s3rtmyi8r5ruv.png" />
        </Stack>
      </Flex>
      <Center
        p={"1.5rem 0"}
        fontSize={"1.4rem"}
        borderBottom="2px solid #e0e0e0"
      >
        <Text>
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </Text>
      </Center>
      <Box className={style.homeMiddle}>
        <Box className={style.homePoster} pb={3}>
          <Center>
            <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
          </Center>
          <Flex justifyContent={"space-between"}>
            <Box>Featured Brands</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box className={style.homeSliderRow}>
          <SlideShow items={items} />
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} p={"0 20rem"}>
            <Box>Full body health checkups</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
          <Box className={style.homeSliderRow}>
            <SlideShow items={healthData} />
          </Box>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} p={"0 20rem"}>
            <Box>Popular Categories</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
          <Box className={style.homeSliderRow}>
            <SlideShow items={categoryData} />
          </Box>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} p={"0 20rem"}>
            <Box>Ayurveda Products</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
          <Box className={style.homeSliderRow}>
            <SlideShow items={ayurvedaData} />
          </Box>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} p={"0 20rem"}>
            <Box>Blood Pressure Products</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
          <Box className={style.homeSliderRowProduct}>
            <SlideShowProduct items={bpData} />
          </Box>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} p={"0 20rem"}>
            <Box>Combos of Products</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
          <Box className={style.homeSliderRowProduct}>
            <SlideShowProduct items={comboData} />
          </Box>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} p={"0 20rem"}>
            <Box>Home Products</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
          <Box className={style.homeSliderRow}>
            <SlideShow items={homeProductsData} />
          </Box>
        </Box>

        <Box>
          <Flex justifyContent={"space-between"} p={"0 20rem"}>
            <Box>Trending Products</Box>
            <Box>
              <Link to="/products">
                <Button className={style.seeAllBtn}>See All</Button>
              </Link>
            </Box>
          </Flex>
          <Box className={style.homeSliderRow}>
            <SlideShowProduct items={trendingData} />
          </Box>
        </Box>
      </Box>
      <Stack className={style.footerSection}>
        <Box color={"#666"}>
          <Text className={style.lastSectionText} fontSize={"1.15rem"}>
            Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and
            Healthcare Platform
          </Text>
          <br />
          <Text className={style.lastSectionText} fontSize={"1rem"}>
            We Bring Care to Health.
          </Text>
          <br />
          <Text>
            Tata 1mg is India's leading digital healthcare platform. From doctor
            consultations on chat to online pharmacy and lab tests at home: we
            have it all covered for you. Having delivered over 25 million orders
            in 1000+ cities till date, we are on a mission to bring "care" to
            "health" to give you a flawless healthcare experience.
          </Text>
          <br />
          <Text className={style.lastSectionText} fontSize={"1rem"}>
            Tata 1mg: Your Favourite Online Pharmacy!
          </Text>
          <br />
          <Text>
            Tata 1mg is India's leading online chemist with over 2 lakh
            medicines available at the best prices. We are your one-stop
            destination for other healthcare products as well, such as over the
            counter pharmaceuticals, healthcare devices and homeopathy and
            ayurveda medicines.
          </Text>
          <br />
          <Text>
            With Tata 1mg, you can buy medicines online and get them delivered
            at your doorstep anywhere in India! But, is ordering medicines
            online a difficult process? Not at all! Simply search for the
            products you want to buy, add to cart and checkout. Now all you need
            to do is sit back as we get your order delivered to you.
          </Text>
          <br />
          <Text>
            In case you need assistance, just give us a call and we will help
            you complete your order.
          </Text>
          <br />
          <Text>
            Don't want to go through the hassle of adding each medicine
            separately? You can simply upload your prescription and we will
            place your order for you. And there is more! At Tata 1mg, you can
            buy health products and medicines online at best discounts.
          </Text>
          <br />

          <Text>
            Now, isn't that easy? Why go all the way to the medicine store and
            wait in line, when you have Tata 1mg Pharmacy at your service.
          </Text>
          <br />
          <Text className={style.lastSectionText} fontSize={"1rem"}>
            The Feathers in Our Cap
          </Text>
          <br />
          <Text>
            At Tata 1mg, our goal is to make healthcare understandable,
            accessible and affordable in India. We set out on our journey in
            2015, and have come a long way since then. Along the way, we have
            been conferred with prestigious titles like{" "}
            <Heading as="span" fontSize={"1rem"}>
              BML Munjal Award for 'Business Excellence through Learning and
              Development', Best Online Pharmacy in India Award
            </Heading>{" "}
            and{" "}
            <Heading as="span" fontSize={"1rem"}>
              Top 50 venture in The Smart CEO-Startup50 India.
            </Heading>{" "}
            We have been selected as the only company from across the globe for{" "}
            <Heading as="span" fontSize={"1rem"}>
              SD#3 "Health &amp; Well Being for all" by Unreasonable group, US
              State Department.
            </Heading>{" "}
            In 2019 alone we received three awards including the{" "}
            <Heading as="span" fontSize={"1rem"}>
              BMW Simply Unstoppable Award.
            </Heading>{" "}
          </Text>
          <br />
          <Text className={style.lastSectionText}>The Services We Offer</Text>
          <br />
          <Text>
            Tata 1mg is India's leading digital healthcare platform, where you
            can buy medicines online with discount. Buy medicine online in
            Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata,
            Chennai, Ahmedabad, Lucknow and around a 1000 more cities. Besides
            delivering your online medicine order at your doorstep, we provide
            accurate, authoritative &amp; trustworthy information on medicines
            and help people use their medicines effectively and safely.
          </Text>
          <br />
          <Text>
            We also facilitate lab tests at home. You can avail over 2,000 tests
            and get tested by 120+ top and verified labs at the best prices.
            Need to consult a doctor? On our platform, you can talk to over 20
            kinds of specialists in just a few clicks.
          </Text>
          <br />
          <Text>
            Customer centricity is the core of our values. Our team of highly
            trained and experienced doctors, phlebotomists and pharmacists looks
            into each order to give you a fulfilling experience.
          </Text>
          <br />
          <Text>
            We’ve made healthcare accessible to millions by giving them quality
            care at affordable prices. Customer centricity is the core of our
            values. Our team of highly trained and experienced doctors,
            phlebotomists and pharmacists looks into each order to give you a
            fulfilling experience.
          </Text>
          <br />
          <Text>
            Visit our online medical store now, and avail online medicine
            purchase at a discount.
            <br />
            Stay Healthy!
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
