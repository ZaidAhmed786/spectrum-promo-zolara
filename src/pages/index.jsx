import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Spectrum Promo LLC"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
