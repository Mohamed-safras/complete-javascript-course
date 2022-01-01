'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    // thu: {
    //   open: 12,
    //   close: 22,
    // },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [1, 5, 6, 7, [7, 8]];

// const [a, b, c, d, [e, f]] = arr;

// console.log(a, b, c, e, f);

// let [first, second, third] = restaurant.categories;
// [first, second, third] = [third, second, first];
// console.log(first, second, third);

// const {
//   thursday = {
//     open: 13,
//     close: 22,
//     reopen: 2,
//   },
//   fri,
//   sat: { open, close },
//   menu = {},
// } = restaurant.openingHours;
// console.log(thursday);
// console.log(fri);

// console.log(menu);
// console.log(close);

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
const [fin, est, sw, den, nor] = countries;

const { width, perimeter, height, area } = rectangle;

for (const { name, scores, age, skills } of users) {
  if (skills.length < 5) {
    // console.log(name);
  }
}

users.forEach(({ name, scores, skills, age }) => {
  if (skills.length < 4) {
    // console.log(name);
  }
});

const x = users.filter(({ skills }) => {
  return skills.length < 3;
});

// console.log(x);

const allCountries = [
  {
    countryCode: 'AD',
    countryName: 'Andorra',
    currencyCode: 'EUR',
    population: '84000',
    capital: 'Andorra la Vella',
    continentName: 'Europe',
  },
  {
    countryCode: 'AE',
    countryName: 'United Arab Emirates',
    currencyCode: 'AED',
    population: '4975593',
    capital: 'Abu Dhabi',
    continentName: 'Asia',
  },
  {
    countryCode: 'AF',
    countryName: 'Afghanistan',
    currencyCode: 'AFN',
    population: '29121286',
    capital: 'Kabul',
    continentName: 'Asia',
  },
  {
    countryCode: 'AG',
    countryName: 'Antigua and Barbuda',
    currencyCode: 'XCD',
    population: '86754',
    capital: "St. John's",
    continentName: 'North America',
  },
  {
    countryCode: 'AI',
    countryName: 'Anguilla',
    currencyCode: 'XCD',
    population: '13254',
    capital: 'The Valley',
    continentName: 'North America',
  },
  {
    countryCode: 'AL',
    countryName: 'Albania',
    currencyCode: 'ALL',
    population: '2986952',
    capital: 'Tirana',
    continentName: 'Europe',
  },
  {
    countryCode: 'AM',
    countryName: 'Armenia',
    currencyCode: 'AMD',
    population: '2968000',
    capital: 'Yerevan',
    continentName: 'Asia',
  },
  {
    countryCode: 'AO',
    countryName: 'Angola',
    currencyCode: 'AOA',
    population: '13068161',
    capital: 'Luanda',
    continentName: 'Africa',
  },
  {
    countryCode: 'AQ',
    countryName: 'Antarctica',
    currencyCode: '',
    population: '0',
    capital: '',
    continentName: 'Antarctica',
  },
  {
    countryCode: 'AR',
    countryName: 'Argentina',
    currencyCode: 'ARS',
    population: '41343201',
    capital: 'Buenos Aires',
    continentName: 'South America',
  },
  {
    countryCode: 'AS',
    countryName: 'American Samoa',
    currencyCode: 'USD',
    population: '57881',
    capital: 'Pago Pago',
    continentName: 'Oceania',
  },
  {
    countryCode: 'AT',
    countryName: 'Austria',
    currencyCode: 'EUR',
    population: '8205000',
    capital: 'Vienna',
    continentName: 'Europe',
  },
  {
    countryCode: 'AU',
    countryName: 'Australia',
    currencyCode: 'AUD',
    population: '21515754',
    capital: 'Canberra',
    continentName: 'Oceania',
  },
  {
    countryCode: 'AW',
    countryName: 'Aruba',
    currencyCode: 'AWG',
    population: '71566',
    capital: 'Oranjestad',
    continentName: 'North America',
  },
  {
    countryCode: 'AX',
    countryName: 'Åland',
    currencyCode: 'EUR',
    population: '26711',
    capital: 'Mariehamn',
    continentName: 'Europe',
  },
  {
    countryCode: 'AZ',
    countryName: 'Azerbaijan',
    currencyCode: 'AZN',
    population: '8303512',
    capital: 'Baku',
    continentName: 'Asia',
  },
  {
    countryCode: 'BA',
    countryName: 'Bosnia and Herzegovina',
    currencyCode: 'BAM',
    population: '4590000',
    capital: 'Sarajevo',
    continentName: 'Europe',
  },
  {
    countryCode: 'BB',
    countryName: 'Barbados',
    currencyCode: 'BBD',
    population: '285653',
    capital: 'Bridgetown',
    continentName: 'North America',
  },
  {
    countryCode: 'BD',
    countryName: 'Bangladesh',
    currencyCode: 'BDT',
    population: '156118464',
    capital: 'Dhaka',
    continentName: 'Asia',
  },
  {
    countryCode: 'BE',
    countryName: 'Belgium',
    currencyCode: 'EUR',
    population: '10403000',
    capital: 'Brussels',
    continentName: 'Europe',
  },
  {
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    currencyCode: 'XOF',
    population: '16241811',
    capital: 'Ouagadougou',
    continentName: 'Africa',
  },
  {
    countryCode: 'BG',
    countryName: 'Bulgaria',
    currencyCode: 'BGN',
    population: '7148785',
    capital: 'Sofia',
    continentName: 'Europe',
  },
  {
    countryCode: 'BH',
    countryName: 'Bahrain',
    currencyCode: 'BHD',
    population: '738004',
    capital: 'Manama',
    continentName: 'Asia',
  },
  {
    countryCode: 'BI',
    countryName: 'Burundi',
    currencyCode: 'BIF',
    population: '9863117',
    capital: 'Bujumbura',
    continentName: 'Africa',
  },
  {
    countryCode: 'BJ',
    countryName: 'Benin',
    currencyCode: 'XOF',
    population: '9056010',
    capital: 'Porto-Novo',
    continentName: 'Africa',
  },
  {
    countryCode: 'BL',
    countryName: 'Saint Barthélemy',
    currencyCode: 'EUR',
    population: '8450',
    capital: 'Gustavia',
    continentName: 'North America',
  },
  {
    countryCode: 'BM',
    countryName: 'Bermuda',
    currencyCode: 'BMD',
    population: '65365',
    capital: 'Hamilton',
    continentName: 'North America',
  },
  {
    countryCode: 'BN',
    countryName: 'Brunei',
    currencyCode: 'BND',
    population: '395027',
    capital: 'Bandar Seri Begawan',
    continentName: 'Asia',
  },
  {
    countryCode: 'BO',
    countryName: 'Bolivia',
    currencyCode: 'BOB',
    population: '9947418',
    capital: 'Sucre',
    continentName: 'South America',
  },
  {
    countryCode: 'BQ',
    countryName: 'Bonaire',
    currencyCode: 'USD',
    population: '18012',
    capital: 'Kralendijk',
    continentName: 'North America',
  },
  {
    countryCode: 'BR',
    countryName: 'Brazil',
    currencyCode: 'BRL',
    population: '201103330',
    capital: 'Brasília',
    continentName: 'South America',
  },
  {
    countryCode: 'BS',
    countryName: 'Bahamas',
    currencyCode: 'BSD',
    population: '301790',
    capital: 'Nassau',
    continentName: 'North America',
  },
  {
    countryCode: 'BT',
    countryName: 'Bhutan',
    currencyCode: 'BTN',
    population: '699847',
    capital: 'Thimphu',
    continentName: 'Asia',
  },
  {
    countryCode: 'BV',
    countryName: 'Bouvet Island',
    currencyCode: 'NOK',
    population: '0',
    capital: '',
    continentName: 'Antarctica',
  },
  {
    countryCode: 'BW',
    countryName: 'Botswana',
    currencyCode: 'BWP',
    population: '2029307',
    capital: 'Gaborone',
    continentName: 'Africa',
  },
  {
    countryCode: 'BY',
    countryName: 'Belarus',
    currencyCode: 'BYR',
    population: '9685000',
    capital: 'Minsk',
    continentName: 'Europe',
  },
  {
    countryCode: 'BZ',
    countryName: 'Belize',
    currencyCode: 'BZD',
    population: '314522',
    capital: 'Belmopan',
    continentName: 'North America',
  },
  {
    countryCode: 'CA',
    countryName: 'Canada',
    currencyCode: 'CAD',
    population: '33679000',
    capital: 'Ottawa',
    continentName: 'North America',
  },
  {
    countryCode: 'CC',
    countryName: 'Cocos [Keeling] Islands',
    currencyCode: 'AUD',
    population: '628',
    capital: 'West Island',
    continentName: 'Asia',
  },
  {
    countryCode: 'CD',
    countryName: 'Democratic Republic of the Congo',
    currencyCode: 'CDF',
    population: '70916439',
    capital: 'Kinshasa',
    continentName: 'Africa',
  },
  {
    countryCode: 'CF',
    countryName: 'Central African Republic',
    currencyCode: 'XAF',
    population: '4844927',
    capital: 'Bangui',
    continentName: 'Africa',
  },
  {
    countryCode: 'CG',
    countryName: 'Republic of the Congo',
    currencyCode: 'XAF',
    population: '3039126',
    capital: 'Brazzaville',
    continentName: 'Africa',
  },
  {
    countryCode: 'CH',
    countryName: 'Switzerland',
    currencyCode: 'CHF',
    population: '7581000',
    capital: 'Bern',
    continentName: 'Europe',
  },
  {
    countryCode: 'CI',
    countryName: 'Ivory Coast',
    currencyCode: 'XOF',
    population: '21058798',
    capital: 'Yamoussoukro',
    continentName: 'Africa',
  },
  {
    countryCode: 'CK',
    countryName: 'Cook Islands',
    currencyCode: 'NZD',
    population: '21388',
    capital: 'Avarua',
    continentName: 'Oceania',
  },
  {
    countryCode: 'CL',
    countryName: 'Chile',
    currencyCode: 'CLP',
    population: '16746491',
    capital: 'Santiago',
    continentName: 'South America',
  },
  {
    countryCode: 'CM',
    countryName: 'Cameroon',
    currencyCode: 'XAF',
    population: '19294149',
    capital: 'Yaoundé',
    continentName: 'Africa',
  },
  {
    countryCode: 'CN',
    countryName: 'China',
    currencyCode: 'CNY',
    population: '1330044000',
    capital: 'Beijing',
    continentName: 'Asia',
  },
  {
    countryCode: 'CO',
    countryName: 'Colombia',
    currencyCode: 'COP',
    population: '47790000',
    capital: 'Bogotá',
    continentName: 'South America',
  },
  {
    countryCode: 'CR',
    countryName: 'Costa Rica',
    currencyCode: 'CRC',
    population: '4516220',
    capital: 'San José',
    continentName: 'North America',
  },
  {
    countryCode: 'CU',
    countryName: 'Cuba',
    currencyCode: 'CUP',
    population: '11423000',
    capital: 'Havana',
    continentName: 'North America',
  },
  {
    countryCode: 'CV',
    countryName: 'Cape Verde',
    currencyCode: 'CVE',
    population: '508659',
    capital: 'Praia',
    continentName: 'Africa',
  },
  {
    countryCode: 'CW',
    countryName: 'Curacao',
    currencyCode: 'ANG',
    population: '141766',
    capital: 'Willemstad',
    continentName: 'North America',
  },
  {
    countryCode: 'CX',
    countryName: 'Christmas Island',
    currencyCode: 'AUD',
    population: '1500',
    capital: 'Flying Fish Cove',
    continentName: 'Asia',
  },
  {
    countryCode: 'CY',
    countryName: 'Cyprus',
    currencyCode: 'EUR',
    population: '1102677',
    capital: 'Nicosia',
    continentName: 'Europe',
  },
  {
    countryCode: 'CZ',
    countryName: 'Czechia',
    currencyCode: 'CZK',
    population: '10476000',
    capital: 'Prague',
    continentName: 'Europe',
  },
  {
    countryCode: 'DE',
    countryName: 'Germany',
    currencyCode: 'EUR',
    population: '81802257',
    capital: 'Berlin',
    continentName: 'Europe',
  },
  {
    countryCode: 'DJ',
    countryName: 'Djibouti',
    currencyCode: 'DJF',
    population: '740528',
    capital: 'Djibouti',
    continentName: 'Africa',
  },
  {
    countryCode: 'DK',
    countryName: 'Denmark',
    currencyCode: 'DKK',
    population: '5484000',
    capital: 'Copenhagen',
    continentName: 'Europe',
  },
  {
    countryCode: 'DM',
    countryName: 'Dominica',
    currencyCode: 'XCD',
    population: '72813',
    capital: 'Roseau',
    continentName: 'North America',
  },
  {
    countryCode: 'DO',
    countryName: 'Dominican Republic',
    currencyCode: 'DOP',
    population: '9823821',
    capital: 'Santo Domingo',
    continentName: 'North America',
  },
  {
    countryCode: 'DZ',
    countryName: 'Algeria',
    currencyCode: 'DZD',
    population: '34586184',
    capital: 'Algiers',
    continentName: 'Africa',
  },
  {
    countryCode: 'EC',
    countryName: 'Ecuador',
    currencyCode: 'USD',
    population: '14790608',
    capital: 'Quito',
    continentName: 'South America',
  },
  {
    countryCode: 'EE',
    countryName: 'Estonia',
    currencyCode: 'EUR',
    population: '1291170',
    capital: 'Tallinn',
    continentName: 'Europe',
  },
  {
    countryCode: 'EG',
    countryName: 'Egypt',
    currencyCode: 'EGP',
    population: '80471869',
    capital: 'Cairo',
    continentName: 'Africa',
  },
  {
    countryCode: 'EH',
    countryName: 'Western Sahara',
    currencyCode: 'MAD',
    population: '273008',
    capital: 'Laâyoune / El Aaiún',
    continentName: 'Africa',
  },
  {
    countryCode: 'ER',
    countryName: 'Eritrea',
    currencyCode: 'ERN',
    population: '5792984',
    capital: 'Asmara',
    continentName: 'Africa',
  },
  {
    countryCode: 'ES',
    countryName: 'Spain',
    currencyCode: 'EUR',
    population: '46505963',
    capital: 'Madrid',
    continentName: 'Europe',
  },
  {
    countryCode: 'ET',
    countryName: 'Ethiopia',
    currencyCode: 'ETB',
    population: '88013491',
    capital: 'Addis Ababa',
    continentName: 'Africa',
  },
  {
    countryCode: 'FI',
    countryName: 'Finland',
    currencyCode: 'EUR',
    population: '5244000',
    capital: 'Helsinki',
    continentName: 'Europe',
  },
  {
    countryCode: 'FJ',
    countryName: 'Fiji',
    currencyCode: 'FJD',
    population: '875983',
    capital: 'Suva',
    continentName: 'Oceania',
  },
  {
    countryCode: 'FK',
    countryName: 'Falkland Islands',
    currencyCode: 'FKP',
    population: '2638',
    capital: 'Stanley',
    continentName: 'South America',
  },
  {
    countryCode: 'FM',
    countryName: 'Micronesia',
    currencyCode: 'USD',
    population: '107708',
    capital: 'Palikir',
    continentName: 'Oceania',
  },
  {
    countryCode: 'FO',
    countryName: 'Faroe Islands',
    currencyCode: 'DKK',
    population: '48228',
    capital: 'Tórshavn',
    continentName: 'Europe',
  },
  {
    countryCode: 'FR',
    countryName: 'France',
    currencyCode: 'EUR',
    population: '64768389',
    capital: 'Paris',
    continentName: 'Europe',
  },
  {
    countryCode: 'GA',
    countryName: 'Gabon',
    currencyCode: 'XAF',
    population: '1545255',
    capital: 'Libreville',
    continentName: 'Africa',
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    currencyCode: 'GBP',
    population: '62348447',
    capital: 'London',
    continentName: 'Europe',
  },
  {
    countryCode: 'GD',
    countryName: 'Grenada',
    currencyCode: 'XCD',
    population: '107818',
    capital: "St. George's",
    continentName: 'North America',
  },
  {
    countryCode: 'GE',
    countryName: 'Georgia',
    currencyCode: 'GEL',
    population: '4630000',
    capital: 'Tbilisi',
    continentName: 'Asia',
  },
  {
    countryCode: 'GF',
    countryName: 'French Guiana',
    currencyCode: 'EUR',
    population: '195506',
    capital: 'Cayenne',
    continentName: 'South America',
  },
  {
    countryCode: 'GG',
    countryName: 'Guernsey',
    currencyCode: 'GBP',
    population: '65228',
    capital: 'St Peter Port',
    continentName: 'Europe',
  },
  {
    countryCode: 'GH',
    countryName: 'Ghana',
    currencyCode: 'GHS',
    population: '24339838',
    capital: 'Accra',
    continentName: 'Africa',
  },
  {
    countryCode: 'GI',
    countryName: 'Gibraltar',
    currencyCode: 'GIP',
    population: '27884',
    capital: 'Gibraltar',
    continentName: 'Europe',
  },
  {
    countryCode: 'GL',
    countryName: 'Greenland',
    currencyCode: 'DKK',
    population: '56375',
    capital: 'Nuuk',
    continentName: 'North America',
  },
  {
    countryCode: 'GM',
    countryName: 'Gambia',
    currencyCode: 'GMD',
    population: '1593256',
    capital: 'Bathurst',
    continentName: 'Africa',
  },
  {
    countryCode: 'GN',
    countryName: 'Guinea',
    currencyCode: 'GNF',
    population: '10324025',
    capital: 'Conakry',
    continentName: 'Africa',
  },
  {
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    currencyCode: 'EUR',
    population: '443000',
    capital: 'Basse-Terre',
    continentName: 'North America',
  },
  {
    countryCode: 'GQ',
    countryName: 'Equatorial Guinea',
    currencyCode: 'XAF',
    population: '1014999',
    capital: 'Malabo',
    continentName: 'Africa',
  },
  {
    countryCode: 'GR',
    countryName: 'Greece',
    currencyCode: 'EUR',
    population: '11000000',
    capital: 'Athens',
    continentName: 'Europe',
  },
  {
    countryCode: 'GS',
    countryName: 'South Georgia and the South Sandwich Islands',
    currencyCode: 'GBP',
    population: '30',
    capital: 'Grytviken',
    continentName: 'Antarctica',
  },
  {
    countryCode: 'GT',
    countryName: 'Guatemala',
    currencyCode: 'GTQ',
    population: '13550440',
    capital: 'Guatemala City',
    continentName: 'North America',
  },
  {
    countryCode: 'GU',
    countryName: 'Guam',
    currencyCode: 'USD',
    population: '159358',
    capital: 'Hagåtña',
    continentName: 'Oceania',
  },
  {
    countryCode: 'GW',
    countryName: 'Guinea-Bissau',
    currencyCode: 'XOF',
    population: '1565126',
    capital: 'Bissau',
    continentName: 'Africa',
  },
  {
    countryCode: 'GY',
    countryName: 'Guyana',
    currencyCode: 'GYD',
    population: '748486',
    capital: 'Georgetown',
    continentName: 'South America',
  },
  {
    countryCode: 'HK',
    countryName: 'Hong Kong',
    currencyCode: 'HKD',
    population: '6898686',
    capital: 'Hong Kong',
    continentName: 'Asia',
  },
  {
    countryCode: 'HM',
    countryName: 'Heard Island and McDonald Islands',
    currencyCode: 'AUD',
    population: '0',
    capital: '',
    continentName: 'Antarctica',
  },
  {
    countryCode: 'HN',
    countryName: 'Honduras',
    currencyCode: 'HNL',
    population: '7989415',
    capital: 'Tegucigalpa',
    continentName: 'North America',
  },
  {
    countryCode: 'HR',
    countryName: 'Croatia',
    currencyCode: 'HRK',
    population: '4284889',
    capital: 'Zagreb',
    continentName: 'Europe',
  },
  {
    countryCode: 'HT',
    countryName: 'Haiti',
    currencyCode: 'HTG',
    population: '9648924',
    capital: 'Port-au-Prince',
    continentName: 'North America',
  },
  {
    countryCode: 'HU',
    countryName: 'Hungary',
    currencyCode: 'HUF',
    population: '9982000',
    capital: 'Budapest',
    continentName: 'Europe',
  },
  {
    countryCode: 'ID',
    countryName: 'Indonesia',
    currencyCode: 'IDR',
    population: '242968342',
    capital: 'Jakarta',
    continentName: 'Asia',
  },
  {
    countryCode: 'IE',
    countryName: 'Ireland',
    currencyCode: 'EUR',
    population: '4622917',
    capital: 'Dublin',
    continentName: 'Europe',
  },
  {
    countryCode: 'IL',
    countryName: 'Israel',
    currencyCode: 'ILS',
    population: '7353985',
    capital: '',
    continentName: 'Asia',
  },
  {
    countryCode: 'IM',
    countryName: 'Isle of Man',
    currencyCode: 'GBP',
    population: '75049',
    capital: 'Douglas',
    continentName: 'Europe',
  },
  {
    countryCode: 'IN',
    countryName: 'India',
    currencyCode: 'INR',
    population: '1173108018',
    capital: 'New Delhi',
    continentName: 'Asia',
  },
  {
    countryCode: 'IO',
    countryName: 'British Indian Ocean Territory',
    currencyCode: 'USD',
    population: '4000',
    capital: '',
    continentName: 'Asia',
  },
  {
    countryCode: 'IQ',
    countryName: 'Iraq',
    currencyCode: 'IQD',
    population: '29671605',
    capital: 'Baghdad',
    continentName: 'Asia',
  },
  {
    countryCode: 'IR',
    countryName: 'Iran',
    currencyCode: 'IRR',
    population: '76923300',
    capital: 'Tehran',
    continentName: 'Asia',
  },
  {
    countryCode: 'IS',
    countryName: 'Iceland',
    currencyCode: 'ISK',
    population: '308910',
    capital: 'Reykjavik',
    continentName: 'Europe',
  },
  {
    countryCode: 'IT',
    countryName: 'Italy',
    currencyCode: 'EUR',
    population: '60340328',
    capital: 'Rome',
    continentName: 'Europe',
  },
  {
    countryCode: 'JE',
    countryName: 'Jersey',
    currencyCode: 'GBP',
    population: '90812',
    capital: 'Saint Helier',
    continentName: 'Europe',
  },
  {
    countryCode: 'JM',
    countryName: 'Jamaica',
    currencyCode: 'JMD',
    population: '2847232',
    capital: 'Kingston',
    continentName: 'North America',
  },
  {
    countryCode: 'JO',
    countryName: 'Jordan',
    currencyCode: 'JOD',
    population: '6407085',
    capital: 'Amman',
    continentName: 'Asia',
  },
  {
    countryCode: 'JP',
    countryName: 'Japan',
    currencyCode: 'JPY',
    population: '127288000',
    capital: 'Tokyo',
    continentName: 'Asia',
  },
  {
    countryCode: 'KE',
    countryName: 'Kenya',
    currencyCode: 'KES',
    population: '40046566',
    capital: 'Nairobi',
    continentName: 'Africa',
  },
  {
    countryCode: 'KG',
    countryName: 'Kyrgyzstan',
    currencyCode: 'KGS',
    population: '5776500',
    capital: 'Bishkek',
    continentName: 'Asia',
  },
  {
    countryCode: 'KH',
    countryName: 'Cambodia',
    currencyCode: 'KHR',
    population: '14453680',
    capital: 'Phnom Penh',
    continentName: 'Asia',
  },
  {
    countryCode: 'KI',
    countryName: 'Kiribati',
    currencyCode: 'AUD',
    population: '92533',
    capital: 'Tarawa',
    continentName: 'Oceania',
  },
  {
    countryCode: 'KM',
    countryName: 'Comoros',
    currencyCode: 'KMF',
    population: '773407',
    capital: 'Moroni',
    continentName: 'Africa',
  },
  {
    countryCode: 'KN',
    countryName: 'Saint Kitts and Nevis',
    currencyCode: 'XCD',
    population: '51134',
    capital: 'Basseterre',
    continentName: 'North America',
  },
  {
    countryCode: 'KP',
    countryName: 'North Korea',
    currencyCode: 'KPW',
    population: '22912177',
    capital: 'Pyongyang',
    continentName: 'Asia',
  },
  {
    countryCode: 'KR',
    countryName: 'South Korea',
    currencyCode: 'KRW',
    population: '48422644',
    capital: 'Seoul',
    continentName: 'Asia',
  },
  {
    countryCode: 'KW',
    countryName: 'Kuwait',
    currencyCode: 'KWD',
    population: '2789132',
    capital: 'Kuwait City',
    continentName: 'Asia',
  },
  {
    countryCode: 'KY',
    countryName: 'Cayman Islands',
    currencyCode: 'KYD',
    population: '44270',
    capital: 'George Town',
    continentName: 'North America',
  },
  {
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    currencyCode: 'KZT',
    population: '15340000',
    capital: 'Astana',
    continentName: 'Asia',
  },
  {
    countryCode: 'LA',
    countryName: 'Laos',
    currencyCode: 'LAK',
    population: '6368162',
    capital: 'Vientiane',
    continentName: 'Asia',
  },
  {
    countryCode: 'LB',
    countryName: 'Lebanon',
    currencyCode: 'LBP',
    population: '4125247',
    capital: 'Beirut',
    continentName: 'Asia',
  },
  {
    countryCode: 'LC',
    countryName: 'Saint Lucia',
    currencyCode: 'XCD',
    population: '160922',
    capital: 'Castries',
    continentName: 'North America',
  },
  {
    countryCode: 'LI',
    countryName: 'Liechtenstein',
    currencyCode: 'CHF',
    population: '35000',
    capital: 'Vaduz',
    continentName: 'Europe',
  },
  {
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    currencyCode: 'LKR',
    population: '21513990',
    capital: 'Colombo',
    continentName: 'Asia',
  },
  {
    countryCode: 'LR',
    countryName: 'Liberia',
    currencyCode: 'LRD',
    population: '3685076',
    capital: 'Monrovia',
    continentName: 'Africa',
  },
  {
    countryCode: 'LS',
    countryName: 'Lesotho',
    currencyCode: 'LSL',
    population: '1919552',
    capital: 'Maseru',
    continentName: 'Africa',
  },
  {
    countryCode: 'LT',
    countryName: 'Lithuania',
    currencyCode: 'EUR',
    population: '2944459',
    capital: 'Vilnius',
    continentName: 'Europe',
  },
  {
    countryCode: 'LU',
    countryName: 'Luxembourg',
    currencyCode: 'EUR',
    population: '497538',
    capital: 'Luxembourg',
    continentName: 'Europe',
  },
  {
    countryCode: 'LV',
    countryName: 'Latvia',
    currencyCode: 'EUR',
    population: '2217969',
    capital: 'Riga',
    continentName: 'Europe',
  },
  {
    countryCode: 'LY',
    countryName: 'Libya',
    currencyCode: 'LYD',
    population: '6461454',
    capital: 'Tripoli',
    continentName: 'Africa',
  },
  {
    countryCode: 'MA',
    countryName: 'Morocco',
    currencyCode: 'MAD',
    population: '33848242',
    capital: 'Rabat',
    continentName: 'Africa',
  },
  {
    countryCode: 'MC',
    countryName: 'Monaco',
    currencyCode: 'EUR',
    population: '32965',
    capital: 'Monaco',
    continentName: 'Europe',
  },
  {
    countryCode: 'MD',
    countryName: 'Moldova',
    currencyCode: 'MDL',
    population: '4324000',
    capital: 'Chişinău',
    continentName: 'Europe',
  },
  {
    countryCode: 'ME',
    countryName: 'Montenegro',
    currencyCode: 'EUR',
    population: '666730',
    capital: 'Podgorica',
    continentName: 'Europe',
  },
  {
    countryCode: 'MF',
    countryName: 'Saint Martin',
    currencyCode: 'EUR',
    population: '35925',
    capital: 'Marigot',
    continentName: 'North America',
  },
  {
    countryCode: 'MG',
    countryName: 'Madagascar',
    currencyCode: 'MGA',
    population: '21281844',
    capital: 'Antananarivo',
    continentName: 'Africa',
  },
  {
    countryCode: 'MH',
    countryName: 'Marshall Islands',
    currencyCode: 'USD',
    population: '65859',
    capital: 'Majuro',
    continentName: 'Oceania',
  },
  {
    countryCode: 'MK',
    countryName: 'Macedonia',
    currencyCode: 'MKD',
    population: '2062294',
    capital: 'Skopje',
    continentName: 'Europe',
  },
  {
    countryCode: 'ML',
    countryName: 'Mali',
    currencyCode: 'XOF',
    population: '13796354',
    capital: 'Bamako',
    continentName: 'Africa',
  },
  {
    countryCode: 'MM',
    countryName: 'Myanmar [Burma]',
    currencyCode: 'MMK',
    population: '53414374',
    capital: 'Naypyitaw',
    continentName: 'Asia',
  },
  {
    countryCode: 'MN',
    countryName: 'Mongolia',
    currencyCode: 'MNT',
    population: '3086918',
    capital: 'Ulan Bator',
    continentName: 'Asia',
  },
  {
    countryCode: 'MO',
    countryName: 'Macao',
    currencyCode: 'MOP',
    population: '449198',
    capital: 'Macao',
    continentName: 'Asia',
  },
  {
    countryCode: 'MP',
    countryName: 'Northern Mariana Islands',
    currencyCode: 'USD',
    population: '53883',
    capital: 'Saipan',
    continentName: 'Oceania',
  },
  {
    countryCode: 'MQ',
    countryName: 'Martinique',
    currencyCode: 'EUR',
    population: '432900',
    capital: 'Fort-de-France',
    continentName: 'North America',
  },
  {
    countryCode: 'MR',
    countryName: 'Mauritania',
    currencyCode: 'MRO',
    population: '3205060',
    capital: 'Nouakchott',
    continentName: 'Africa',
  },
  {
    countryCode: 'MS',
    countryName: 'Montserrat',
    currencyCode: 'XCD',
    population: '9341',
    capital: 'Plymouth',
    continentName: 'North America',
  },
  {
    countryCode: 'MT',
    countryName: 'Malta',
    currencyCode: 'EUR',
    population: '403000',
    capital: 'Valletta',
    continentName: 'Europe',
  },
  {
    countryCode: 'MU',
    countryName: 'Mauritius',
    currencyCode: 'MUR',
    population: '1294104',
    capital: 'Port Louis',
    continentName: 'Africa',
  },
  {
    countryCode: 'MV',
    countryName: 'Maldives',
    currencyCode: 'MVR',
    population: '395650',
    capital: 'Malé',
    continentName: 'Asia',
  },
  {
    countryCode: 'MW',
    countryName: 'Malawi',
    currencyCode: 'MWK',
    population: '15447500',
    capital: 'Lilongwe',
    continentName: 'Africa',
  },
  {
    countryCode: 'MX',
    countryName: 'Mexico',
    currencyCode: 'MXN',
    population: '112468855',
    capital: 'Mexico City',
    continentName: 'North America',
  },
  {
    countryCode: 'MY',
    countryName: 'Malaysia',
    currencyCode: 'MYR',
    population: '28274729',
    capital: 'Kuala Lumpur',
    continentName: 'Asia',
  },
  {
    countryCode: 'MZ',
    countryName: 'Mozambique',
    currencyCode: 'MZN',
    population: '22061451',
    capital: 'Maputo',
    continentName: 'Africa',
  },
  {
    countryCode: 'NA',
    countryName: 'Namibia',
    currencyCode: 'NAD',
    population: '2128471',
    capital: 'Windhoek',
    continentName: 'Africa',
  },
  {
    countryCode: 'NC',
    countryName: 'New Caledonia',
    currencyCode: 'XPF',
    population: '216494',
    capital: 'Noumea',
    continentName: 'Oceania',
  },
  {
    countryCode: 'NE',
    countryName: 'Niger',
    currencyCode: 'XOF',
    population: '15878271',
    capital: 'Niamey',
    continentName: 'Africa',
  },
  {
    countryCode: 'NF',
    countryName: 'Norfolk Island',
    currencyCode: 'AUD',
    population: '1828',
    capital: 'Kingston',
    continentName: 'Oceania',
  },
  {
    countryCode: 'NG',
    countryName: 'Nigeria',
    currencyCode: 'NGN',
    population: '154000000',
    capital: 'Abuja',
    continentName: 'Africa',
  },
  {
    countryCode: 'NI',
    countryName: 'Nicaragua',
    currencyCode: 'NIO',
    population: '5995928',
    capital: 'Managua',
    continentName: 'North America',
  },
  {
    countryCode: 'NL',
    countryName: 'Netherlands',
    currencyCode: 'EUR',
    population: '16645000',
    capital: 'Amsterdam',
    continentName: 'Europe',
  },
  {
    countryCode: 'NO',
    countryName: 'Norway',
    currencyCode: 'NOK',
    population: '5009150',
    capital: 'Oslo',
    continentName: 'Europe',
  },
  {
    countryCode: 'NP',
    countryName: 'Nepal',
    currencyCode: 'NPR',
    population: '28951852',
    capital: 'Kathmandu',
    continentName: 'Asia',
  },
  {
    countryCode: 'NR',
    countryName: 'Nauru',
    currencyCode: 'AUD',
    population: '10065',
    capital: 'Yaren',
    continentName: 'Oceania',
  },
  {
    countryCode: 'NU',
    countryName: 'Niue',
    currencyCode: 'NZD',
    population: '2166',
    capital: 'Alofi',
    continentName: 'Oceania',
  },
  {
    countryCode: 'NZ',
    countryName: 'New Zealand',
    currencyCode: 'NZD',
    population: '4252277',
    capital: 'Wellington',
    continentName: 'Oceania',
  },
  {
    countryCode: 'OM',
    countryName: 'Oman',
    currencyCode: 'OMR',
    population: '2967717',
    capital: 'Muscat',
    continentName: 'Asia',
  },
  {
    countryCode: 'PA',
    countryName: 'Panama',
    currencyCode: 'PAB',
    population: '3410676',
    capital: 'Panama City',
    continentName: 'North America',
  },
  {
    countryCode: 'PE',
    countryName: 'Peru',
    currencyCode: 'PEN',
    population: '29907003',
    capital: 'Lima',
    continentName: 'South America',
  },
  {
    countryCode: 'PF',
    countryName: 'French Polynesia',
    currencyCode: 'XPF',
    population: '270485',
    capital: 'Papeete',
    continentName: 'Oceania',
  },
  {
    countryCode: 'PG',
    countryName: 'Papua New Guinea',
    currencyCode: 'PGK',
    population: '6064515',
    capital: 'Port Moresby',
    continentName: 'Oceania',
  },
  {
    countryCode: 'PH',
    countryName: 'Philippines',
    currencyCode: 'PHP',
    population: '99900177',
    capital: 'Manila',
    continentName: 'Asia',
  },
  {
    countryCode: 'PK',
    countryName: 'Pakistan',
    currencyCode: 'PKR',
    population: '184404791',
    capital: 'Islamabad',
    continentName: 'Asia',
  },
  {
    countryCode: 'PL',
    countryName: 'Poland',
    currencyCode: 'PLN',
    population: '38500000',
    capital: 'Warsaw',
    continentName: 'Europe',
  },
  {
    countryCode: 'PM',
    countryName: 'Saint Pierre and Miquelon',
    currencyCode: 'EUR',
    population: '7012',
    capital: 'Saint-Pierre',
    continentName: 'North America',
  },
  {
    countryCode: 'PN',
    countryName: 'Pitcairn Islands',
    currencyCode: 'NZD',
    population: '46',
    capital: 'Adamstown',
    continentName: 'Oceania',
  },
  {
    countryCode: 'PR',
    countryName: 'Puerto Rico',
    currencyCode: 'USD',
    population: '3916632',
    capital: 'San Juan',
    continentName: 'North America',
  },
  {
    countryCode: 'PS',
    countryName: 'Palestine',
    currencyCode: 'ILS',
    population: '3800000',
    capital: '',
    continentName: 'Asia',
  },
  {
    countryCode: 'PT',
    countryName: 'Portugal',
    currencyCode: 'EUR',
    population: '10676000',
    capital: 'Lisbon',
    continentName: 'Europe',
  },
  {
    countryCode: 'PW',
    countryName: 'Palau',
    currencyCode: 'USD',
    population: '19907',
    capital: 'Melekeok',
    continentName: 'Oceania',
  },
  {
    countryCode: 'PY',
    countryName: 'Paraguay',
    currencyCode: 'PYG',
    population: '6375830',
    capital: 'Asunción',
    continentName: 'South America',
  },
  {
    countryCode: 'QA',
    countryName: 'Qatar',
    currencyCode: 'QAR',
    population: '840926',
    capital: 'Doha',
    continentName: 'Asia',
  },
  {
    countryCode: 'RE',
    countryName: 'Réunion',
    currencyCode: 'EUR',
    population: '776948',
    capital: 'Saint-Denis',
    continentName: 'Africa',
  },
  {
    countryCode: 'RO',
    countryName: 'Romania',
    currencyCode: 'RON',
    population: '21959278',
    capital: 'Bucharest',
    continentName: 'Europe',
  },
  {
    countryCode: 'RS',
    countryName: 'Serbia',
    currencyCode: 'RSD',
    population: '7344847',
    capital: 'Belgrade',
    continentName: 'Europe',
  },
  {
    countryCode: 'RU',
    countryName: 'Russia',
    currencyCode: 'RUB',
    population: '140702000',
    capital: 'Moscow',
    continentName: 'Europe',
  },
  {
    countryCode: 'RW',
    countryName: 'Rwanda',
    currencyCode: 'RWF',
    population: '11055976',
    capital: 'Kigali',
    continentName: 'Africa',
  },
  {
    countryCode: 'SA',
    countryName: 'Saudi Arabia',
    currencyCode: 'SAR',
    population: '25731776',
    capital: 'Riyadh',
    continentName: 'Asia',
  },
  {
    countryCode: 'SB',
    countryName: 'Solomon Islands',
    currencyCode: 'SBD',
    population: '559198',
    capital: 'Honiara',
    continentName: 'Oceania',
  },
  {
    countryCode: 'SC',
    countryName: 'Seychelles',
    currencyCode: 'SCR',
    population: '88340',
    capital: 'Victoria',
    continentName: 'Africa',
  },
  {
    countryCode: 'SD',
    countryName: 'Sudan',
    currencyCode: 'SDG',
    population: '35000000',
    capital: 'Khartoum',
    continentName: 'Africa',
  },
  {
    countryCode: 'SE',
    countryName: 'Sweden',
    currencyCode: 'SEK',
    population: '9828655',
    capital: 'Stockholm',
    continentName: 'Europe',
  },
  {
    countryCode: 'SG',
    countryName: 'Singapore',
    currencyCode: 'SGD',
    population: '4701069',
    capital: 'Singapore',
    continentName: 'Asia',
  },
  {
    countryCode: 'SH',
    countryName: 'Saint Helena',
    currencyCode: 'SHP',
    population: '7460',
    capital: 'Jamestown',
    continentName: 'Africa',
  },
  {
    countryCode: 'SI',
    countryName: 'Slovenia',
    currencyCode: 'EUR',
    population: '2007000',
    capital: 'Ljubljana',
    continentName: 'Europe',
  },
  {
    countryCode: 'SJ',
    countryName: 'Svalbard and Jan Mayen',
    currencyCode: 'NOK',
    population: '2550',
    capital: 'Longyearbyen',
    continentName: 'Europe',
  },
  {
    countryCode: 'SK',
    countryName: 'Slovakia',
    currencyCode: 'EUR',
    population: '5455000',
    capital: 'Bratislava',
    continentName: 'Europe',
  },
  {
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    currencyCode: 'SLL',
    population: '5245695',
    capital: 'Freetown',
    continentName: 'Africa',
  },
  {
    countryCode: 'SM',
    countryName: 'San Marino',
    currencyCode: 'EUR',
    population: '31477',
    capital: 'San Marino',
    continentName: 'Europe',
  },
  {
    countryCode: 'SN',
    countryName: 'Senegal',
    currencyCode: 'XOF',
    population: '12323252',
    capital: 'Dakar',
    continentName: 'Africa',
  },
  {
    countryCode: 'SO',
    countryName: 'Somalia',
    currencyCode: 'SOS',
    population: '10112453',
    capital: 'Mogadishu',
    continentName: 'Africa',
  },
  {
    countryCode: 'SR',
    countryName: 'Suriname',
    currencyCode: 'SRD',
    population: '492829',
    capital: 'Paramaribo',
    continentName: 'South America',
  },
  {
    countryCode: 'SS',
    countryName: 'South Sudan',
    currencyCode: 'SSP',
    population: '8260490',
    capital: 'Juba',
    continentName: 'Africa',
  },
  {
    countryCode: 'ST',
    countryName: 'São Tomé and Príncipe',
    currencyCode: 'STD',
    population: '175808',
    capital: 'São Tomé',
    continentName: 'Africa',
  },
  {
    countryCode: 'SV',
    countryName: 'El Salvador',
    currencyCode: 'USD',
    population: '6052064',
    capital: 'San Salvador',
    continentName: 'North America',
  },
  {
    countryCode: 'SX',
    countryName: 'Sint Maarten',
    currencyCode: 'ANG',
    population: '37429',
    capital: 'Philipsburg',
    continentName: 'North America',
  },
  {
    countryCode: 'SY',
    countryName: 'Syria',
    currencyCode: 'SYP',
    population: '22198110',
    capital: 'Damascus',
    continentName: 'Asia',
  },
  {
    countryCode: 'SZ',
    countryName: 'Swaziland',
    currencyCode: 'SZL',
    population: '1354051',
    capital: 'Mbabane',
    continentName: 'Africa',
  },
  {
    countryCode: 'TC',
    countryName: 'Turks and Caicos Islands',
    currencyCode: 'USD',
    population: '20556',
    capital: 'Cockburn Town',
    continentName: 'North America',
  },
  {
    countryCode: 'TD',
    countryName: 'Chad',
    currencyCode: 'XAF',
    population: '10543464',
    capital: "N'Djamena",
    continentName: 'Africa',
  },
  {
    countryCode: 'TF',
    countryName: 'French Southern Territories',
    currencyCode: 'EUR',
    population: '140',
    capital: 'Port-aux-Français',
    continentName: 'Antarctica',
  },
  {
    countryCode: 'TG',
    countryName: 'Togo',
    currencyCode: 'XOF',
    population: '6587239',
    capital: 'Lomé',
    continentName: 'Africa',
  },
  {
    countryCode: 'TH',
    countryName: 'Thailand',
    currencyCode: 'THB',
    population: '67089500',
    capital: 'Bangkok',
    continentName: 'Asia',
  },
  {
    countryCode: 'TJ',
    countryName: 'Tajikistan',
    currencyCode: 'TJS',
    population: '7487489',
    capital: 'Dushanbe',
    continentName: 'Asia',
  },
  {
    countryCode: 'TK',
    countryName: 'Tokelau',
    currencyCode: 'NZD',
    population: '1466',
    capital: '',
    continentName: 'Oceania',
  },
  {
    countryCode: 'TL',
    countryName: 'East Timor',
    currencyCode: 'USD',
    population: '1154625',
    capital: 'Dili',
    continentName: 'Oceania',
  },
  {
    countryCode: 'TM',
    countryName: 'Turkmenistan',
    currencyCode: 'TMT',
    population: '4940916',
    capital: 'Ashgabat',
    continentName: 'Asia',
  },
  {
    countryCode: 'TN',
    countryName: 'Tunisia',
    currencyCode: 'TND',
    population: '10589025',
    capital: 'Tunis',
    continentName: 'Africa',
  },
  {
    countryCode: 'TO',
    countryName: 'Tonga',
    currencyCode: 'TOP',
    population: '122580',
    capital: "Nuku'alofa",
    continentName: 'Oceania',
  },
  {
    countryCode: 'TR',
    countryName: 'Turkey',
    currencyCode: 'TRY',
    population: '77804122',
    capital: 'Ankara',
    continentName: 'Asia',
  },
  {
    countryCode: 'TT',
    countryName: 'Trinidad and Tobago',
    currencyCode: 'TTD',
    population: '1228691',
    capital: 'Port of Spain',
    continentName: 'North America',
  },
  {
    countryCode: 'TV',
    countryName: 'Tuvalu',
    currencyCode: 'AUD',
    population: '10472',
    capital: 'Funafuti',
    continentName: 'Oceania',
  },
  {
    countryCode: 'TW',
    countryName: 'Taiwan',
    currencyCode: 'TWD',
    population: '22894384',
    capital: 'Taipei',
    continentName: 'Asia',
  },
  {
    countryCode: 'TZ',
    countryName: 'Tanzania',
    currencyCode: 'TZS',
    population: '41892895',
    capital: 'Dodoma',
    continentName: 'Africa',
  },
  {
    countryCode: 'UA',
    countryName: 'Ukraine',
    currencyCode: 'UAH',
    population: '45415596',
    capital: 'Kiev',
    continentName: 'Europe',
  },
  {
    countryCode: 'UG',
    countryName: 'Uganda',
    currencyCode: 'UGX',
    population: '33398682',
    capital: 'Kampala',
    continentName: 'Africa',
  },
  {
    countryCode: 'UM',
    countryName: 'U.S. Minor Outlying Islands',
    currencyCode: 'USD',
    population: '0',
    capital: '',
    continentName: 'Oceania',
  },
  {
    countryCode: 'US',
    countryName: 'United States',
    currencyCode: 'USD',
    population: '310232863',
    capital: 'Washington',
    continentName: 'North America',
  },
  {
    countryCode: 'UY',
    countryName: 'Uruguay',
    currencyCode: 'UYU',
    population: '3477000',
    capital: 'Montevideo',
    continentName: 'South America',
  },
  {
    countryCode: 'UZ',
    countryName: 'Uzbekistan',
    currencyCode: 'UZS',
    population: '27865738',
    capital: 'Tashkent',
    continentName: 'Asia',
  },
  {
    countryCode: 'VA',
    countryName: 'Vatican City',
    currencyCode: 'EUR',
    population: '921',
    capital: 'Vatican City',
    continentName: 'Europe',
  },
  {
    countryCode: 'VC',
    countryName: 'Saint Vincent and the Grenadines',
    currencyCode: 'XCD',
    population: '104217',
    capital: 'Kingstown',
    continentName: 'North America',
  },
  {
    countryCode: 'VE',
    countryName: 'Venezuela',
    currencyCode: 'VEF',
    population: '27223228',
    capital: 'Caracas',
    continentName: 'South America',
  },
  {
    countryCode: 'VG',
    countryName: 'British Virgin Islands',
    currencyCode: 'USD',
    population: '21730',
    capital: 'Road Town',
    continentName: 'North America',
  },
  {
    countryCode: 'VI',
    countryName: 'U.S. Virgin Islands',
    currencyCode: 'USD',
    population: '108708',
    capital: 'Charlotte Amalie',
    continentName: 'North America',
  },
  {
    countryCode: 'VN',
    countryName: 'Vietnam',
    currencyCode: 'VND',
    population: '89571130',
    capital: 'Hanoi',
    continentName: 'Asia',
  },
  {
    countryCode: 'VU',
    countryName: 'Vanuatu',
    currencyCode: 'VUV',
    population: '221552',
    capital: 'Port Vila',
    continentName: 'Oceania',
  },
  {
    countryCode: 'WF',
    countryName: 'Wallis and Futuna',
    currencyCode: 'XPF',
    population: '16025',
    capital: 'Mata-Utu',
    continentName: 'Oceania',
  },
  {
    countryCode: 'WS',
    countryName: 'Samoa',
    currencyCode: 'WST',
    population: '192001',
    capital: 'Apia',
    continentName: 'Oceania',
  },
  {
    countryCode: 'XK',
    countryName: 'Kosovo',
    currencyCode: 'EUR',
    population: '1800000',
    capital: 'Pristina',
    continentName: 'Europe',
  },
  {
    countryCode: 'YE',
    countryName: 'Yemen',
    currencyCode: 'YER',
    population: '23495361',
    capital: 'Sanaa',
    continentName: 'Asia',
  },
  {
    countryCode: 'YT',
    countryName: 'Mayotte',
    currencyCode: 'EUR',
    population: '159042',
    capital: 'Mamoudzou',
    continentName: 'Africa',
  },
  {
    countryCode: 'ZA',
    countryName: 'South Africa',
    currencyCode: 'ZAR',
    population: '49000000',
    capital: 'Pretoria',
    continentName: 'Africa',
  },
  {
    countryCode: 'ZM',
    countryName: 'Zambia',
    currencyCode: 'ZMW',
    population: '13460305',
    capital: 'Lusaka',
    continentName: 'Africa',
  },
  {
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    currencyCode: 'ZWL',
    population: '13061000',
    capital: 'Harare',
    continentName: 'Africa',
  },
];

