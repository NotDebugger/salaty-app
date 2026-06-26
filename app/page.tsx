import Navbar from "./components/Navbar";
import QueryProvider from "./contexts/QueryProvider";
import LocationDataProvider from "./contexts/LocationDataProvider";

export default function Home() {
  return (
    <div>
      <LocationDataProvider>
        <QueryProvider>
          <Navbar />
        </QueryProvider>
      </LocationDataProvider>
    </div>
  );
}
