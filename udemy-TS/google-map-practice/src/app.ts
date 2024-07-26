import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = '';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
};

const searchAddressHandler = (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      const cordinates = response.data.results[0].geometry.location;
    })
    .catch((err) => {
      console.log(err);
    });
};

form?.addEventListener('submit', searchAddressHandler);
