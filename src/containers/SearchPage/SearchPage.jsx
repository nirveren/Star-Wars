import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';
import {debounce} from 'lodash';
import { getApiResource } from '../../utils/network';
import styles from './SearchPage.module.css';
import { API_SEARCH } from '../../constants/api';
import { withErrorApi } from '../../hoc/withErrorApi';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import UiInput from '../../components/UI/UiInput';




const SearchPage = ({setErrorApi}) => {
    const [inputSearch, setInputSearch] = useState('');
    const [people, setPeople] = useState([]);
    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH+param); 
        if(res) {
            const peopleList = res.results.map(({name, url})=> {
                const id =  getPeopleId(url);
                const img = getPeopleImage(id)
                return {
                    id, 
                    name, 
                    img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect (()=> {
        getResponse('')
    }, []);

    const debounceGetResponce =  useCallback(
        debounce(value => getResponse(value), 300),
        []
    );
    const handleInputChange = value => {
        setInputSearch(value);
        debounceGetResponce(value);
    }
  return(
    <>
        <h1 className={styles.header__text}>Search</h1>

        <UiInput 
            value={inputSearch}
            handleInputChange={handleInputChange}
            placeholder='Input character name'
            classes={styles.input__search}
        />

        <SearchPageInfo
        people={people}
        />
    </>
  )
}



SearchPage.propTypes = {
        setErrorApi: PropTypes.func
}


export default withErrorApi(SearchPage);