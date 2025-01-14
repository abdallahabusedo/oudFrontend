import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { base } from "../../../config/environment"
import { config } from "../../../utils/auth"
/**
 * this is a component that renders the Top of the body of playlists, albums, likedSongs
 * on clicking the name of the owner it takes you to his/her profile
 * @author Ahmed Walid <ahmedwa1999@gmail.com>
 * @func
 * @param {string} title the title of playlists, albums
 * @param {string} owner the Id of the owner of playlists or albums. It is used to fetch his/her name from the database
 * 
 * @returns {
 *              <Router>
 *               <div>
 *                  <h2></h2>
 *                  <span></span>
 *                  <Link></Link> "A react router component"
 *               </div>
 *          </Router>
 *          }
 */
function HeaderBodyTop(props) {
    /**
     * ownerName is a state that carries the name of the owner of the playlist or album
     * @constant
     * @type {string}
     */
    const [ownerName, setOwnerName] = useState('')
    const { title, owner } = props;
    /**
     * fetching the owner name and setting state
     */
    axios.get(`${base}/users/${owner}`, config)
        .then((response) => {
            const user = response.data;
            setOwnerName(user.displayName);
        })
        .catch((error) => {
            console.log(error);
        });
    let history = useHistory()
    return (
        <div data-testid="HeaderBodyTop" className='playlistHeaderBodyTop'>
            <h2 data-testid="title" className='gray-text'>{title}</h2>
            <span data-testid="credits" className="whiteText">Created By </span>
            <button data-testid="owner" className='playlistAnchor songButton' onClick={() => { history.push(`/profile/${owner}`) }}>{ownerName}</button>
        </div>
    );
}

HeaderBodyTop.propTypes = {
    title: PropTypes.string,
    owner: PropTypes.string
}

export default HeaderBodyTop;
