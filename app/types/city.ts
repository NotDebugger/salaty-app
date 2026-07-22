export interface City {
  selectedCity: {
    name: string;
    country: string;
  };
  setSelectedCity: React.Dispatch<
    React.SetStateAction<{
      name: string;
      country: string;
    }>
  >;
}
