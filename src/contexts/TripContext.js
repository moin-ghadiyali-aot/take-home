import { useEffect, createContext, useReducer } from 'react'
import { api } from 'services/httpService'

export const TripContext = createContext()

const initialState = {
  trips: [], // Initial state is empty trips
  form: {
    country: '', // Initial state is empty string
    startDate: '', // Initial state is empty string
    endDate: '', // Initial state is empty string
    company: '', // Initial state is empty string
    city: '', // Initial state is empty string
    street: '', // Initial state is empty string
    streetNumber: '', // Initial state is empty string
    zipCode: '', // Initial state is empty string
    testedCovid: false, // Initial state is false
  },
  countries: [], // List of countries to fetch
  selectedCountry: '',
}

// We use spread operator (...state) to keep unchanged values
const reducer = (state, action) => {
  switch (action.type) {
    // This set all trips (fetch method)
    // so action.payload has to be array []
    case 'SET_TRIPS':
      return {
        trips: action.payload,
        form: { ...state.form },
        countries: [...state.countries],
      }
    // This set/add single trip to array, existing ones are kept
    // so action.payload has to be object (single trip)
    case 'SET_COUNTRIES':
      return {
        trips: [...state.trips],
        form: { ...state.form },
        countries: action.payload,
        selectedCountry: state.selectedCountry,
      }
    // This set/add single trip to array, existing ones are kept
    // so action.payload has to be object (single trip)
    case 'SET_SELECTED_COUNTRY':
      return {
        trips: [...state.trips],
        form: { ...state.form },
        countries: [...state.countries],
        selectedCountry: `flag-${action.payload}`,
      }
    // This set/add single trip to array, existing ones are kept
    // so action.payload has to be object (single trip)
    case 'ADD_TRIP':
      return {
        trips: [...action.payload, action.payload],
        form: { ...state.form },
        countries: [...state.countries],
      }
    // This set form fields
    case 'SET_FORM':
      return {
        trips: [...state.trips],
        form: {
          ...state.form,
          [action.payload.key]: action.payload.value,
        },
        countries: [...state.countries],
      }
    default:
      throw new Error()
  }
}

const TripProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/trip')

      // Dispatch action so reducer cat set data
      dispatch({ type: 'SET_TRIPS', payload: data })
    }

    fetchData()
    fetchCountries()
  }, [])

  // This function fetch data (countries), sort them, and then dispatch action SET_COUNTRIES
  // so countries will be set to reducer (take a look on TripContext.js, line 19)
  const fetchCountries = async () => {
    const { data } = await api.get('/country')
    const sortedData = data.sort((a, b) => (a.label > b.label ? 1 : -1))

    const countriesData = []
    sortedData.forEach(data => {
      countriesData.push({
        value: data.value,
        label: data.label,
        className: `flag-${data.value}`,
      })
    })

    dispatch({ type: 'SET_COUNTRIES', payload: countriesData })
  }

  return (
    <TripContext.Provider value={[state, dispatch]}>
      {children}
    </TripContext.Provider>
  )
}

export default TripProvider
