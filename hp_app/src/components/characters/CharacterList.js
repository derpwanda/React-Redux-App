import React, { useEffect } from 'react'
import SingleCharacter from "./SingleCharacter";
import { connect } from 'react-redux';
import { getHPChars } from '../../actions/CharactersActions'

const CharacterList = props => {

    // const fetchCharacters = event => {
    //     props.getHPChars();
    // };

    useEffect(() => {
        props.getHPChars();
    }, [])

    // console.log("CList state:", state)

    return (
        <div>
            <SingleCharacter />
        </div>
    )
}


const mapStateToProps = state => ({
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching
})

export default connect(mapStateToProps, { getHPChars })(CharacterList);
