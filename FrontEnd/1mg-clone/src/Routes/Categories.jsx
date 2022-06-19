import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import style from "../Components/category.module.css";
import { Link as RouteLink } from "react-router-dom";
export const Categories = () => {
  return (
    <Box m={"2rem 25rem 10rem 25rem"}>
      <Tabs variant="unstyled">
        <TabList>
          <RouteLink to="/">
            <Tab _selected={{ color: "#ff6f61" }}>Home</Tab>
          </RouteLink>

          <RouteLink to="/categories">
            <Tab _selected={{ color: "#ff6f61" }}>Category</Tab>
          </RouteLink>
        </TabList>
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
      <SimpleGrid
        // minChildWidth="120px"
        spacing="20px"
        columns={{ base: 1, sm: 2, md: 5 }}
      >
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464490/s08wajbabiazznogwov9.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Nutritional Drinks</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573471195/auktwuhqcvhbcwwxlaxk.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Tata 1mg Health Products</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464587/ymn3dcyqmfudgcorfgde.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Healthcare Devices</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573463739/nherof9d47s0wgmmrrzh.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Ayurveda</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573465254/vezzxx7qeekwmu6ouxfv.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Vitamins & Supplements</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464999/rsoefqjxpme0yyoumk15.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Sexual Wellness</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464185/lzki3kszfaalp5dhx9pe.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Diabetes Care</Text>
          </Button>
        </Box>

        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573465049/cmur2waifx4witz8r0pa.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Skin Care</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464736/v3026bcmvh07gktnx6te.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Immunity Boosters</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464443/cm4uqrpr6hrfyecpxvyd.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Elderly Care</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464676/wvj6ialknvnqebvoqyhj.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Homeopathy</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464629/ps4fg4uwav0ffel9up3l.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Health Food & Drinks</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573465355/wzxbghklbqiuowvewq6w.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Women Care</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464539/kzravzn7uqknryv7qna5.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Hair Care</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464904/ngdbpmsvdywbqbvotsti.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Protein Supplements</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573463816/gb4v7mo67xgwij3v9bnc.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Baby Care</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464857/thfvxf1ec21aekfsrlkz.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Oral Care</Text>
          </Button>
        </Box>

        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1600861590/nbkpynemt0rfjhldbpg2.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Vital Signs Monitors & Wearables</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1584094507/w8ebd1cev7jjd4pglpqv.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Sanitizers & Handwash</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1605101605/ceoupuxw3pezd4oqdjoz.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Nebulizers & Vaporizers</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573465308/myyfofxvzwdukgdhnelg.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Weight Management</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1584094432/xwwgr3meblfkjfne48u4.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Covid Essentials</Text>
          </Button>
        </Box>
        <Box className={style.categoryCard}>
          <Image
            // w={"60%"}
            src="https://res.cloudinary.com/du8msdgbj/image/upload/w_360,h_360,c_fit,a_ignore,q_60,fl_lossy,f_auto/v1573464237/okgdoogjpyhvfmxzyxf4.png"
          />
          <Button className={style.categoryBtn}>
            <Text>Doctor's Corner</Text>
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
