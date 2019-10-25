import React, { useEffect } from 'react'
import SingleCharacter from "./SingleCharacter";
import { connect } from 'react-redux';
import { getHPChars } from '../../actions/CharactersActions'

const CharacterList = (props, { getHPChars }) => {
    console.log("before useE", props)

    useEffect(() => {
        props.getHPChars();
    }, [])

    console.log("props", props)
    return (
        <div>
            <h2>Characters</h2>
            <SingleCharacter />
        </div>
    )
}


const mapStateToProps = state => {
    console.log("MSTP", state)
    return {
        characters: state.characters,
        error: state.error,
        isFetching: state.isFetching
    }

}

export default connect(mapStateToProps, { getHPChars })(CharacterList);
