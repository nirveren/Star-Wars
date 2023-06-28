import styles from './PeoplePage.module.css';
import { withErrorApi } from '../../hoc/withErrorApi';
import { getApiResource, changeHttp } from '../../utils/network';
import { useState, useEffect } from 'react';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage, getPeopleData } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import PropTypes from 'prop-types';
import { useQuerryParams } from '../../hooks/useQuerryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1)

    const querry = useQuerryParams();
    const querryPage = querry.get('page')


    const getResource = async (url) => {
        const res = await getApiResource(url);
        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }
            });


            setPeople(peopleList);
            setPrevPage(changeHttp(res.previous));
            setNextPage(changeHttp(res.next));
            setCounterPage(getPeopleData(url))
            setErrorApi(false);
        }  
            setErrorApi(!res);
        

    }
    useEffect(() => {
        getResource(API_PEOPLE+querryPage);
    }, []);
    return (
        <> 
            <PeopleNavigation
            getResource={getResource}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    )
        

}

PeoplePage.propTypes = {
    people: PropTypes.func
}

export default withErrorApi(PeoplePage);
