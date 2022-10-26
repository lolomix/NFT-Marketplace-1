import Footer from "../../component/molecules/Footer/Index";
import Navbar from "../../component/molecules/Navbar";
import Table from "../../component/molecules/Table";
import PageContainer from "../../component/PageContainer";

export default function Stats() {
  return (
    <div>
      <div style={{ background: "#1F0443", width: "100%", height: "100vh" }}>
        <Navbar />
        <PageContainer>
          <Table />
        </PageContainer>
        <Footer />
      </div>
    </div>
  );
}
