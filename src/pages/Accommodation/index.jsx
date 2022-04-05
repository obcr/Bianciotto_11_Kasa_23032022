import { NavLink } from 'react-router-dom'
import Header from '../../components/Header';
import BodyAccommodationId from '../../components/BodyAccommodationId';
import Footer from '../../components/Footer';

const Accommodation = () => {
//     const { id } = useParams();
// console.log('id du logement', id);

// const [dataAccommodation, setDataAccommodation] = useState([]);

// useEffect(() => {
//     axios.get('./flat.json').then((res) => {console.log('Data Accommodation Egale', res.data)
//     setDataAccommodation(res.data)});
//     },[])

//     console.log('Data Accommodation Egale Id', dataAccommodation.id);


// const dataAccommodation = data.find(dataAppartement => dataAppartement.id === id)
// console.log('dataAccommodation', dataAccommodation);

// if (!dataAccommodation) {
//     // ne render pas le composant
//     return null
// }
// const { pictures, title, location, host, tags, rating, description, equipments } = dataAccommodation


    return (
        <div>
            <NavLink to="/Accommodation"></NavLink>
            <Header/>
            <BodyAccommodationId/>
      <Footer />
        </div>
    );
};

export default Accommodation;

