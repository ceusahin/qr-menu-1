import { Clock, MapPin, Phone } from "lucide-react";

function StoreInfos() {
  return (
    <div className="relative w-full">
      <img
        src="images/rest-pic.jpg"
        alt="rest-pic"
        className="w-full h-auto block"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="images/logo-pic.png"
          alt="logo"
          className="w-30 h-30 rounded-full"
        />
      </div>

      <div className="absolute top-full left-0 w-full transform -translate-y-8 bg-white rounded-t-3xl p-6">
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-2xl font-semibold">Dükkan Adı</h1>
          <h2 className="text-gray-900">Yemek Bizim İşimiz</h2>
          <p className="flex items-center mb-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span className="ml-2">08:00 - 24:00</span>
          </p>
          <p className="flex items-center mb-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span className="ml-2">Adres</span>
          </p>
          <p className="flex items-center text-gray-600">
            <Phone className="h-5 w-5" />
            <span className="ml-2">+90 530 555 55 55</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoreInfos;