const [firstCountry, secondCountry, ...otherCountrys] = allCountries;
// console.log(otherCountrys);

for (const {
  countryCode,
  countryName,
  currencyCode,
  population,
  capital,
  continentName,
} of allCountries) {
  // console.log(
  // `${countryCode},${countryName},${currencyCode},${population},${capital}, ${continentName}`);
}

const newUsers = [...users, { ...rectangle, area: 20, perimeter: 200 }];
// console.log(newUsers);

const studentSkills = ['frontEnd', 'backEnd', 'dataBase', 'dataScience'];
const [frontEndSkills, backEndSkills, dataBaseSkills, dataScienceSkills] =
  studentSkills;
const student = {
  name: 'David',
  age: 25,
  skills: {
    [frontEndSkills]: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    [backEndSkills]: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    [dataBaseSkills]: [{ skill: 'MongoDB', level: 7.5 }],
    [dataScienceSkills]: ['Python', 'R', 'D3.js'],
  },
};

let newStudent = { ...student };

let {
  name,
  age,
  skills: { frontEnd, backEnd, dataScience, dataBase },
} = newStudent;

frontEnd = [...frontEnd, { skill: 'Bootstrap', level: 8 }];
backEnd = [...backEnd, { skill: 'Express', level: 9 }];
dataBase = [...dataBase, { skill: 'SQL', level: 8 }];
dataScience = [...dataScience, 'SQL'];
newStudent = {
  ...newStudent,
  skills: {
    frontEnd,
    backEnd,
    dataScience,
    dataBase,
  },
};

