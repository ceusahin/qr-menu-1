import { InfoIcon } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import StoreInfos from "./StoreInfos";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-orange-500">
        <div className="text-white p-3">
          <button>
            <InfoIcon className="h-7 w-7" />
          </button>
        </div>
        <div className="p-3">
          <LanguageSelector />
        </div>
      </div>
      <div>
        <StoreInfos />
      </div>
    </>
  );
}

export default Header;
