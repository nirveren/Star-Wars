import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import styles from './PersonPage.module.css';
import PropTypes from 'prop-types';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import { useParams } from 'react-router-dom';
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';
import UiLoading from '../../components/UI/UiLoading';



const PersonFilms = React.lazy(()=> import ('../../components/PersonPage/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setpersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(null);

    const storeData = useSelector(state => state.favoriteReducer);

    const { id } = useParams();
    useEffect(() => {
        (async () => {

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

            setPersonId(id);

            const res = await getApiResource(`${API_PERSON}/${id}/`);
            

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setPersonName(res.name);
                setpersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films)
            }

        })();
    }, [])

    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personFavorite = {personFavorite}
                        setPersonFavorite = {setPersonFavorite}
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                    />
                    {personInfo && <PersonInfo
                        personInfo={personInfo}
                    />}
                    {personFilms && 
                    <Suspense fallback={<UiLoading/>}>
                        <PersonFilms
                        personFilms={personFilms}
                        />
                    </Suspense>
                    }
                </div>
                
            </div>

        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(PersonPage);