// console.log(newStudent);
// console.log(student);

const newObject = {
  name: 'Student',
  age: 22,
};

const { age: Age, name: Name, ...other } = student;
// console.log(other);

const { age: newAge, ...rest } = newObject;
// console.log(rest);

const [a, b, ...restNumber] = [2, ...[1, 2, 3]];
// console.log(restNumber);

const addNumber = (...rest) => {
  let sum = 0;
  //for ...  in loop iterates over the index of array
  for (let i in rest) {
    sum += rest[i];
  }

  //for ...  of loop iterates over the object of object
  for (const i of rest) {
    // console.log(i);
    sum += i;
  }
  // console.log(sum);
};
const numbers = [10, 20, 30, 40];
addNumber(...numbers);

const { skills, ...otherProps } = newStudent;
// console.log(otherProps);
// console.log(skills);

// short circuting

const AB = 0 || 'sd';
// console.log(AB);

// console.log(newStudent);

// newStudent.name && console.log(newStudent.name);

const rest1 = {
  owner: 'safras',
  numGests: 10,
};
const rest2 = {
  numGests: 0,
};

rest1.numGests ??= 10;
rest2.numGests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS';
// rest1.owner = rest1.owner && '<ANONYMOUS';

//assignment and operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

function rgb(r, g, b) {
  const R = convertToHex(r);
  const G = convertToHex(g);
  const B = convertToHex(b);

  return `${R}${G}${B}`;
}

