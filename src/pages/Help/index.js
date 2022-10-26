import CardHelp from "../../component/molecules/CardHelp";
import Footer from "../../component/molecules/Footer/Index";
import Navbar from "../../component/molecules/Navbar";
import PageContainer from "../../component/PageContainer";
import "./style.css";

export default function Help() {
  return (
    <div class="Help">
      <Navbar />
      <PageContainer>
        <div class="row text-light">
          <CardHelp
            title="Create Account"
            description="Learn how to Create your account for starting buy and sell in
                NFT Everywhere"
          />
          <CardHelp
            title="Create Wallet"
            description="Learn how to Create your account for starting buy and sell in
            NFT Everywhere"
          />
          <CardHelp
            title="Buying"
            description="Learn how to buying in NFT Everywhere"
          />

          <CardHelp
            title="Selling"
            description="Learn how to selling in NFT Everywhere"
          />

          <CardHelp
            title="Offering"
            description="learn how to offering in NFT Everywhere"
          />

          <CardHelp
            title="FAQ"
            description="Search your question in most frequently ask question"
          />
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
}
