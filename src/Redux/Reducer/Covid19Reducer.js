import { ADD_COUNTRY, DELETE_COUNTRY, HIDE_MODAL, SET_COUNTRY, SET_DATA, SHOW_MODAL, SORT_BY_NEWCONFIRMEDS, SORT_BY_NEWCONFIRMEDS_FOLLOW, SORT_BY_TOTALCONFIRMEDS, SORT_BY_TOTALCONFIRMEDS_FOLLOW, SORT_BY_TOTALDEATHS, SORT_BY_TOTALDEATHS_FOLLOW, SORT_BY_TOTALRECOVEREDS, SORT_BY_TOTALRECOVEREDS_FOLLOW } from "../../action/types/ActionType";

const stateDefault = {
    arrCountry: [],
    global: {},
    show: false,
    detailCountry: [],
    followCountry: [
        {
            Country: "Viet Nam",
            CountryCode: "VN",
            Date: "2021-10-02T03:15:56.042Z",
            ID: "1b7b59d9-2be0-4570-a96d-17533e249c95",
            NewConfirmed: 6957,
            NewDeaths: 136,
            NewRecovered: 0,
            Slug: "vietnam",
            TotalConfirmed: 797712,
            TotalDeaths: 19437,
            TotalRecovered: 0
        },
        {
            Country: "United States of America",
            CountryCode: "US",
            Date: "2021-10-02T04:37:26.285Z",
            ID: "e39d149d-487c-4e9e-8a57-73819feebe65",
            NewConfirmed: 110594,
            NewDeaths: 2727,
            NewRecovered: 0,
            Slug: "united-states",
            TotalConfirmed: 43460343,
            TotalDeaths: 697851,
            TotalRecovered: 0
        },
        {
            Country: "United Kingdom",
            CountryCode: "GB",
            Date: "2021-10-02T04:37:26.285Z",
            ID: "6a0432c8-3d0b-44aa-a41f-3b1058b2a3f7",
            NewConfirmed: 35833,
            NewDeaths: 137,
            NewRecovered: 0,
            Slug: "united-kingdom",
            TotalConfirmed: 7843887,
            TotalDeaths: 137043,
            TotalRecovered: 0
        },
        {
            Country: "France",
            CountryCode: "FR",
            Date: "2021-10-02T04:37:26.285Z",
            ID: "2de6c64a-1e91-42bd-acc9-a959e7990af5",
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0,
            Slug: "france",
            TotalConfirmed: 7106028,
            TotalDeaths: 117474,
            TotalRecovered: 0
        },
        {
            Country: "India",
            CountryCode: "IN",
            Date: "2021-10-02T04:37:26.285Z",
            ID: "b903de44-03ee-4a92-99c7-fff8ecb771bb",
            NewConfirmed: 26727,
            NewDeaths: 277,
            NewRecovered: 0,
            Slug: "india",
            TotalConfirmed: 33766707,
            TotalDeaths: 448339,
            TotalRecovered: 0
        }
    ]

}

export const Covid19Reducer = (state = stateDefault, action) => {
    // Handle sort data array:
    const sort_by = (key) => {
        return (a, b) => parseInt(b[key]) - parseInt(a[key]);
    }
    switch (action.type) {
        case SET_DATA: {
            state.arrCountry = action.data.Countries;
            state.global = action.data.Global;
            state.arrCountry.sort(sort_by('TotalConfirmed'));

            return { ...state };
        }
        case SORT_BY_NEWCONFIRMEDS: {
            state.arrCountry.sort(sort_by('NewConfirmed'));

            return { ...state };
        }
        case SORT_BY_NEWCONFIRMEDS_FOLLOW: {
            state.followCountry.sort(sort_by('NewConfirmed'));

            return { ...state };
        }
        case SORT_BY_TOTALCONFIRMEDS: {
            state.arrCountry.sort(sort_by('TotalConfirmed'));

            return { ...state };
        }
        case SORT_BY_TOTALCONFIRMEDS_FOLLOW: {
            state.followCountry.sort(sort_by('TotalConfirmed'));

            return { ...state };
        }
        case SORT_BY_TOTALDEATHS: {
            state.arrCountry.sort(sort_by('TotalDeaths'));

            return { ...state };
        }
        case SORT_BY_TOTALDEATHS_FOLLOW: {
            state.followCountry.sort(sort_by('TotalDeaths'));

            return { ...state };
        }
        case SORT_BY_TOTALRECOVEREDS: {
            state.arrCountry.sort(sort_by('TotalRecovered'));

            return { ...state };
        }
        case SORT_BY_TOTALRECOVEREDS_FOLLOW: {
            state.followCountry.sort(sort_by('TotalRecovered'));

            return { ...state };
        }
        case SHOW_MODAL: {
            state.show = true;
            return { ...state };
        }
        case HIDE_MODAL: {
            state.show = false;
            return { ...state };
        }
        case SET_COUNTRY: {
            state.detailCountry = action.data;
            return { ...state };
        }
        case ADD_COUNTRY: {
            let followCountryUpdate = [...state.followCountry];
            let index = followCountryUpdate.findIndex((country) => country.Country === action.data.Country);
            if (index === -1) {
                followCountryUpdate.push(action.data);
            }
            state.followCountry = followCountryUpdate;
            return { ...state };
        }
        case DELETE_COUNTRY: {
            let followCountryUpdate = [...state.followCountry];
            let index = followCountryUpdate.findIndex((country) => country.Country === action.data.Country);
            followCountryUpdate.splice(index, 1);
            state.followCountry = followCountryUpdate;
            return { ...state };
        }

        default: return state;
    }
}