function convertToHex(value) {
  if (value < 0) {
    value = 0;
  } else if (value > 255) {
    value = 255;
  }

  return value < 16
    ? `0${value.toString(16)}`.toUpperCase()
    : `${value.toString(16)}`.toUpperCase();
}

rgb(0, 0, 0);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  // scorers: {
  //   Gnarby: 1,
  //   Hummels: 1,
  //   Lewandowski: 2,
  // },
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals(...names) {
    // console.log(`${names.length}  goals that were scored `);
  },
};

const { team01, team02, players, score, scored, date, odds } = game;

const [players1, players2] = players;
// console.log(players1);
// console.log(players2);

const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(players1Final);

const { team1, draw, team2 } = odds;

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// team1 < team2 && console.log('Team1');
// team2 < team1 && console.log('Team2');

for (const [i, player] of allPlayers.entries()) {
  // if (player === 'Davies') {
  //   break;
  // }
  // console.log(`${i + 1} ${player}`);
}

// console.log([...allPlayers.entries()]);
// for (const item in allPlayers) {
//   if (item === '3') {
//     continue;
//   }
//   console.log(Number(item.concat('0')));
// }
// const entries = Object.entries(scored);
// console.log(entries);
for (const [goalId, scoredBy] of scored.entries()) {
  console.log(`Goal ${goalId + 1}: ${scoredBy}`);
}

