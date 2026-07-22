// COMPONENTS ==========
import Navbar from "./components/Navbar";
// PROVIDERS ===========
import QueryProvider from "./contexts/QueryProvider";
import SelectedCityProvider from "./contexts/SelectedCityProvider";
import LocationDataProvider from "./contexts/LocationDataProvider";
import LanguageProvider from "./contexts/LanguageProvider";
import MethodProvider from "./contexts/MethodProvider";

export default function Home() {
  return (
    <div>
      <LocationDataProvider>
        <QueryProvider>
          <SelectedCityProvider>
            <LanguageProvider>
              <MethodProvider>
                <Navbar />
              </MethodProvider>
            </LanguageProvider>
          </SelectedCityProvider>
        </QueryProvider>
      </LocationDataProvider>
    </div>
  );
}
