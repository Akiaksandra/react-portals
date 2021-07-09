import React, {useState, useEffect} from 'react';
import Itemcomponent from '../item-component';
import SwapiService from '../services/swapi-service';

const Swapi = new SwapiService();

const ItemsList = () => {
  
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    setState({...state, loading: true})
    Swapi.getAllPeople()
        .then(result => {
            setState({
                ...state,
                loading: false,
                data: result,
                error: false
            })
        }).catch(()=> {
          setState({
            ...state,
            loading: false,
            error: true
        })
        })
  }, [])

  if (state.loading) {
    return <p>Loading...</p>;
  }

  if (state.error) {
    return <p>ERROR!!!</p>;
  }

  return (
    <div>
      {
        state.data && state.data.map(item => {

          return (
            <div key={item.id}>
              <Itemcomponent {...item} />
            </div>
          )
        })
      }
    </div>
  )

}

export default ItemsList