const avgOdds = Object.values(odds);

let sum = 0;

for (const item of avgOdds) {
  sum += item / avgOdds.length;
}
console.log(sum);

const Odds = Object.entries(odds);
for (const [team, score] of Odds) {
  console.log(
    `Odd of ${game[team] ? `victory ${game[team]}` : 'draw'} ${score}`
  );
}

let scorers = {};
for (const player of scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

const scoredPlayers = new Set('safras');
// [...scoredPlayers].forEach((item, index) => {
//   console.log(item, index);
// });
// console.log(scoredPlayers.entries());
// for (const scoredItem of scoredPlayers.values()) {
//   console.log(scoredItem);
// }
// console.log(scoredPlayers);

const fruitItems = document.querySelector('#items');
const list = [
  {
    name: 'mango',
    price: 20,
  },
  {
    name: 'banana',
    price: 20,
  },
  {
    name: 'banana',
    price: 20,
  },
  {
    name: 'apple',
    price: 20,
  },
];
let Fruits = [];
for (const { name } of list) {
  Fruits.push(name);
}
const uniqueFruits = ['all', ...new Set(Fruits)];

fruitItems.innerHTML = uniqueFruits
  .map(fruits => {
    return `<option id="fruits" value=${fruits}>${fruits}</option>`;
  })
  .join(' ');

const out = document.querySelector('#out');

fruitItems.addEventListener('change', e => {
  e.preventDefault();

  const selected = e.target.value;

  const menuCategory = list.filter(item => {
    if (selected === item.name) {
      return item;
    }
  });
  if (selected === 'all') {
    all(list);
  } else {
    all(menuCategory);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  all(list);
});

function all(menuItem) {
  out.innerHTML = menuItem
    .map(({ name, price }) => {
      return `<li >${name} ${price}</li>`;
    })
    .join(' ');
}
// Maps

const map = new Map([['sf', 'fsdf']]);
console.log(map);
map
  .set('fruit1', 'mango')
  .set('fruit2', 'banana')
  .set('fruit3', 'apple')
  .set('fruit4', 'orange')
  .set(1, ['hello', 'world']);
console.log(map);

console.log(map.get('fruit1'));

for (const [key] of map) {
  console.log(key);
}
console.log([...map]);
console.log([...map.entries()]);
console.log([...map.keys()]);
console.log([...map.values()]);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
// console.log(events);
gameEvents.delete(64);

for (const [minutes, events] of gameEvents) {
  const half = minutes <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minutes} : ${events}`);
}
const times = [...new Set(gameEvents.keys())].pop();
console.log(times);
console.log(`An event happened, on
average, every ${times / gameEvents.size} minutes `);

console.log('my my'.replace(/my/g, 'i'));

const plane = 'Airbus A320neo';

plane.startsWith('Airbus') &&
  plane.endsWith('neo') &&
  console.log('part of the new airbus family');

const notAllowedItems = ['knife', 'gun', 'cigarate', 'animal'];

const checkBaggage = items => {
  const baggage = items.toLowerCase();
  const passengerContainingItems = [];
  for (const item of notAllowedItems) {
    if (baggage.includes(item)) {
      passengerContainingItems.push(item);
    }
  }

  console.log(
    passengerContainingItems.length > 0
      ? `you have ${passengerContainingItems}.so,you can't carry out these ${
          passengerContainingItems.length > 1 ? 'items' : 'item'
        }`
      : 'you can carray this items'
  );
};

checkBaggage('I have a laptop,some Food and a pocket Knife and gun cigarate');

checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('dsad fsf'.padStart(25, '+'));

const maskCreditCard = number => {
  const str = number.toString();
  const showingNumber = str.slice(-4);
  const x = str.slice(0, -4);
  const hide = x.replace(x, '*'.repeat(x.length));

  const secret = [];

  for (let i = 0; i < hide.length; i += 4) {
    secret.push(hide.substring(i, i + 4));
  }

  console.log(`${secret.join(' ')} ${showingNumber}`);
};

maskCreditCard(1234567891012312);
