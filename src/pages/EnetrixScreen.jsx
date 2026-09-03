import EnetrixHeader from "../components/EnetrixHeader";
import EnetrixBody from "../components/EnetrixBody";
import EnetrixFooter from "../components/EnetrixFooter";

export default function EnetrixScreen() {

  return (
    <div className="min-h-screen w-full flex flex-col bg-white font-sans">
      <EnetrixHeader />
      <EnetrixBody />
      <EnetrixFooter  />
    </div>
  );
}
