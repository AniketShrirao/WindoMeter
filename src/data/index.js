import axios from 'axios';

export const directionsOptions = [
    { label: 'East', value: 'east' },
    { label: 'West', value: 'west' },
    { label: 'South', value: 'south' },
    { label: 'North', value: 'north' },
    { label: 'South-east', value: 'southeast' },
    { label: 'North-east', value: 'northeast' },
    { label: 'North-west', value: 'northwest' },
    { label: 'south-west', value: 'southwest' }
]

export const getDistrictList = () => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}districtdata/getAllDistrictList`).then((res) => {
        console.log(res);
        res.json()
    }).then((data) => {
        console.log(data);
    })
}