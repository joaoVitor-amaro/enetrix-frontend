import { useNavigate } from "react-router-dom";
import EnetrixHeader from "../../components/EnetrixHeader";
import EnetrixBody from "../../components/EnetrixBody";
import EnetrixFooter from "../../components/EnetrixFooter";

export default function EnetrixScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-white font-sans">
      <EnetrixHeader />
      <EnetrixBody />
      <EnetrixFooter onStart={() => navigate("/chat")} />
    </div>
  );
}