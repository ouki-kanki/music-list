import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {

    const { username } = props;

    return (
        <header>
            <h1>MusicList</h1>
                <div className="user-menu">
                    <h2>Welcome { username }</h2>
                    <h3>Below are your amazing options for today</h3>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/acount/profile/captain">Profile</Link></li>
                        </ul>
                    </nav>
                </div>
        </header>
        );
}
