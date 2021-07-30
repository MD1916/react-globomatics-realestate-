import React from 'react';
import {useHistory} from 'react-router-dom';

const SearchResultsRow = ( { house } ) => {
    const history = useHistory();
    const setactive=()=>{
        history.push(`/house/${house.id}`);
    };

    const setActive = () => {}
    return (
       
        <tr onClick={setactive}>
            <td>
                {house.address}
            </td>
            <td>
                {house.price}
            </td>
            <td>
                {house.likes}
            </td>
        </tr>

    );
};

export default SearchResultsRow;