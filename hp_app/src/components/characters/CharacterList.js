import React, { useEffect } from 'react'
import SingleCharacter from "./SingleCharacter";
import { connect } from 'react-redux';
import { getHPChars } from '../../actions/CharactersActions'

const CharacterList = props => {
    console.log("before useE", props)

    useEffect(() => {
        props.getHPChars();
    }, [])

    console.log("props", props.characters)
    return (
        <div>
            <h2>Characters</h2>
            {props.isFetching && <p>Getting Our Characters!</p>}
            {props.characters.map(item => (
                <SingleCharacter key={item._id} person={item} />
            ))}
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => ({

// })
const mapStateToProps = state => {
    console.log("MSTP", state.charReducer)
    return {
        characters: state.charReducer.characters,
        error: state.charReducer.error,
        isFetching: state.charReducer.isFetching
        // state: state.charReducer.characters
    }

}

export default connect(mapStateToProps, { getHPChars })(CharacterList);
