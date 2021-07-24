import './AddToList.css';
import firebase from 'firebase';

const AddToListTV = ({addItem}) => {
    const dbRef = firebase.database().ref('user/lists/tv');

    const addToFirebase = () => {
        dbRef.push({
            poster: `https://image.tmdb.org/t/p/original${addItem.poster_path}`,
            id: addItem.id
        })


    }


    return (
        <button className="AddButton" 
                onClick={addToFirebase}> 
                
        <p>+ Add to Watchlist </p>
        
        </button>
    )

 }

 export default AddToListTV;